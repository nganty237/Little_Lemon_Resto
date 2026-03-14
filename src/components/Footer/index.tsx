import { Link } from "react-router"
import {
    MapPin, Phone, Mail,
    Home, Info, UtensilsCrossed, Calendar, ShoppingBag, LogIn
} from "lucide-react"
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa"

const Footer = () => {
    const navLinks = [
        { name: "Home", path: "/#home", icon: <Home size={18} /> },
        { name: "About", path: "/#about", icon: <Info size={18} /> },
        { name: "Menu", path: "/#menu", icon: <UtensilsCrossed size={18} /> },
        { name: "Reservation", path: "/reservations", icon: <Calendar size={18} /> },
        { name: "Order online", path: "/order", icon: <ShoppingBag size={18} /> },
        { name: "Login", path: "/login", icon: <LogIn size={18} /> },
    ]

    const socialLinks = [
        { name: "Linkedin", icon: <FaLinkedin size={20} />, url: "https://linkedin.com" },
        { name: "Facebook", icon: <FaFacebook size={20} />, url: "https://facebook.com" },
        { name: "Twitter", icon: <FaTwitter size={20} />, url: "https://twitter.com" },
    ]

    return (
        <footer className="bg-Charcoal text-tertiary pt-6 pb-6">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    <div className="flex justify-center md:justify-start md:ml-10">
                        <div className="bg-white p-2 rounded-xl inline-block shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="/assets/Logo.svg" alt="Little Lemon Logo" className="w-20 md:w-30 h-auto" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-primary text-xl font-bold mb-6 font-serif">Navigation</h3>
                        <nav className="flex flex-col space-y-3">
                            {navLinks.map(link => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="flex items-center space-x-3 hover:text-primary transition-colors duration-200 text-sm md:text-base group"
                                >
                                    <span className="text-primary group-hover:scale-110 transition-transform">
                                        {link.icon}
                                    </span>
                                    <span>{link.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>


                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-primary text-xl font-bold mb-6 font-serif">Contact</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 group">
                                <MapPin size={20} className="text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-sm md:text-base">Douala</span>
                            </div>
                            <div className="flex items-center space-x-3 group">
                                <Phone size={20} className="text-primary group-hover:scale-110 transition-transform" />
                                <a
                                    href="tel:+237696584160"
                                    className="text-sm md:text-base hover:text-primary transition-colors duration-200"
                                >
                                    +237 696 584 160
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 group">
                                <Mail size={20} className="text-primary group-hover:scale-110 transition-transform" />
                                <a
                                    href="mailto:ngantybikele@gmail.com"
                                    className="text-sm md:text-base hover:text-primary transition-colors duration-200 break-all"
                                >
                                    ngantybikele@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-primary text-xl font-bold mb-6 font-serif">Social Media</h3>
                        <div className="flex flex-col space-y-4">
                            {socialLinks.map(social => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 hover:text-primary transition-all duration-200 group"
                                >
                                    <span className="p-2 bg-white/10 rounded-full group-hover:bg-primary group-hover:text-secondary transition-all">
                                        {social.icon}
                                    </span>
                                    <span className="text-sm md:text-base">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-8 text-center bg-transparent">
                    <p className="text-xs md:text-sm text-tertiary/60">
                        &copy; Copyright 2026- Les Délices de Little Lemon- TINA THERESE
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
