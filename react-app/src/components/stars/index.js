import "./stars.css"

const Stars = ({ rating }) => {

    const starRating = parseFloat((Math.round(rating * 2) / 2).toFixed(1));

    const className = {
        1.0: "rating-10",
        1.5: "rating-15",
        2.0: "rating-20",
        2.5: "rating-25",
        3.0: "rating-30",
        3.5: "rating-35",
        4.0: "rating-40",
        4.5: "rating-45",
        5.0: "rating-50"
    }

    return (
        <svg id="rating" class={`rating ${className[starRating]}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 865 145" >
            <defs>
                <linearGradient id="rating-gradient-0" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#CCCCCC" /><stop offset="100%" stop-color="#AEAFAD" /></linearGradient>
                <linearGradient id="rating-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#D99422" /><stop offset="100%" stop-color="#BA7E1B" /></linearGradient>
                <linearGradient id="rating-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#E5BA2B" /><stop offset="100%" stop-color="#D0A825" /></linearGradient>
                <linearGradient id="rating-gradient-3" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#F0A629" /><stop offset="100%" stop-color="#F0880F" /></linearGradient>
                <linearGradient id="rating-gradient-4" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#F4834B" /><stop offset="100%" stop-color="#F04802" /></linearGradient>
                <linearGradient id="rating-gradient-5" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#EC050B" /><stop offset="100%" stop-color="#C8060A" /></linearGradient>
            </defs>

            <path class="stars-1f" d="M110.6 0h-76.9c-18.6 0-33.7 15.1-33.7 33.7v76.9c0 18.6 15.1 33.7 33.7 33.7h76.9c18.6 0 33.7-15.1 33.7-33.7v-76.9c0-18.6-15.1-33.7-33.7-33.7z" />
            <path class="stars-0h" d="M33.3,0.3C14.7,0.3-0.4,15.4-0.4,34V111c0,18.6,15.1,33.7,33.7,33.7h38.3V0.3H33.3z" />

            <path class="stars-2f" d="M290.6 0h-76.9c-18.6 0-33.7 15.1-33.7 33.7v76.9c0 18.6 15.1 33.7 33.7 33.7h76.9c18.6 0 33.7-15.1 33.7-33.7v-76.9c0-18.6-15.1-33.7-33.7-33.7z" />
            <path class="stars-1h" d="M214,0.3c-18.6,0-33.7,15.1-33.7,33.7v77c0,18.6,15.1,33.7,33.7,33.7h38.3V0.3H214z" />

            <path class="stars-3f" d="M470.4 0h-76.9c-18.6 0-33.7 15.1-33.7 33.7v76.9c0 18.6 15.1 33.7 33.7 33.7h76.9c18.6 0 33.7-15.1 33.7-33.7v-76.9c.1-18.6-15.1-33.7-33.7-33.7z" />
            <path class="stars-2h" d="M393.9,0.6c-18.6,0-33.7,15.1-33.7,33.7v77c0,18.6,15.1,33.7,33.7,33.7h38.3V0.6H393.9z" />

            <path class="stars-4f" d="M650.6 0h-76.9c-18.6 0-33.7 15.1-33.7 33.7v76.9c0 18.6 15.1 33.7 33.7 33.7h76.9c18.6 0 33.7-15.1 33.7-33.7v-76.9c0-18.6-15.1-33.7-33.7-33.7z" />
            <path class="stars-3h" d="M573.9 0c-18.6 0-33.7 15.1-33.7 33.7v77c0 18.6 15.1 33.7 33.7 33.7h38.3v-144.4h-38.3z" />

            <path class="stars-5f" d="M830.6 0h-76.9c-18.6 0-33.7 15.1-33.7 33.7v76.9c0 18.6 15.1 33.7 33.7 33.7h76.9c18.6 0 33.7-15.1 33.7-33.7v-76.9c0-18.6-15.1-33.7-33.7-33.7z" />
            <path class="stars-4h" d="M753.8 0c-18.6 0-33.7 15.1-33.7 33.7v77c0 18.6 15.1 33.7 33.7 33.7h38.3v-144.4h-38.3z" />

            <path class="stars" fill="#FFF" stroke="#FFF" stroke-width="2" stroke-linejoin="round" d="M72 19.3l13.6 35.4 37.9 2-29.5 23.9 9.8 36.6-31.8-20.6-31.8 20.6 9.8-36.6-29.5-23.9 37.9-2zm180.2 0l13.6 35.4 37.8 2-29.4 23.9 9.8 36.6-31.8-20.6-31.9 20.6 9.8-36.6-29.4-23.9 37.8-2zm179.8 0l13.6 35.4 37.9 2-29.5 23.9 9.8 36.6-31.8-20.6-31.8 20.6 9.8-36.6-29.5-23.9 37.9-2zm180.2 0l13.6 35.4 37.8 2-29.4 23.9 9.8 36.6-31.8-20.6-31.9 20.6 9.8-36.6-29.4-23.9 37.8-2zm180 0l13.6 35.4 37.8 2-29.4 23.9 9.8 36.6-31.8-20.6-31.9 20.6 9.8-36.6-29.4-23.9 37.8-2z" />
        </svg>
    )
}

export default Stars;
