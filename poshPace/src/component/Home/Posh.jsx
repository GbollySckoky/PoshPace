import React from 'react'
import DummyData from '../../component/DummyData'
import { nextSlide, prevSlide, dotSlide } from '../../Features/Slider/sliderSlice'
import {useSelector, useDispatch} from 'react-redux'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";


const Posh = () => {
    const dispatch = useDispatch()
    const currentSlide = useSelector((state) => state.slider.value);
    const handleNextSlide = () => {
        dispatch(nextSlide(currentSlide +1));
      };
    
      const handlePrevSlide = () => {
        dispatch(prevSlide(currentSlide -1)); 
      };
    const handleDots = (index) => {
        dispatch(dotSlide(index));
    }
  return (
    <div className='bg-red-900'>
        <div className=''>
            {DummyData.map((product) => (
                <div key={product.id} className={parseInt(product.id) ===  currentSlide ? 'opacity-100 duration-700 ease-in-out scale-100' : 'opacity-0 duration-700 ease-in-out scale-95'}>
                    <div>
                    {parseInt(product.id) ===  currentSlide && (
                        <img className='bg-black w-full h-[630px] bg-cover bg-center ' src={product.img} alt="" />
                    )}   
                    </div>
                    <div 
                    className='absolute text-center top-[50%] inset-x-1/4 text-3xl text-white font-semibold'>
                    {parseInt(product.id) ===  currentSlide &&<p>{product.text}</p>}
                    </div>
                </div>  
            ))}
        </div>
        <div className='flex absolute bottom-[30px] px-5 left-[45%] '>
            {DummyData.map((item, index) => (
                <div className='px-2' key={index}>
                    <div 
                    className={index == currentSlide 
                    ? 'bg-green-500 rounded-full p-4  cursor-pointer' 
                    : 'bg-white rounded-full p-4 cursor-pointer'}
                    onClick={() => handleDots(index)}>

                    </div>
                </div>
            ))}
        </div>
        <div>
            <FaAngleLeft className='top-[65%]  text-2xl cursor-pointer absolute' onClick={handlePrevSlide}/>
            <FaAngleRight className='top-[65%] text-2xl  cursor-pointer absolute right-2' onClick={handleNextSlide}/>
            </div>
    </div>
  )
}

export default Posh