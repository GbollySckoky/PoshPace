import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GoChevronDown } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import {Link} from "react-router-dom"
import FilteredProductSingle from './FilteredProductSingle';
const sorts = [
    {
        name:"SORT BY",
        icon: <GoChevronDown />
    },
    {
        name:"COLOUR",
        icon: <GoChevronDown />
    },
    {
        name:"SIZE",
        icon: <GoChevronDown />
    },
    {
        name:"BRAND",
        icon: <GoChevronDown />
    },
    {
        name:"PATTERNS",
        icon: <GoChevronDown />
    },
]

const links = [
    {name:"New Arrivals", id:1},
    {name:"Trending Now", id:2},
    {name:"Shop by Occasion", id:3},
    {name:"Shop by Product", id:4},
    {name:"Gifting", id:5},
    {name:"Magazine", id:6},
    {name:"Sustainability", id:7}
]

const FilteredProduct = () => {
    const [filteredProducts, setFilteredProducts] = useState([])
    // Get the filtered product state from the Redux store
    const filteredProduct = useSelector((state) => state.products.filteredProduct);
    console.log(filteredProduct);
    
    // to stop the countinous re-rendring
    useEffect(() => {
        setFilteredProducts(filteredProduct)
    },[filteredProduct])
    console.log(filteredProducts)

    // Get the category parameter from the URL
    const { category } = useParams();
    console.log(category);

    return (
        <div>
            <ul 
                className='flex items-center justify-center bg-fadeblue 
                text-white py-[15px] text-sm font-[200]'>
                    {links.map((link, index) => (
                        <li key={link.index}>
                            <Link className='px-7'>{link.name}</Link>
                        </li>
                    ))}
            </ul>
            <h1 className='text-center my-[30px] text-[#001F3F] 
                text-lg font-bold'>
                UP TO 50% OFF FRESH FINDS
            </h1>
            <div id='tip' className='flex items-center  justify-center'>
                {sorts.map((sort) => (
                    <div key={sort.index}>
                        <p>{sort.name}</p>
                        <span className='pl-1'>{sort.icon}</span>
                    </div>
                ))}
                <div>
                    <span className='pr-1'><CiFilter /></span>
                    <p>FILTER</p>
                </div>
            </div>
            <div>
                {filteredProduct.filter((product) => product.category === category).map((product) => (
                    <div key={product.id}>
                        <FilteredProduct product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilteredProduct;
