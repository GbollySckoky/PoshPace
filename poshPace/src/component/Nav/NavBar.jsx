import React from 'react'

const NavBar = () => {
  return (
    <div>
        <div>
            <nav className='flex items-center justify-between bg-darkblue text-white'>
                <ul className='flex text-sm font-thin '>
                    <li className='pr-6'>
                        Customer Service
                    </li>
                    <li className='pr-6'>
                        Store Locator
                    </li>
                    <li className='pr-6'>
                        News Letter
                    </li>
                </ul>
                    <button>Posh Pace</button>
                <div className='flex text-sm font-thin'>
                    <li className='list-none pl-6'>
                        sign in
                    </li>
                    <li className='list-none pl-6'>
                        Favourites 
                    </li>
                    <li className='list-none pl-6'>
                        shopping Bag
                    </li>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default NavBar