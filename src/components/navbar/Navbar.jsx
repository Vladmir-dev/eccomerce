import React, { useState, useEffect } from 'react'
import logo from '../../assets/kenage.png';
import NavLinks from './NavLinks'
import { AiOutlineUser, AiOutlineSearch,AiOutlineClose ,AiOutlineMenu } from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'


const Navbar = () => {
	const [open, setOpen ] = useState(false)
	const [show, setShow ] = useState(false)

   useEffect(() => {
   	window.addEventListener("scroll", () => {
   		if (window.scrollY > 100){
   			setShow(true)
   		}else{
   			setShow(false)
   		}
   	});
   	return () => {
   		window.removeEventListener("scroll", () => {});
   	};
   }, [])

	return (
		<nav className={`${ show ? 'fixed z-20 bg-white shadow-lg md:left-0 duration-500 top-0 p-2' : 'p-2 md:left-0 top-0 fixed  z-20'}` }>
			<div className="flex w-screen items-center font-medium justify-between md:px-[80px] px-[10px] inline-block md:pb-0 h-[55px] pb-[5px]">
			 {/*Mobile Nav*/}
				<ul className={`
					md:hidden bg-white w-[10100px] ml-[-10px] h-full bottom-0  pl-4  duration-500
					${!open ? "hidden" : "left-[-100%]"}`}>
					<NavLinks />
				</ul>

				<div className="md:hidden flex items-center gap-3 pt-[15px]">
				<div className="text-[20px]" onClick={() => setOpen(!open)}>
				{ open ?
					 <AiOutlineClose />
					: <AiOutlineMenu />
				}
				</div>
						
						<AiOutlineSearch className="text-[20px] hidden"/>
				</div>

				<div className="md:w-auto items-center pt-[10px]">
					<img src={logo} alt="logo" className="md:cursor-pointer w-[50px] h-[50px]"/>
				</div>
				<ul className="md:flex hidden items-center gap-8 font-[Poppins,Arial,Tahoma,Verdana,sans-serif]">
					<NavLinks />
				</ul>
				<div className="md:flex flex items-center  gap-3 md:gap-3 md:text-[20px] text-[17px] font-medium">
					<AiOutlineSearch className="invisible md:visible"/>
					< AiOutlineUser className="md:hidden"/>
					<BsBag />
				</div>

               
			</div>
		</nav>
	)
}

export default Navbar
