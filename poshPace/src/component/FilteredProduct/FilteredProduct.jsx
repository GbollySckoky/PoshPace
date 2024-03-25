import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GoChevronDown } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import {Link} from "react-router-dom"
import FilteredProductSingle from './FilteredProductSingle';
import axios from 'axios'
const sorts = [
    {
        id:1,
        name:"SORT BY",
        icon: <GoChevronDown />
    },
    {
        id:2,
        name:"COLOUR",
        icon: <GoChevronDown />
    },
    {
        id:3,
        name:"SIZE",
        icon: <GoChevronDown />
    },
    {
        id:4,
        name:"BRAND",
        icon: <GoChevronDown />
    },
    {
        id:5,
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
    const [products, setProducts] = useState([]) // state that holds the data fetched 
    const [filteredProducts, setFilteredProducts] = useState([]) // state that holds the data filtered
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // fetching the products from the api
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/products'); // Use axios.get to fetch data
                console.log(response.data);
                console.log(response.status);
                setProducts(response.data)
                setIsLoading(false)
            } catch (error) {
                if(error.response){
                    setError(error.response.data)
                    console.log(error.response.data)
                    console.log(error.response.status)
                }
                else{
                    setError(`Error: ${error.message}`)
                }
                setIsLoading(false)
            }
        };

        fetchProducts();
    }, []);

    // Get the category parameter from the URL types of products
    const { category } = useParams();

    // filter Data
    useEffect(() => {
        setFilteredProducts(products.filter((product) => product.category === category))
    },[category, products])
 
    return (
        <div>
            <ul 
                className='flex items-center justify-center bg-fadeblue 
                text-white py-[15px] text-sm font-[200]'>
                    {links.map((link, id) => (
                        <li key={link.id}>
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
                    <div key={sort.id}>
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
                {isLoading ? ( <p>LOADING...</p> 
                ):(
                <div className='grid grid-cols-4 gap-[35px] mt-[50px] w-[80%] mx-auto'>
                {filteredProducts.map((product) => (
                    <div key={product.id}>
                        <FilteredProductSingle product={product} />
                    </div>
                ))}
                </div>
                )} 
                {error && ( <div>Error: {error}</div> ) }
            </div>
        </div>
    );
}

export default FilteredProduct;
