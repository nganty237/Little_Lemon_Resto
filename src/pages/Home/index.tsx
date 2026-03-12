import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Calendar } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import PastaImg from '../../assets/pasta.jpg';
import About from '../About';
import Menu from '../Menu';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    const socials = [
        { icon: <FaLinkedin size={22} />, url: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: <FaFacebook size={22} />, url: 'https://facebook.com', label: 'Facebook' },
        { icon: <FaTwitter  size={22} />, url: 'https://twitter.com',  label: 'Twitter'  },
    ];

    return (
        <main className="w-full">
            <div id="home">
                <section
                    className="relative w-full min-h-[100svh] md:min-h-[90vh] flex items-center overflow-hidden"
                    style={{ paddingTop: '80px' }}
                >
                    <img
                        src={PastaImg}
                        alt="Pasta background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/55" />

                    <div className="absolute left-0 top-0 bottom-0 w-14 md:w-16 z-20 flex flex-col items-center justify-center gap-6 bg-black/30 backdrop-blur-sm">
                        {socials.map(s => (
                            <a
                                key={s.label}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="text-white/70 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>

                    <div className="relative z-10 w-full flex justify-end pr-6 md:pr-16 lg:pr-28">
                        <div className="w-full max-w-lg pl-16 md:pl-0">
                            <div className="w-12 h-1 bg-primary rounded-full mb-5" />
                            <h1 className="text-primary text-4xl sm:text-5xl md:text-7xl font-bold font-serif leading-tight mb-2">
                                Little Lemon
                            </h1>
                            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif mb-5 md:mb-8">
                                Douala
                            </h2>
                            <p className="text-white/85 text-sm sm:text-base md:text-lg font-medium max-w-sm mb-8 md:mb-12 leading-relaxed">
                                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                            </p>

                            <a
                                href="#reservations"
                                onClick={e => {
                                    e.preventDefault();
                                    const el = document.getElementById('reservations');
                                    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                                }}
                                className="inline-flex items-center gap-3 bg-primary text-secondary px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm md:text-base shadow-lg hover:brightness-95 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                            >
                                <Calendar size={20} />
                                Reserve a Table
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <div id="about">
                <About />
            </div>

            <div id="menu">
                <Menu />
            </div>
            <section className="bg-white py-16"></section>
        </main>
    );
};

export default Home;
