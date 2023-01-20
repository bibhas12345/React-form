import React from 'react'


export default function FormSec() {
  return (
    <div className='w-full '>
      <form>
      <div className='mt-4 ml-2 px-4 '>
        <label className='font-semibold'>Name</label>
        <input type="text" placeholder='enter name..' className='placeholder-gray-600 bg-gradient-to-l from-pink-500/90 to-gray-300/80 ml-12 shadow-md border border-white border-opacity-50 focus:shadow-outline h-9 w-2/3 rounded-2xl'/><br/>
        <label className='mt-2 font-semibold'>Email</label>
        <input type="email" placeholder='Mail..'className='placeholder-gray-600 bg-gradient-to-l from-pink-500/90 to-gray-300/80 ml-12 mt-1 shadow-md border border-white border-opacity-50 focus:shadow-outline h-9 w-2/3 rounded-2xl'/><br/>
        <label className='mt-2 font-semibold '>Password</label>
        <input type="password" placeholder='* * * * * * *' className='placeholder-gray-600 mt-1 bg-gradient-to-l from-pink-500/90 to-gray-300/80 ml-5 shadow-md border border-white border-opacity-50 focus:shadow-outline h-9 w-2/3 rounded-2xl'/><br/>
        <label className='mt-2 font-semibold  mr-2'>Age</label>
        <input type="number" className='placeholder-gray-600 bg-gradient-to-l from-pink-500/90 to-gray-300/80 ml-12 mt-1 shadow-md border border-white border-opacity-50 focus:shadow-outline h-9 w-2/3 rounded-2xl'/><br/>
        
      </div>

      <div className='mt-6 p-2 ml-4 flex'>
      <label className='flex flex-col w-1/3 font-mono font-bold'>City
        <input type="text" className='mt-1 shadow-md border bg-slate-300 border-gray-200 w-4/5 rounded-1xl'/></label>
        <label className='  flex flex-col font-mono font-bold'>State<select className=" bg-slate-300 py-1 mt-1 ">
        <option>Choose</option>
        <option>West Bengal</option>
          <option>Punjab</option>
          <option>other</option>
        </select></label>
        <label  className=' flex flex-col w-1/3 ml-5 font-mono font-bold'>Pin
        <input type='number' className=' bg-slate-300 w-3/4 mt-1' />
    
        </label>
      </div>
      <div className='mt-3 justify-evenly flex  '>
        <input className='accent-pink-500' name='name' type='radio'/><label className='font-semibold'>Male</label>
        <input className='accent-yellow-500' name='name' type='radio'/><label className='font-semibold'>Female</label>
        <input className='accent-green-500' name='name' type='radio'/><label className='font-semibold'>Others</label>
      </div>
      <label className='flex flex-col px-3  mt-4 font-mono ml-2 font-bold'>Are you <select className=" bg-slate-100 mt-1 ">
          <option>Choose</option>
          <option>Student</option>
          <option>Employee</option>
          <option>Married but no child</option>
          <option>Married with 3 child</option>
          <option>Single</option>
        </select></label>
        <div className='mt-3 flex flex-col p-2 '>
         <p className='font-bold px-3 '>You would like to</p>
        <label className='px-3 '><input className='accent-black' type='checkbox'/>Sleeping</label>
        <label className='px-3 '><input className='accent-green-500' type='checkbox'/>Studying</label>
        <label className='px-3 '><input className='accent-orange-300' type='checkbox'/>Listening Music</label>
        <label className='px-3 '><input className='accent-sky-500' type='checkbox'/>Playing</label>
        
      </div>
      <div className='mt-1 p-1 px-4 flex flex-col '><label  className=' font-bold'>Any comments</label>
      <input  type='textarea' className='w-full bg-gray-200/30 h-10 shadow  shadow-gray-400' />
      </div>
      <div className='flex justify-center m-3 py-9'>
        <button type='reset' className='bg-blue-400 hover:bg-green-200   px-5 mr-3 rounded-2xl'>Reset</button>
        <button type='submit' className='bg-blue-400 hover:bg-green-200   px-4 ml-3 p-2 rounded-2xl'>Submit</button>
      </div>
      </form>
    </div>
  )
}
