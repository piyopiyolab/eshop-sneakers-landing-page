import Button from "../Button/Button"
import heroImg from "/img/sneakers.png"

function Hero() {
    return (
        <section className="flex">
            <article className="">
                <h1 className="mb-8 text-5xl text-balance font-semibold">Find Your Sole Mate With Us</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex similique doloribus perferendis nostrum
                </p>

                <Button />
            </article>
            <article className="mx-auto">
                <img src={heroImg} alt="Sneakers hightLight" />
                <p className="font-bold">Trendy Slick Pro</p>
                <p>$ 399.99</p>
            </article>
        </section>
    )
}
export default Hero