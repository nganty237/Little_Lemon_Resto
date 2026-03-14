import DishCard from "@/components/CardDish";
import menuData from "@/data/menu.json";

const Order = () => {
  return (
    <main className="w-full bg-gray-50 pt-20 pb-8  md:pt-26 flex justify-center min-h-screen">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 text-center md:text-left">
          <h1 className="text-secondary text-4xl md:text-5xl font-bold font-serif mb-4">
            Order Online
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Choose from our fresh Mediterranean dishes and have them delivered to your doorstep.
          </p>
          <div className="h-1.5 w-24 bg-primary rounded-full mt-4 mx-auto md:mx-0" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.map((dish) => (
            <div key={dish.id} className="h-full">
              <DishCard 
                Dish={{
                  ...dish,
                  buttonLabel: "Add to cart"
                }} 
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Order;
