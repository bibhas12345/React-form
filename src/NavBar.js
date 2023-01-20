import React from 'react'
import { BsFillEmojiLaughingFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <div>
      <div className=' bg-gray-600 w-full'>
        <ul className='flex justify-between py-2'>
            <li className='text-white font-bold p-1 px-2'>Enjoy guys</li>
            <li><BsFillEmojiLaughingFill className='mt-1 mr-3 text-white'/></li>
        </ul>
      </div>
    </div>
  )
}
