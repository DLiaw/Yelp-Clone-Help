import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllReviews } from '../../store/review'
import SingleReview from './SingleBusiness'
import './landingPage.css'

// Landing page components

const LandingPage = () => {
    const allReview = useSelector(state => Object.values(state.review.allReviews))
    const dispatch = useDispatch()

    useEffect(async () => {
        await dispatch(getAllReviews())
    }, [dispatch])

    let reviews = []
    if (allReview) {
        allReview.slice(0, 9).map(review => (
            reviews.push(<SingleReview key={review.id} review={review} />)
        ))
    } else { reviews = (<>failed</>) }
    return (
        <div className='landing-main-div'>
            <div className='title'> <h1 className='title-h1'>Recent Activity</h1></div>
            <div className='single-card-grid'>
                {reviews}
            </div>
        </div>
    )
}


export default LandingPage;
