import { useState, useEffect } from "react"
import { Link } from "react-router"
import { Menu, X, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [scrolled, setScrolled] = useState<boolean>(false)

    // Add drop shadow and blur effect when scrolling down
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleMenuToggle = () => {
        setIsOpen(isOpen => !isOpen)
    }

    const navLinks = [
        { name: "Home", path: "/#home" },
        { name: "About", path: "/#about" },
        { name: "Menu", path: "/#menu" },
        { name: "Reservation", path: "/reservations" },
        { name: "Order online", path: "/order" },
        { name: "Login", path: "/login" },
    ]

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-4 md:py-6"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between relative w-full">

                    <div className="md:hidden flex items-center z-10">
                        <Button
                            variant="ghost"
                            size="icon"
                            className={`${scrolled ? "text-secondary" : "text-white"} hover:bg-white/10 p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary h-12 w-12`} 
                            onClick={handleMenuToggle}
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </Button>
                    </div>

                    <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:ml-48 lg:ml-25 flex items-center group z-10">
                        <img
                            src="/assets/Logo.svg"
                            alt="Little Lemon Logo"
                            className={`h-10 md:h-14 w-auto object-contain group-hover:scale-105 transition-all duration-300 drop-shadow-lg ${!scrolled ? "brightness-0 invert" : ""}`} 
                        />
                    </Link>

                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={
                                    link.name === "Order online"
                                        ? "bg-primary text-secondary hover:brightness-105 px-5 py-2 rounded-full font-bold transition-all transform hover:-translate-y-0.5 shadow-md text-[15px] uppercase tracking-wider"
                                        : `${scrolled ? "text-dark" : "text-white"} hover:text-primary font-bold transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full text-[15px] uppercase tracking-wider`
                                }
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="md:hidden flex items-center z-10">
                        <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className={`${scrolled ? "text-secondary" : "text-white"} hover:bg-white/10 p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary h-12 w-12`} 
                        >
                            <Link
                                to="/order"
                                aria-label="Shopping Cart"
                            >
                                <ShoppingCart size={28} />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden absolute w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[400px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}
            >
                <div className="px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={handleMenuToggle}
                            className={`block px-4 py-3 text-lg font-bold transition-colors rounded-xl ${link.name === "Order online" || link.name === "Login" ? "bg-primary text-dark hover:brightness-95 text-center my-2" : "text-dark hover:text-secondary hover:bg-gray-50"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header