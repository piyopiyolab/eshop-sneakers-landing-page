import Button from "../Button/Button"
import heroImg from "/img/sneakers.png"

function Hero() {
    return (
        <section className="container-c flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <article className="">
                <h1 className="mb-8 text-5xl text-balance font-semibold">Find Your Sole Mate With Us</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex similique doloribus perferendis nostrum
                </p>

                <Button text='Shop Now' />
            </article>
            <article className="p-4 bg-hightlight sm:bg-transparent">


                <div className="hidden sm:block bg-hightlight absolute left-1/2 w-1/2 h-svh inset-0 -z-10 ">

                </div>



                <img src={heroImg} alt="Sneakers hightLight" />
                <p className="font-bold text-center">Trendy Slick Pro</p>
                <p className="text-center">$ 399.99</p>
            </article>
        </section>
    )
}
export default Hero