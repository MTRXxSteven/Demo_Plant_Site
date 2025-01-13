import Input from '../../Components/Inputs'
import './Category.css'

function Category ({handleChange}){
    return(
        <div>
            <h2 className='sidebar-title'>Category</h2>

            <div>
                <label className='sidebar-label-container'>
                    <input onChange={handleChange} type='radio' value='' name='test' />
                    <span className='checkmark'></span>All
                </label>

                <Input type='radio'
                    handleChange={handleChange}
                    value='Flower'
                    title='Flowers'
                    name='test'
                />
                <Input type='radio'
                    handleChange={handleChange}
                    value='Shrub'
                    title='Shrubs'
                    name='test'
                />
                <Input type='radio'
                    handleChange={handleChange}
                    value='Succulent'
                    title='Succulents'
                    name='test'
                />
                <Input type='radio'
                    handleChange={handleChange}
                    value='Cactus'
                    title='Cacti'
                    name='test'
                />

            </div>
        </div>
    )
}

export default Category