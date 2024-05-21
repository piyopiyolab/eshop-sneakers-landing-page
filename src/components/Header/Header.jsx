import { useEffect, useState } from "react";
import searchIcon from "/icons/magnifying-glass-solid.svg";
import cartIcon from "/icons/cart-shopping-solid.svg";
import menuIcon from "/icons/mobile-menu.svg";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const breakpoint = 850;

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <header className={`px-16 pt-16 flex justify-between sm:items-center  ${isNavOpen ? 'items-start' : 'items-center'}`}>
            {/* LOGO */}
            <a href="/">
                <p className="text-5xl font-extrabold">Slick</p>
            </a>

            {/* MENU */}
            <div className={`min-w-[60%] flex flex-col sm:flex-row sm:justify-between  ${isNavOpen & windowWidth < breakpoint ? 'absolute right-4' : 'right-0'}`}>
                <img
                    className="max-w-8 sm:hidden self-end mb-2"
                    src={menuIcon}
                    alt="menu mobile icon"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                />

                {isNavOpen && (
                    <>
                        <nav className="flex flex-col sm:flex-row gap-4">
                            <a
                                class="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="">Home</a>
                            <a class="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="">Shop</a>
                            <a class="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="">Collection</a>
                            <a class="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="">Customize</a>
                        </nav>

                        <div className="flex flex-row mt-4 sm:mt-0 gap-8 sm:ml-4">
                            <img
                                className="max-w-7 hover:scale-125 duration-300"
                                src={searchIcon}
                                alt="Looking for items in slick shop"
                            />
                            <img
                                className="max-w-7 hover:scale-125 duration-300"
                                src={cartIcon}
                                alt="Looking for something in your cart?"
                            />
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
