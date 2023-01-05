import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { newReview } from '../../store/review';
import { getOneBusiness } from '../../store/business';
import StarRating from './StarRating';
import './NewReview.css'
import image1 from './image1.png'
import image2 from './image2.png'

const CreateReview = () => {
    const user = useSelector(state => state.session.user)
    const business = useSelector(state => state.business?.oneBusiness)
    const dispatch = useDispatch()
    const history = useHistory()
    const [error, setError] = useState('')
    const [review, setReview] = useState('')
    const [stars, setStars] = useState('0')
    const { id } = useParams();

    useEffect(() => {
        const validations = []
        if (review.length > 500) validations.push("Reviews must be less than 500 characters.")
        setError(validations)
    }, [review])

    useEffect(() => {
        dispatch(getOneBusiness(id))
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!error.length) {
            const data = {
                review, stars, 'user_id': user.id, 'business_id': id
            }
            dispatch(newReview(data))
            history.push(`/business/${id}`)
        }
    }

    return (
        <div className='create-review-main-div'>
            <div className='two-image-div'>
                <img className='review-form-image1' alt='review-img1' src={image1}></img>
            </div>
            <div className='reviw-form-star'>

                <div >
                    <div style={{ fontSize: '30px', paddingBottom: '5px' }}>{business.name}</div>
                    <form onSubmit={handleSubmit}>
                        <label style={{ paddingRight: '200px', color: 'grey', fontSize: '20px' }}>Your thoughts here...</label>
                        <textarea
                            className='review-form-input'
                            type="text"
                            placeholder="I ordered the Creme Brulee Boba Milk , with 75% sweetness. The drink had the right level of sweetness, and the boba itself was perfectly chewy. I wanted to try out their other toppings as well, such as Mochi and Agar Boba, however the..."
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required />
                    </form>
                </div>

                <div className='review-star-div' >
                    <div className='stars-div'>
                        <StarRating className='review-stars' setStars={setStars} stars={stars} value={stars} />
                    </div>
                    <div className='submit-button-div'>
                        <button className='review-submit-button' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>

            </div>
            <div className='two-image-div'>
                <img className='review-form-image2' alt='review-img2' src={image2}></img>
            </div>
        </div>
    )
}

export default CreateReview;
