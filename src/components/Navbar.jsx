import {navItems} from "../constants";
import logo from "../assets/Nexcent/Logo.png";
import { useState } from "react";
import {Menu,X,ArrowRight} from "lucide-react";//icons library
import { Link } from "react-router";
import { useLocation } from 'react-router'

export default function Navbar(){
    const location = useLocation();
    const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
    return (
        <>
            <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-white shadow-sm">
                <div className="container px-4 mx-auto relative lg:text-sm">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center flex-shrink-0">
                            <img className="h-[35px] mr-2" src={logo} alt="Logo"/>
                            {/* <span className="text-xl tracking-tight">VirtualR</span> */}
                        </div>

                        <div className="hidden lg:flex justify-center space-x-12 items-center">
                            <ul className="hidden lg:flex space-x-12">
                                {navItems.map((item) => (
                                    // <li key={index}>
                                    // <a href={item.path} className={`text-black`}>{item.name}</a>
                                    // </li>
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`text-black hover:text-gray-300 transition-colors ${
                                            location.pathname === item.path ? 'border-b-2 border-white' : ''
                                        }`}
                                        >
                                        {item.name}
                                    </Link>
                                )
                                )}
                            </ul>
                            {/* <a href="#" className="py-2 px-3 border rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                Sign In
                            </a> */}
                            <a href="#" className="bg-[#4caf4f] py-4 px-6 rounded-md flex text-white">
                                Register Now<span className="pl-5"><ArrowRight /></span>
                            </a>
                        </div>
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleNavbar}>
                                {mobileDrawerOpen ? <X/> :<Menu/>}
                            </button>
                        </div>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className=" relative z-20 w-full p-12 flex flex-col justify-center items-left lg:hidden bg-white">
                        <ul>
                            {navItems.map((item) =>(
                                // <li key={index} className="py-4">
                                //     <a href={item.href}>{item.label}</a>
                                // </li>
                                <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`flex text-black hover:text-gray-300 transition-colors ${
                                            location.pathname === item.path ? 'border-b-2 border-white' : ''
                                        }`}
                                        >
                                        {item.name}
                                </Link>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            {/* <a href="#" className="py-2 px-3 border rounded-md">
                                Sign In
                            </a> */}
                            <a href="#" className="bg-[#4caf4f] py-4 px-6 rounded-md flex text-white">
                                Register Now<span><ArrowRight /></span>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}