interface PropsDish{
    name:string,
    price:number,
    image:string,
    description:string,
    buttonLabel?:string
}
const DishCard = ({name,price,image,description, buttonLabel}:PropsDish) =>{
    return(
        <main className="">
            <img>{image}</img>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{description}</p>
            {buttonLabel && <button>{buttonLabel}</button>}
        </main>
    )
}
export default DishCard