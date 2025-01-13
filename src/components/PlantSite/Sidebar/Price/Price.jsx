import Input from '../../Components/Inputs'
import './Price.css'


function Price({handleChange}) {
    return (
        <div>
            <h2 className='sidebar-title price-title'>Price</h2>

            <label className='sidebar-label-container'>
                    <input onChange={handleChange} type='radio' value='' name='test' />
                    <span className='checkmark'></span>All
            </label>

            <Input 
            handleChange={handleChange}
            value={15}
            title='$0 - $15'
            name='test'
            />
            <Input 
            handleChange={handleChange}
            value={30}
            title='$15 - $30'
            name='test'
            />
            <Input 
            handleChange={handleChange}
            value={45}
            title='$30 - $45'
            name='test'
            />            
            <Input 
            handleChange={handleChange}
            value={60}
            title='$45 - $60'
            name='test'
            />            
            <Input 
            handleChange={handleChange}
            value={100}
            title='Over $60'
            name='test'
            />
        
        </div>
    )
}

export default Price