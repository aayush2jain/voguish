
"use client"
import React from "react";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import { GiShoppingBag } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import logo from '../../public/picture/logo.png';
export default function Navbar(){
    return(
        <>
            <div className='nav bg-white text-black pb-[2vh] md:pb-[4vh]'>
                <div className='nav1 flex flex-row pt-[2vh] md:pt-[6vh] md:pl-[3vw] '>
                        <Image src={logo} alt="" className='md:h-[4vh] w-[50vw] h-[7vh] md:w-[20vw]' ></Image>
                    <div className='search md:pl-[10vw] flex flex-col md:visible invisible'>
                        <div className='flex flex-row'>
                            <input type='text' className='md:w-[35vw] h-[5vh] md:px-[1vw] rounded-full bg-pink-100'></input>
                            <GoSearch size={"4vh"} className="bg-pink-100 invisible md:absolute md:visible right-[33vw] top-[6.5vh]" />
                        </div>
                        <div className='flex flex-row gap-[3vw] mt-[5vh] pl-[1vw] w-0 md:w-[40vw] text-xl tracking-wide invisible md:visible'>
                            <div className='flex flex-row gap-[1vw]'>
                                <h1>MEN</h1>
                                <FaChevronDown className="text-lg mt-[1vh]" />
                            </div>
                            <div className='flex flex-row gap-[1vw]'>
                                <h1>WOMEN</h1>
                                <FaChevronDown className="text-lg mt-[1vh]" />
                            </div>
                            <div className='flex flex-row gap-[1vw]'>
                                <h1>KIDS</h1>
                                <FaChevronDown className="text-lg mt-[1vh]" />
                            </div>
                            <div className='flex flex-row gap-[1vw]'>
                                <h1>BRANDS</h1>
                                <FaChevronDown className="text-lg mt-[1vh]" />
                            </div>
                        </div>
                    </div>
                    <div className='sign in flex flex-row md:pl-[10vw] md:gap-[2vw] invisible md:visible'>
                        <GoHeart size={'5vh'} />
                        <GiShoppingBag size={'5vh'} />
                        <h1 className='text-black text-2xl'>SIGN IN</h1>
                    </div>
                </div>
            </div>
        </>
    )
} 