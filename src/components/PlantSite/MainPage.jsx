import { useState } from 'react'
import Navigation from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'

//Database
import products from './Db/Data'
import Card from './Components/Card'

//Treating MainPage a store passing state values to components as a prop
function MainPage() {
    const[selectedCategory, setSelectedCategory] = useState(null)

    //----------Input Filter------------
    const[query, setQuery] = useState('')

    const handleInputChange = event => {
        setQuery(event.target.value)
    }

    const filteredItems = products.filter(product => 
        product.title.toLowerCase().indexOf(query.toLowerCase()) !==
        -1
    )

    //----------Radio Filter------------
    const handleChange = event => {
        setSelectedCategory(event.target.value)
    }

    //----------Buttons Filter------------
    const handleClick = event => {
        setSelectedCategory(event.target.value)
    }


    //Convert currency string to number
    const currencyToNum = currency => {
        return Number(currency.split('$')[1])

    }

    //Refference number to the filter range
    const filterRange = (newPrice, selected) => {
        let shouldFilter

        if  (currencyToNum(newPrice) < Number(selected) && currencyToNum(newPrice) > Number(selected)-15)
            shouldFilter = true 
        
        if (currencyToNum(newPrice) > 60 && Number(selected) === 100)
            shouldFilter = true

        return shouldFilter

    }

    function filteredData(products, selected, query){
        let filteredProducts = products

        //Filtering input items
        if (query) {
            filteredProducts = filteredItems
        }

        //Selected Filted
        if(selected) {
            filteredProducts = filteredProducts.filter(
                ({category, color, company, newPrice, title} ) => 
                category === selected || 
                color === selected ||
                company === selected || 
                filterRange(newPrice, selected) || 
                title === selected
            )

        }

        return filteredProducts.map(
            ({img, title, star, reviews, newPrice, prevPrice}) => (
                <Card 
                    key={Math.random()} 
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    newPrice={newPrice}
                    prevPrice={prevPrice}
                />
            )
        )
    }

    const result = filteredData(products, selectedCategory, query)

    return (
        <>
            <Sidebar handleChange={handleChange}/>
            <Navigation query={query} handleChange={handleInputChange}/>
            <Recommended handleClick={handleClick}/>
            <Products result={result}/>
       </>
    )
}

export default MainPage