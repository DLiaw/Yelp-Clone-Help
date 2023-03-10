from flask import Flask, jsonify, Blueprint, redirect, request
from ..models import db, User, Review, Business, ReviewImage, BusinessImage
from ..forms import BusinessForm, BusinessImageForm, ReviewForm, ReviewImageForm, SignUpForm, LoginForm
from flask_login import login_required, current_user
from app.api.auth_routes import validation_errors_to_error_messages
from app.api.aws import (upload_file_to_s3, allowed_file, get_unique_filename)
from werkzeug.datastructures import ImmutableMultiDict

review_images_routes = Blueprint("review_iamges", __name__)

## Adding an image for review

# @review_images_routes.route('/new',methods=['POST'])
# @login_required
# def review_image():
#     form = ReviewImageForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         new_review_image = ReviewImage(
#             review_image = form.data['review_image'],
#             review_id = form.data['review_id']
#         )
#         db.session.add(new_review_image)
#         db.session.commit()
#         return new_review_image.to_dict()
#     return {"errors": form.errors}, 401

@review_images_routes.route('/new',methods=['POST'])
@login_required
def review_image():
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]
    review_id = request.form['review_id']
    if not allowed_file(image.filename):
        return {"errors": "file  type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        return upload, 400

    url = upload["url"]
    new_image = ReviewImage(review_id=review_id, review_image=url)
    db.session.add(new_image)
    db.session.commit()
    return {"url": url}

## Update image for review

@review_images_routes.route('/<int:id>/edit',methods=['PUT'])
@login_required
def update_review_image(id):
    updated_review_image = ReviewImage.query.filter_by(review_id = id).first()
    form = ReviewImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        setattr(updated_review_image, 'review_image', form.data['review_image'])
        db.session.commit()
        res = updated_review_image.to_dict()
        return res
    if form.errors:
        return {"errors": form.errors}, 401
