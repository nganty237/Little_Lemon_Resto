import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import data from "@/data/menu.json"
import DishCard from "@/components/CardDish"

const Menu = () => {
    return (
        <section id="menu" className="py-5 md:py-10 w-full flex justify-center bg-white">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-secondary text-3xl md:text-5xl font-bold font-serif mb-2">
                            This weeks specials!
                        </h2>
                    </div>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                        containScroll: "trimSnaps"
                    }}
                    className="w-full relative"
                >
                    <CarouselContent className="-ml-4">
                        {data.map((dish) => (
                            <CarouselItem key={dish.id} className="pl-4 md:basis-1/2 lg:basis-1/3 h-full">
                                <div className="p-1 h-full">
                                    <DishCard Dish={dish} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex justify-center md:block mt-8 md:mt-0">
                        <CarouselPrevious className="static md:absolute -left-12 top-1/2 md:-translate-y-1/2 bg-primary text-secondary border-none hover:bg-primary/90 shadow-lg scale-110" />
                        <CarouselNext className="static md:absolute -right-12 top-1/2 md:-translate-y-1/2 bg-primary text-secondary border-none hover:bg-primary/90 shadow-lg ml-4 md:ml-0 scale-110" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default Menu;
