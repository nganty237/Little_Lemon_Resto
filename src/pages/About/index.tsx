import restaurantImg from '../../assets/restaurant.jpg';

const About = () => {
  return (
    <section className="bg-tertiary py-10 md:py-20 w-full flex justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <h2 className="text-secondary text-3xl md:text-4xl font-bold font-serif mb-4 md:mb-0">
          Our History
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          <div className="flex-1 flex flex-col justify-center">
            <p className="text-dark text-base md:text-lg leading-relaxed max-w-xl">
              Since July 2025, Little Lemon has established itself as a must-visit destination for food lovers.
              Our mission is to transform fresh, seasonal ingredients into exceptional culinary experiences.
              Combining tradition and creativity, our cuisine celebrates authentic flavors in a modern and
              welcoming setting. Whether you're sharing a meal with friends or embarking on a refined
              culinary journey, we put excellence at the heart of every dish to make each meal a memorable experience.
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg overflow-hidden">
              <img
                src={restaurantImg}
                alt="Little Lemon Restaurant interior"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>

            <div className="absolute -bottom-2 left-4 md:left-0 z-20 bg-primary text-secondary px-5 py-3 rounded-xl shadow-lg font-bold text-sm font-serif">
              Open since July 2025
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
