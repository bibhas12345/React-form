import React from 'react'


export default function FormSec() {
  return (
    <div>
      <div className='mt-4 ml-2'>
        <label className=' '>Name</label>
        <input type="text" placeholder='enter name..' className='ml-9 placeholder:Enter your name shadow-md border border-gray-200 focus:shadow-outline h-9'/><br/>
        <label className='mt-2  '>Email</label>
        <input type="email" placeholder='Mail..'className='ml-10 mt-2 placeholder:Enter your name shadow-md border border-gray-200 focus:shadow-outline h-9'/><br/>
        <label className='mt-2  '>Password</label>
        <input type="password" placeholder='* * * * * * *' className='ml-3 mt-2 placeholder:Enter your name shadow-md border border-gray-200 focus:shadow-outline h-9'/><br/>
        <label className='mt-2  '>Age</label>
        <input type="number" className='ml-11 mt-2 placeholder:Enter your name shadow-md border border-gray-200 focus:shadow-outline h-9'/><br/>
        
      </div>

      <div className='mt-6 p-2 ml-4 flex'>
      <label className='flex flex-col w-1/3'>City
        <input type="text" className='mt-1 shadow-md border bg-slate-300 border-gray-200 w-4/5 rounded-1xl'/></label>
        <label className='  flex flex-col '>State<select className=" bg-slate-300 mt-1 ">
        <option>Choose</option>
        <option>West Bengal</option>
          <option>Punjab</option>
          <option>other</option>
        </select></label>
        <label  className=' flex flex-col w-1/3 ml-5'>Pin
        <input type='number' className=' bg-slate-300 w-3/4 mt-1' />
    
        </label>
      </div>
      <div className='mt-3 justify-evenly flex  '>
        <input name='name' type='radio'/><label>male</label>
        <input name='name' type='radio'/><label>female</label>
        <input name='name' type='radio'/><label>others</label>
      </div>
      <label className='flex flex-col   mt-4 font-mono ml-2 font-bold'>Are you <select className=" bg-slate-100 mt-1 ">
          <option>Choose</option>
          <option>Student</option>
          <option>Employee</option>
          <option>Married but no child</option>
          <option>Married with 3 child</option>
          <option>Single</option>
        </select></label>
        <div className='mt-3 flex flex-col p-2 '>
         <p className='font-bold  '>You would like to</p>
        <label className=' '><input type='checkbox'/>Sleeping</label>
        <label className=' '><input type='checkbox'/>Studying</label>
        <label className=' '><input type='checkbox'/>Listening Music</label>
        <label className=' '><input type='checkbox'/>Playing</label>
        
      </div>
      <div className='mt-1 p-1 flex flex-col font-bold'><label  className=' '>Any comments</label>
      <input type='textarea' className='w-full h-10 shadow  shadow-gray-400' />
      </div>
      <div className='flex justify-center m-3'>
        <button type='submit' className='bg-blue-300 hover:bg-green   px-3 mr-3 rounded-2xl'>Reset</button>
        <button type='submit' className='bg-blue-300 hover:bg-green   px-3 ml-3 p-2 rounded-2xl'>Submit</button>
      </div>
    
    </div>
  )
}
