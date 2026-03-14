import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

interface PropsDish{
    id: number,
    title:string,
    price:number,
    description:string,
    image:string,
    buttonLabel?:string
}
const DishCard = ({ Dish }: { Dish: PropsDish }) => {
    return (
        <Card className="overflow-hidden h-full flex flex-col border-none shadow-xl bg-white hover:scale-[1.02] transition-all duration-500 group">
            <div className="relative h-56 w-full overflow-hidden">
                <img
                    src={Dish.image}
                    alt={Dish.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <CardHeader className="p-5 flex flex-row justify-between items-center space-y-0">
                <CardTitle className="text-xl font-bold text-secondary font-serif">
                    {Dish.title}
                </CardTitle>
                <div className="text-accent font-bold text-lg">
                    ${Dish.price.toFixed(2)}
                </div>
            </CardHeader>

            <CardContent className="p-5 pt-0 flex-grow">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {Dish.description}
                </p>
            </CardContent>

            <CardFooter className="p-5 pt-0 bg-transparent border-none">
                <Button className="w-full cursor-pointer bg-primary text-secondary font-bold py-6 rounded-xl hover:bg-primary/90 transition-colors shadow-md active:scale-95 group-button">
                    {Dish.buttonLabel || "Order a delivery"}
                    <ShoppingCart className="ml-2 size-5 group-hover:scale-110 transition-transform" />
                </Button>
            </CardFooter>
        </Card>
    )
}


export default DishCard