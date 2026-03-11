import { useEffect } from 'react';
import { useLocation } from 'react-router';
import RestaurantFood from '../../assets/restauranfood.jpg';
import FullScreen from '../../components/Fullscreen';
import About from '../About';
import Menu from '../Menu';
import Reservation from '../Reservation';

const Home = () => {
    const { hash } = useLocation();

    // Effect to handle scrolling to section when hash changes or page loads
    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <main className="w-full">
            {/* Hero Section (fond vert, utilisant FullScreen) */}
            <div id="home">
                <FullScreen backgroundColor="bg-secondary" className="relative z-10 pt-28 pb-10 md:pt-32 md:pb-24 mb-10 md:mb-32">
                    {/* Conteneur principal (flex row sur mobile et desktop pour être "en face") */}
                    <div className="flex flex-row justify-between items-center relative w-full h-full">
                        {/* Partie Gauche : Textes et Bouton */}
                        <div className="w-[60%] md:w-[50%] flex flex-col items-start z-10">
                            <h1 className="text-primary text-3xl sm:text-4xl md:text-6xl font-bold font-serif -mb-1 md:mb-0 whitespace-nowrap">
                                Little Lemon
                            </h1>
                            <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-serif mb-3 md:mb-6">
                                Douala
                            </h2>
                            <p className="text-white text-xs sm:text-base md:text-xl font-medium max-w-[180px] sm:max-w-sm mb-6 md:mb-10 leading-relaxed">
                                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                            </p>
                            <a 
                                href="#reservations" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById('reservations');
                                    if (element) {
                                        window.scrollTo({
                                            top: element.getBoundingClientRect().top + window.scrollY - 80,
                                            behavior: 'smooth'
                                        });
                                    }
                                }}
                                className="bg-primary text-secondary px-4 py-2 sm:px-2 sm:py-1.5 md:px-4 md:py-2 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-sm hover:brightness-95 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-center mt-auto"
                            >
                                Reserve a Table
                            </a>
                        </div>

                        {/* Partie Droite : Image */}
                        <div className="w-[35%] md:w-auto relative md:absolute md:right-0 md:-bottom-[130px] lg:-bottom-[180px] z-20 flex justify-end transform translate-y-6 md:translate-y-0">
                            <div className="w-full sm:w-[200px] md:w-[350px] lg:w-[420px] aspect-square md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                                <img
                                    src={RestaurantFood}
                                    alt="Restaurant Food"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </FullScreen>
            </div>
            
            <div id="about">
                <About />
            </div>

            <div id="menu">
                <Menu />
            </div>

            <div id="reservations">
                <Reservation />
            </div>

            <section className="bg-white py-16"></section>
        </main>
    );
};

export default Home;