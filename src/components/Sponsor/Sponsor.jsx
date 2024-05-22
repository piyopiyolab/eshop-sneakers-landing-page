import ebayLogo from '/img/ebay-logo.svg'
import amzLogo from '/img/amazon-logo.svg'


function Sponsor() {
    return (
        <section className="bg-slate-950 min-h-14 my-0 flex gap-24 justify-evenly items-center overflow-hidden">
            <img src={ebayLogo} alt="" />
            <img src={amzLogo} alt="" />
            <p className='text-slate-200 text-5xl'>AJIO</p>
            <img src={ebayLogo} alt="" />
            <img src={amzLogo} alt="" />
            <p className='text-slate-200 text-5xl'>AJIO</p>




        </section>
    )
}
export default Sponsor