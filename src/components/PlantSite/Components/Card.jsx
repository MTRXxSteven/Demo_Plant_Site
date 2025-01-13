import{AiFillStar} from 'react-icons/ai'
import{BsFillBagHeartFill} from 'react-icons/bs'

function Card({img, title, star, reviews, newPrice, prevPrice}) {
    // Create an array of the desired number of stars
    const starsArray = Array(star).fill(0); 

    return (
        <section className='card'>
            <img src={img}
            alt={title} 
            className='card-img'
            />
            <div className='card-details'>
                <h3 className='card-title'>{title}</h3>
                <section className="card-reviews">
                 {/* Map over the starsArray to render stars */}
                 {starsArray.map((_, index) => (
                        <AiFillStar key={index} className="ratings-star" />
                    ))}
                    <span className="total-reviews">{reviews}</span>
                </section>

                <section className="card-price">
                    <div className="price">
                        <del>{prevPrice}</del> {newPrice}
                    </div>

                    <div className="bag">
                        <BsFillBagHeartFill className='bag-icon'/>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Card