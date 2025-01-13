import Buttons from '../Components/Buttons'
import './Recommended.css'

function Recommended({handleClick}) {
    return  <>
        <div>
            <h2 className='recommended-title'>Recommended</h2>
            <div className="recommended-flex">
                <Buttons onClickHandler={handleClick} value='' title='All Products' />
                <Buttons onClickHandler={handleClick} value='True Bloom' title='True Bloom' />
                <Buttons onClickHandler={handleClick} value='Proven Winners' title='Proven Winners' />
                <Buttons onClickHandler={handleClick} value='Endless Summer' title='Endless Summer' />
                <Buttons onClickHandler={handleClick} value='Southern Living' title='Southern Living' />
            </div>
        </div>
    </>
}

export default Recommended