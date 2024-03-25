import React, {useState} from 'react'
import { Heart } from 'react-feather'
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


const FilteredProductSingle = ({product}) => {
    const [likes, setLikes] = useState(false)

    const handleLikes = () => {
        setLikes((prev) => !prev)
    }
    const {category } = useParams()
    console.log(product)
  return (
    <div>
        <div className='mb-[30px]'>
        <Link to={`/product/${category}/${product.id}`}>
            <div>
                <img src={product.img} alt={product.productName} />
            </div>
         </Link>
            <div className='text-[#001F3F]'>
                <div className='flex items-center justify-between'>
                    <p className='font-[500] py-2 text-[16px]'>{product.productName}</p>
                    {likes ? (
                        <span onClick={handleLikes} className='bottom-3 cursor-pointer text-2xl '><IoMdHeart /></span>
                    ) : (
                        <span onClick={handleLikes} className=' bottom-3 cursor-pointer text-fade'><Heart /></span>
                    )}
                </div>
                {Array.isArray (product.color) ? (
                    <ul className='flex'>
                        {product.color.map((color) => (
                        <li  
                        style={{ backgroundColor: color, width: '10px', height: '10px', 
                        borderRadius: '50%', marginRight: '5px' }} key={color.index}>
                        </li>
                        ))}
                    </ul>
                    ):
                    ( 
                    <p  
                    style={{ backgroundColor: product.color, width: '10px', 
                    height: '10px', borderRadius: '50%', marginRight: '5px' }}></p>
                )}
                <p className='text-end font-size-[10px] font-[400]'>New Arrivals</p>
                <p className='text-fadeblue'>${product.newPrice}</p>
            </div>
        </div>
    </div>
  )
}

export default FilteredProductSingle