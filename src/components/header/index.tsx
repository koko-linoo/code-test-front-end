import phoneImage from "@assets/images/phone.png";
import mailImage from "@assets/images/mail.png";
import logoImage from "@assets/images/logo.png";
import searchImage from "@assets/images/search.png";
import collapseImage from "@assets/images/collapse.png";
import "./header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function PageHeader() {

    const defaultLink = " block rounded text-sm p-2";

    const activeLink = "bg-black text-white" + defaultLink;

    const hoverLink = " hover:bg-slate-200";

    const [hidden, setHidden] = useState(true);

    return (
        <header className="flex flex-col w-full ">
            <div className="px-10 lg:px-24 xl:px-64 space-y-3 lg:space-y-0 p-3 header-bg flex flex-col lg:flex-row lg:justify-between">
                <div className="flex space-x-2 items-center">
                    <img src={phoneImage} />
                    <span className="text-xs">+959 7980 65880</span>
                </div>
                <div className="text-xs lg:w-1/3 lg:text-center xl:w-2/3">
                    UPDATES - Click Here for KBZ Money News Alerts - UPDATES
                </div>
                <div className="flex space-x-2 items-center">
                    <span className="text-xs">admin@kbzmoney.com</span>
                    <img src={mailImage} />
                </div>
            </div>
            <div className="px-10 lg:items-center space-y-5 lg:px-24 xl:px-64 py-3 bg-white shadow flex flex-col lg:flex-row lg:space-y-0 lg:justify-between">
                <div className="w-full flex lg:block lg:w-auto justify-between items-center">
                    <img className="w-52" src={logoImage} />
                    <button onClick={() => setHidden(prev => !prev)} className="lg:hidden rounded-lg bg-slate-200 p-3 active:bg-slate-300 active:shadow-slate-300 active:shadow-lg ">
                        <img className="w-4" src={collapseImage} />
                    </button>
                </div>
                <div className="hidden lg:flex space-x-2 h-full">
                    <NavLink className={({ isActive }) => `h-full block py-2 px-5 ${isActive ? "border-b-2 border-black" : " hover:border-b-2 hover:border-slate-200"}`} to="" >
                        Home
                    </NavLink>
                    <NavLink className={({ isActive }) => `h-full block py-2 px-5 ${isActive ? "border-b-2 border-black" : " hover:border-b-2 hover:border-slate-200"}`} to="blogs" >
                        Blog
                    </NavLink>
                </div>
                <div className="hidden lg:flex w-1/3  space-x-2 justify-end">
                    {!hidden ?
                        <input placeholder="Search" className="text-sm rounded-md focus:w-60 px-3 py-1 border bg-transparent form-input" type="search" />
                        : null
                    }
                    <button onClick={() => setHidden(prev => !prev)} className="transition ease-in-out delay-150 active:translate-y-1 rounded-full p-3 hover:bg-slate-100 hover:shadow-slate-200 hover:shadow-lg ">
                        <img className="w-4" src={searchImage} />
                    </button>
                </div>
                {!hidden ? <div className="lg:hidden p-5 bg-slate-100 rounded-md">
                    <ul className="space-y-2">
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : defaultLink + hoverLink
                                } to="" >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : defaultLink + hoverLink
                                } to="blogs" >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div> : null}
                {!hidden ? <div className="block lg:hidden">
                    <input
                        placeholder="Search"
                        className="rounded-md border w-full p-2 form-input" type="search"
                    />
                </div> : null}
            </div>
        </header>
    )
}