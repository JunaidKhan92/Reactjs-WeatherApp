import React from 'react';
import '../index.css';
const Navbar = () => {
  function dropNav(){
     let menu = document.getElementById('menu')
     menu.classList.toggle('hidden')
  }
  return (
    <>
      <div
        className=" w-[100%] bg-[#1877F2] sm:flex justify-between items-center text-[white] p-[10px] "
      >
        <div className="sm:w-[50%] w-[100%] flex justify-between">
          <h1 className="text-2xl font-bold color-[white]">BlogSite</h1>
          <div onClick={()=>dropNav()} className='w-[30px] h-[30px] bg-[black] sm:hidden'></div>
        </div>
        <div className="sm:w-[50%] w-[100%] sm:flex" id='menu' >
          <ul className='list-none flex sm:flex-row sm:m-[0px] gap-[1rem]  flex-col m-[1rem]' id='menubar'>
            <li className="text-[18px] font-medium">Home</li>
            <li className="text-[18px]"><a href='/'>About</a></li>
            <li className="text-[18px]">Blog</li>
          </ul>
        </div>
        <div><button className='bg-[#F6C90E] text-[18px] font-bold px-[15px] py-[4px] tracking-[.10em] rounded hidden sm:flex'>login</button></div>
      </div>
    </>
  );
}
export default Navbar;