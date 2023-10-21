import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react"
import { useState } from "react";
import logo from '../../assets/logo-texto-curadoensalud.svg';


const Header = () => {
    const [showNavBar, setShowNavbar] = useState(false)
    return (
        <header className="flex-col w-full font-josefineSans px-6 md:px-0">
            <div className="w-full flex justify-between md:justify-center items-center md:pb-6 pt-6 font-bold  text-greyDark2">
                <Link to=''>
                    <h1 className="md:text-6xl text-4xl sm:text-5xl">
                        <img src={logo} height={150} width={150*16/9} className='fill-main'/>
                    </h1>
                </Link>
                <div className="md:hidden">
                    <Hamburger toggled={showNavBar} toggle={setShowNavbar} />
                </div>
            </div>
            <nav className="">
                <ul className={`w-full md:flex flex-col md:flex-row px-6 md:px-0 md:justify-center gap-x-40 gap-y-2 text-2xl bg-main text-white py-4 md:static
                ${showNavBar ? "flex mt-4" : "hidden md:flex"}
                `}>
                    <Link to='category/nutrición'>
                        <li className="border-b md:border-0 mb-1 md:mb-0 pb-2 md:pb-0">Nutrición</li>
                    </Link>
                    <Link to='category/salud'>
                        <li className="border-b md:border-0 mb-1 md:mb-0 pb-2 md:pb-0">Salud</li>
                    </Link>
                    <Link to='category/ejercicio'>
                        <li>Ejercicio</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;