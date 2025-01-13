import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import './Sidebar.css'

function Sidebar({handleChange}) {
  return <>
    <section className='sidebar'>
        <div className='logo-container'>
          <img src='https://uxwing.com/wp-content/themes/uxwing/download/nature-and-environment/potted-plant-icon.png' 
            className='plant-logo'alt='plant logo'/>
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>

    </section>
  </>
}

export default Sidebar