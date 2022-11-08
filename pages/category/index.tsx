import type { NextPage } from "next";
import CategoriesBox from "../../src/components/CategoriesBox";
import Breadcrumb from "../../src/components/Breadcrumb";
import NavBare from "../../src/components/NavBare";
import Coler from "../../src/components/Coler";
import { AiOutlineMenu } from "react-icons/ai";
import { BsGrid3X3GapFill } from "react-icons/bs";
import ProductCard from "../../src/components/cards/ProductCard";
import Footer from "../../src/components/Footer";

const ProductListPage: NextPage = () => {
  const catList = [
    {
      title: "Nike",
      nbr: 10,
    },
    {
      title: "Airmax",
      nbr: 22,
    },
    {
      title: "Nike",
      nbr: 13,
    },
    {
      title: "Adidas",
      nbr: 32,
    },
    {
      title: "Vans",
      nbr: 1,
    },
    {
      title: "All Stars",
      nbr: 15,
    },
    {
      title: "Adidas",
      nbr: 12,
    },
  ];
  const brandList = [
    {
      title: "Nike",
      nbr: 10,
    },
    {
      title: "Airmax",
      nbr: 22,
    },
    {
      title: "Siemens",
      nbr: 13,
    },
    {
      title: "Adidas",
      nbr: 32,
    },
  ];
  return (
    <div>
      <NavBare />
      <Breadcrumb titleList={["Home /", "Hot Deal "]} />
      <div className=' flex gap-8 mt-12 pl-[104px] pr-[134px]'>
        <div className=' flex flex-col gap-8'>
          <CategoriesBox CatsList={catList} title={" Hot Deals"} />

          <div className=' w-[270px] text-lg text-darkClear  h-36 bg-grayClear p-5'>
            <h1 className='  font-medium  mb-6'>PRICES</h1>
            <div className=' cursor-pointer flex justify-between'>
              <h1>Ranger: </h1>
              <h1>$13.99 - $25.99</h1>
            </div>

            <div className='w-1/2'>
              <label htmlFor='range' className='font-bold text-gray-600'>
                Price($)
              </label>
              <input
                type='range'
                name='price'
                min='1'
                max='100'
                value='50'
                className='w-full h-2 bg-blue-100 appearance-none'
              />
            </div>
          </div>
          <div className=' w-[270px]  h-[123px] p-5 bg-grayClear'>
            <h1 className=' text-lg font-medium  mb-6'>COLOR</h1>
            <div className=' flex gap-4   '>
              <Coler coler='bg-primary' />
              <Coler coler='bg-secendery ' />
              <Coler coler='bg-black' />
              <Coler coler='bg-yellow-400' />
              <Coler coler=' bg-pink-500' />
              <Coler coler='bg-primary bg-opacity-25 ' />
            </div>
          </div>
          <CategoriesBox CatsList={brandList} title={"BRAND"} />
          <button className=' w-[270px]  text-sm font-medium grid place-items-center   h-14 bg-grayClear'>
            MORE
          </button>
        </div>
        <div className=' grow flex flex-col gap-6'>
          <div className=' w-full h-[297px] bg-primary'></div>
          <div className=' w-full flex justify-between    h-14 bg-grayClear pl-4'>
            <div className=' flex items-center h-full gap-10'>
              <h1 className='   text-gray-900 '>13 Items</h1>
              <div className=' flex gap-2 items-center'>
                <label htmlFor='countries' className='   text-gray-900 '>
                  Sort By
                </label>
                <select
                  id='countries'
                  className=' cursor-pointer outline-none border border-gray-300  text-dark   rounded-lg focus:ring-blue-500 focus:border-blue-500  w-32 h-9  px-2 '
                >
                  <option selected>Name</option>
                  <option value='US'>Price</option>
                  <option value='CA'>Color</option>
                </select>
              </div>
              <div className=' flex gap-2 items-center'>
                <label htmlFor='countries' className='   text-gray-900 '>
                  Show
                </label>
                <select
                  id='countries'
                  className='cursor-pointer outline-none border border-gray-300  text-dark   rounded-lg focus:ring-blue-500 focus:border-blue-500  w-32 h-9  px-2 '
                >
                  <option selected>12</option>
                  <option value='US'>24</option>
                  <option value='CA'>36</option>
                  
                </select>
              </div>
            </div>

            <div className='flex h-full items-center  '>
              <div className='grid place-items-center cursor-pointer text-primary min-h-full w-14 bg-gray-200 text-4xl'>
                <AiOutlineMenu />
              </div>
              <div className='grid place-items-center cursor-pointer min-h-full text-gray-300  w-14  text-3xl'>
                <BsGrid3X3GapFill />
              </div>
            </div>
          </div>
          <div className=' flex flex-wrap gap-5 justify-around'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className=' w-full h-14 flex mt-12 mb-36  justify-center bg-grayClear '>
            <div className=' h-full w-16 text-lg grid place-items-center'>
              1
            </div>
            <div className=' h-full w-16 text-lg grid place-items-center'>
              2
            </div>
            <div className=' h-full bg-primary text-lg text-white w-16 grid place-items-center'>
              3
            </div>
            <div className=' h-full w-16 grid  text-lg place-items-center'>
              4
            </div>
            <div className=' h-full w-16 grid  text-lg place-items-center'>
              5
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListPage;
