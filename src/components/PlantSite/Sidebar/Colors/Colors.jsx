import Input from '../../Components/Inputs'
import './Colors.css'


function Colors({handleChange}) {
    return (
        <div>
            <h2 className='sidebar-title color-title'>Colors</h2>
            <label className='sidebar-label-container'>
                    <input onChange={handleChange} type='radio' value='' name='test' />
                    <span className='checkmark all'></span>All
            </label>

            <Input 
                handleChange={handleChange}
                value='red'
                title='Red'
                name='test'
                color='red'
            />
            <Input 
                handleChange={handleChange}
                value='purple'
                title='Purple'
                name='test'
                color='purple'
            />
            <Input 
                handleChange={handleChange}
                value='yellow'
                title='Yellow'
                name='test'
                color='yellow'
            />
            <Input 
                handleChange={handleChange}
                value='green'
                title='Green'
                name='test'
                color='green'
            />
            <Input 
                handleChange={handleChange}
                value='pink'
                title='Pink'
                name='test'
                color='pink'
            />
            <Input 
                handleChange={handleChange}
                value='blue'
                title='Blue'
                name='test'
                color='blue'
            />

        </div>
    )
}

export default Colors