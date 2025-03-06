import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import {Navlink} from 'react-router-dom';
const nav = () =>{
    return(
        <nav className='flex-justify-evenly'>
            <Navlink to={'/'}>
            Home
            </Navlink>
            <Navlink to={'/'}>
            Profile
            </Navlink>
            <Navlink to={'/'}>
            <FaHeart/>
            </Navlink>
            <Navlink to ='/cart'>
            <FaCartArrowDown/>
            </Navlink>
        </nav>
           
    )
}
export default nav;