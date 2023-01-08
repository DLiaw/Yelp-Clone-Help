"""empty message

Revision ID: 7540529dc674
Revises:
Create Date: 2023-01-05 22:51:25.120991

"""
from alembic import op
import sqlalchemy as sa
from app.models import db, environment, SCHEMA
# revision identifiers, used by Alembic.
revision = '7540529dc674'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=False),
    sa.Column('last_name', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")

    op.create_table('business',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=False),
    sa.Column('address', sa.String(length=255), nullable=False),
    sa.Column('city', sa.String(length=25), nullable=False),
    sa.Column('state', sa.String(length=25), nullable=False),
    sa.Column('country', sa.String(length=25), nullable=True),
    sa.Column('zip', sa.String(length=10), nullable=False),
    sa.Column('lat', sa.Float(), nullable=True),
    sa.Column('lng', sa.Float(), nullable=True),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('description', sa.String(length=2500), nullable=True),
    sa.Column('price', sa.String(), nullable=False),
    sa.Column('phone_number', sa.String(length=15), nullable=False),
    sa.Column('business_type', sa.String(length=25), nullable=False),
    sa.Column('monOpen', sa.String(length=50), nullable=False),
    sa.Column('tueOpen', sa.String(length=50), nullable=False),
    sa.Column('wedOpen', sa.String(length=50), nullable=False),
    sa.Column('thuOpen', sa.String(length=50), nullable=False),
    sa.Column('friOpen', sa.String(length=50), nullable=False),
    sa.Column('satOpen', sa.String(length=50), nullable=False),
    sa.Column('sunOpen', sa.String(length=50), nullable=False),
    sa.Column('monClose', sa.String(length=50), nullable=False),
    sa.Column('tueClose', sa.String(length=50), nullable=False),
    sa.Column('wedClose', sa.String(length=50), nullable=False),
    sa.Column('thuClose', sa.String(length=50), nullable=False),
    sa.Column('friClose', sa.String(length=50), nullable=False),
    sa.Column('satClose', sa.String(length=50), nullable=False),
    sa.Column('sunClose', sa.String(length=50), nullable=False),
    sa.Column('site', sa.String(length=100), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE business SET SCHEMA {SCHEMA};")

    op.create_table('business_images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('business_id', sa.Integer(), nullable=False),
    sa.Column('business_image', sa.String(length=500), nullable=False),
    sa.Column('preview', sa.Boolean(), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.ForeignKeyConstraint(['business_id'], ['business.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE business_images SET SCHEMA {SCHEMA};")

    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('business_id', sa.Integer(), nullable=False),
    sa.Column('review', sa.String(length=2500), nullable=False),
    sa.Column('stars', sa.Float(), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.ForeignKeyConstraint(['business_id'], ['business.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE reviews SET SCHEMA {SCHEMA};")

    op.create_table('review_images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('review_id', sa.Integer(), nullable=False),
    sa.Column('review_image', sa.String(length=500), nullable=False),
    sa.Column('preview', sa.Boolean(), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.ForeignKeyConstraint(['review_id'], ['reviews.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE review_images SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('review_images')
    op.drop_table('reviews')
    op.drop_table('business_images')
    op.drop_table('business')
    op.drop_table('users')
    # ### end Alembic commands ###
