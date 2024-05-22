import React from 'react';
import Button from '../Button/Button';
import bannerImg from '/img/banner.png';

function PromoBanner() {
    return (
        <section className="container-c">
            <article className='relative bg-cover bg-center bg-no-repeat h-[34rem] bg-promoBannerImg'>
                <div className="absolute inset-0 top-[30%] flex flex-col items-end justify-center mr-16 ml-2">
                    <h3 className='text-balance text-3xl font-semibold text-white mb-4'>
                        Are you ready to lead the way
                    </h3>
                    <p className='text-white mb-8'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                    </p>
                    <Button text={'EXPLORE'} />
                </div>
            </article>
        </section>
    );
}

export default PromoBanner;
