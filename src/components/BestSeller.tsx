import ProductCard from "./cards/ProductCard";

const BestSeller: React.FC = () => {
  return (
    <div className='relative'>
      <h1 className=' flex justify-center absolute -top-36  w-full font-semibold text-4xl text-dark'>
        BEST SELLER
      </h1>
      <div className='mb-10 text-[22px] grid place-items-center  font-normal text-center text-dark  '>
        <ul className='flex flex-wrap gap-8 -mb-px'>
          <li className='mr-2'>
            <a
              href='#'
              className='inline-block p-4 text-primary rounded-t-lg border-b-2 border-primary active '
              aria-current='page'
            >
              All
            </a>
          </li>
          <li className='mr-2'>
            <a
              href='#'
              className='inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
            >
              Bags
            </a>
          </li>
          <li className='mr-2'>
            <a
              href='#'
              className='inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
            >
              Sneakers
            </a>
          </li>
          <li className='mr-2'>
            <a
              href='#'
              className='inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
            >
              Belt
            </a>
          </li>
          <li className='mr-2'>
            <a
              href='#'
              className='inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
            >
              Sunglasses
            </a>
          </li>
        </ul>
      </div>

      <div className=' px-[104px] flex flex-wrap gap-8 justify-center  '>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div className=' w-full grid place-items-center mt-8 '>
        <h1 className=' cursor-pointer text-center max-w-fit underline font-medium text-xl text-primary underline-offset-4 '>
          LOAD MORE
        </h1>
      </div>

      <div className=' flex text-white flex-col md:flex-row w-full mt-24 bg-primary h-auto px-[104px] md:h-[400px]'>
        <div className=' flex flex-col  justify-center  w-full md:w-1/3 lg:w-1/2'>
          <h1 className=' font-medium text-4xl lg:text-5xl mb-6'>
            Adidas Men Running Sneakers
          </h1>
          <p className=' text-lg lg:text-xl mb-3'>
            Performance and design. Taken right to the edge.
          </p>
          <h1 className='  text-base lg:text-xl font-semibold underline underline-offset-4'>
            SHOP NOW
          </h1>
        </div>

        <div className=' md:-translate-y-20   w-full md:w-2/3 lg:w-1/2'>
          <img src='assetes/shoe.png' alt='shoe' className=' min-w-[300px]' />
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
