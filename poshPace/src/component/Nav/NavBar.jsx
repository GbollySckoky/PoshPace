import React from 'react'
import {Link } from 'react-router-dom'


const NavBar = () => {
    const navBars =[ 
    "Women",
    'Men',
    'Kids',
    'Beauty',
    'Sport',
    'Sale',
    'Sustainability',
]

    
  return (
    <div>
        <div>
            <nav 
                className='flex items-center justify-around bg-darkblue text-white h-[50px]'>
                <ul className='flex text-sm font-thin '>
                    <li className='pr-6'>
                        <Link to={"#"}>Customer Service</Link>
                    </li>
                    <li className='pr-6'>
                        <Link to={'#'}>Store Locator</Link>
                    </li>
                    <li className='pr-6'>
                        <Link to={"#"}>News Letter</Link>
                    </li>
                </ul>
                <div className='btn text-2xl border-none bg-transparent'>
                    <Link to={"/"}>Posh Pace</Link>
                </div>
                <div className='flex text-sm font-thin'>
                    <li className='list-none pl-6'>
                        <Link to={"#"}>sign in</Link>
                    </li>
                    <li className='list-none pl-6'>
                        <Link to={"#"}> Favourites</Link> 
                    </li>
                    <li className='list-none pl-6'>
                        <Link to={"#"}>shopping Bag</Link>
                    </li>
                </div>
            </nav>
        </div>
        <div className='flex justify-center bg-tomato text-white px-[10px] py-[20px]'>
            {
                navBars.map((nav, index) => (
                <div className="px-[30px] text-sm text font-extralight" key={index}>
                <button>{nav}</button>
                </div>
                ))
            }
        </div>
        <div className='flex w-full'>
            <p 
            className='py-5 text-white bg-black w-[50%] text-center' 
            >UP TO 50% OFF FRESH FINDS
            </p>
            <p 
            className='bg-white text-center w-[50%] text-fadeblue py-5'
            >FREE WORLDWIDE DELIVERY
            </p>
        </div>
        <div className='py-[30px] bg-darkblue text-white text-center'>
            <p className='text-lg font-bold pb-2'>UP TO 50% OFF FRESH FINDS</p>
            <p className='text-sm font-extralight'>Members to get free delivery over every $30 and free returns</p>
        </div>
    </div>
  )
}

export default NavBar