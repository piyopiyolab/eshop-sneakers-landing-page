import React, { useState } from 'react';
import { productData } from '../../assets/data';
import FilterButtons from './FilterButtons';
import linkIcon from '/icons/link.svg'

const ProductList = () => {

  const [filter, setFilter] = useState('all');


  const filteredImages = filter === 'all' ? productData : productData.filter(image => image.type === filter);


  return (
    <section className='container-c'>

      <h2 className='font-bold text-3xl text-center  before:align-middle	before:inline-block before:w-[1.5rem] before:h-[0.1rem] before:mr-2 before:bg-black  
after:align-middle	after:inline-block after:w-[1.5rem] after:h-[0.1rem] after:ml-2 after:bg-black'>Best selling</h2>

      <FilterButtons setFilter={setFilter} />

      <div className='flex flex-wrap justify-evenly gap-y-16'>
        {filteredImages.map((image, index) => (
          <article className='w-[20rem] border-2 rounded-md p-4 shadow-sm'>

            <div className='h-[12rem] w-auto object-cover'>
              <img
                className='w-full hover:scale-125 duration-300'
                key={index} src={image.src} alt={`beautiful sneakers ${image.title} for ${image.type}`} data-type={image.type} />
            </div>
            <p className=''>{image.title}</p>

            <div className='flex justify-between'>
              <p className=''>{image.price}</p>
              <a className='relative inset-0 right-0 hover:scale-125 duration-300' href="">
                <img
                  className='max-w-8' src={linkIcon} alt={`All the details for ${image.title}`} />
              </a>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
};


export default ProductList
