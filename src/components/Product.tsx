import React from 'react';

import config from '../config/index.json';

const Product = () => {
  const { product } = config;

  return (
    <section className={`bg-background`} id="product">
      <div className={`container max-w-7xl px-10`}>
        <h1 className={`w-full my-2 text-5xl pb-6 font-bold leading-tight text-center text-primary`} >
           <span className={'text-border'}>
              {product.title}
            </span>
        </h1>
        {product.items.map((item, key) => {
          return(
            <div className={`flex flex-wrap`} key={key} >
              <div className={`w-5/6 sm:w-1/2 py-6`}>
                <h3 className={`text-3xl text-gray-800 font-bold leading-none mb-3`}>
                  {item?.title}
                </h3>
                <p className={`text-gray-600 text-lg`}>
                  {item?.description}
                </p>
              </div>
              <div className={`w-full sm:w-1/2 p-6`}>
                <img className="h-6/6" src={item?.img} alt={item?.title}
                />
              </div>
          </div>
          );
        })}
      </div>
    </section>
  );
};

export default Product;
