import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const links = [
  {name:"New Arrivals", id:1},
  {name:"Trending Now", id:2},
  {name:"Shop by Occasion", id:3},
  {name:"Shop by Product", id:4},
  {name:"Gifting", id:5},
  {name:"Magazine", id:6},
  {name:"Sustainability", id:7}
]

const FilteredProductId = () => {
    const [productId, setProductId] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const {id} = useParams()

    useEffect(() => {
      const fetchedProduct = async () => {
        try{
            const response = await axios.get(`http://localhost:4000/products/${id}`)
              console.log(response.status)
              console.log(response.data)
              setProduct(response.data)
            }catch(error) {
              console.log(error)
            }
        }
        
      fetchedProduct()
    }, [ id])
    console.log(id)
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
      <div className='bg-red-900'>
          
      </div>
    </div>
  )
}

export default FilteredProductId