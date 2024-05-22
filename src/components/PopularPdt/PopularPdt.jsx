import Button from "../Button/Button"
import Carousel from "../Carousel/Carousel"




function PopularPdt() {
    return (
        <section className="container-c flex items-center flex-wrap justify-center xl::justify-between ">
            <article className="max-w-[17rem]">
                <h2 className="font-semibold before:align-middle	before:inline-block before:w-[1.5rem] before:h-[0.1rem] before:mr-2 before:bg-black    ">Our trending Shoes</h2>
                <h3 className="py-4 font-bold text-balance text-3xl">Most Popular Produts</h3>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <Button text={"Explore"} />
            </article>
            <Carousel />
        </section>
    )
}
export default PopularPdt