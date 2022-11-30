import type { NextPage } from "next";
import Breadcrumb from "../../../src/components/Breadcrumb";
import AddToCart from "../../../src/components/btns/AddToCart";
import ProductCard from "../../../src/components/cards/ProductCard";
import Coler from "../../../src/components/Coler";
import Footer from "../../../src/components/Footer";
import IconCart2 from "../../../src/components/icons/IconCart2";
import { IconFacbook } from "../../../src/components/icons/IconFacbook";
import IconHeart from "../../../src/components/icons/IconHeart";
import IconMinus from "../../../src/components/icons/IconMinus";
import IconPlus from "../../../src/components/icons/IconPlus";
import IconShiping from "../../../src/components/icons/IconShiping";
import IconStar from "../../../src/components/icons/IconStar";
import IconTwitter from "../../../src/components/icons/IconTwitter";
import NavBare from "../../../src/components/NavBare";
import HorisantelBorder from "../../../src/components/shared componenets/HorisantelBorder";
const ProductPage: NextPage = () => {
  return (
    <div>
      <NavBare />
      <Breadcrumb
        titleList={["Home /", "Hot Deal /", "Nike Airmax 270 React"]}
      />
      <div className='pl-[104px]  pr-[134px]'>
        <div className=' flex  gap-[54px] mt-12'>
          <div className=' flex flex-col gap-[134px]'>
            <img
              className=' w-[375px] h-[271px]'
              src='/assetes/FS-Nike.png'
              alt='FS-Nike'
            />
            <div className='flex gap-4'>
              <img
                className=' rounded-md border border-grayMuted w-[86px]   h-[86px]'
                src='/assetes/Air-Max-side.png'
                alt='FS-Nike'
              ></img>
              <img
                className=' rounded-md border border-grayMuted w-[86px]   h-[86px]'
                src='/assetes/FS-Nike.png'
                alt='FS-Nike'
              ></img>
              <img
                className=' rounded-md border border-grayMuted w-[86px]   h-[86px]'
                src='/assetes/Air-Max-buttom.png'
                alt='FS-Nike'
              ></img>
              <img
                className=' rounded-md border border-grayMuted w-[86px]   h-[86px]'
                src='/assetes/Air-Max-back.png'
                alt='FS-Nike'
              ></img>
            </div>
          </div>
          <div className='grow'>
            <h1 className=' text-2xl mb-[22px] text-dark font-medium'>
              Nike Airmax 270 React
            </h1>
            <div className='flex gap-4 mb-[18px]'>
              <div className='flex gap-1 '>
                <IconStar color={"#FFC600"} />
                <IconStar color={"#FFC600"} />
                <IconStar color={"#FFC600"} />
                <IconStar color={"#FFC600"} />
                <IconStar color={"#C1C8CE"} />
              </div>
              <h1 className=' text-grayNeutral'>0 reviews</h1>
              <h1 className=' text-primary'>Submit a review</h1>
            </div>
            <div className=' w-full border border-grayClear'></div>
            <div className=' flex gap-2 items-center my-6'>
              <h1 className=' text-lg text-primary font-semibold'>$299,43</h1>
              <h1 className='text-sm line-through text-grayNeutral '>
                $534,33
              </h1>
              <h1 className='text-sm  text-secendery font-semibold'>24% Off</h1>
            </div>
            <div className=' flex flex-col gap-4'>
              <div className='flex gap-16'>
                <h1>Availability:</h1>
                <h1>In stock</h1>
              </div>
              <div className='flex gap-16'>
                <h1>Category:</h1>
                <h1>Accessories</h1>
              </div>
              <h1>Free shipping</h1>
            </div>
            <HorisantelBorder />
            <div className='my-6 flex gap-16'>
              <h1>Select Color:</h1>
              <div className=' flex gap-4   '>
                <Coler coler='bg-primary' />
                <Coler coler='bg-secendery ' />
                <Coler coler='bg-black' />
                <Coler coler='bg-yellow-400' />
                <Coler coler=' bg-pink-500' />
                <Coler coler='bg-primary bg-opacity-25 ' />
              </div>
            </div>

            <div className=' flex gap-16 items-center'>
              <label htmlFor='countries' className='   text-gray-900 '>
                Size
              </label>
              <select
                id='countries'
                className=' cursor-pointer outline-none border border-gray-300  text-dark   rounded-lg focus:ring-blue-500 focus:border-blue-500  w-32 h-9  px-2 '
              >
                <option selected>XS</option>
                <option value='US'>S</option>
                <option value='CA'>M</option>
                <option value='CA'>L</option>
                <option value='CA'>XL</option>
              </select>
            </div>
            <HorisantelBorder />

            <div className='mt-5 flex justify-between'>
              <div className='flex w-32 h-12 bg-grayClear  rounded-lg text-primary'>
                <button className=' grid place-items-center w-1/3 h-full'>
                  <IconMinus />
                </button>
                <h1 className='w-1/3 grid place-items-center h-full text-dark font-bold'>
                  2
                </h1>
                <button className='w-1/3 grid place-items-center h-full'>
                  <IconPlus />
                </button>
              </div>
              <div className=' flex gap-4'>
                <AddToCart />
                <div className=' w-12 h-12  grid place-items-center    bg-opacity-10 bg-primaryMuted rounded-lg'>
                  <IconHeart />
                </div>
              </div>
            </div>

            <HorisantelBorder />

            <div className=' flex gap-4 h-12 w-full text-white  font-medium '>
              <div className=' flex w-1/2  justify-center items-center h-full px-7 bg-bleuNavy rounded-lg gap-4 '>
                <IconFacbook />
                <h1>Share on Facebook</h1>
              </div>

              <div className=' flex w-1/2 justify-center grow h-full items-center px-7 bg-bleuTwitter rounded-lg gap-4 '>
                <IconTwitter color='white' />
                <h1>Share on Twitter</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=' w-full bg-grayClear pb-7 pt-2 mt-12  '>
          <div className=' flex gap-16 h-12 text-lg px-7'>
            <button className=' text-primary border-b-[4px]  border-b-primary'>
              Product Infomation
            </button>
            <button className=' text-dark'>
              Reviews <samp className='text-grayNeutral'>0</samp>
            </button>
            <button className=' text-dark'>Another tab</button>
          </div>
          <div className=' w-full border-b-[4px] border-opacity-50 border-b-grayMuted -translate-y-[4px]'></div>
          <div className=' px-7 pt-5 pb-4 text-grayNeutral text-xs'>
            <p>
              air max are always very comfortable fit, clean and just perfect in
              every way. just the box was too small and scrunched the sneakers
              up a little bit, not sure if the box was always this small but the
              90s are and will always be one of my favorites.
            </p>
            <br />
            <p>
              air max are always very comfortable fit, clean and just perfect in
              every way. just the box was too small and scrunched the sneakers
              up a little bit, not sure if the box was always this small but the
              90s are and will always be one of my favorites.
            </p>
            <br />
            <p>
              air max are always very comfortable fit, clean and just perfect in
              every way. just the box was too small and scrunched the sneakers
              up a little bit, not sure if the box was always this small but the
              90s are and will always be one of my favorites.
            </p>
          </div>
        </div>

        <h1 className=' flex justify-center  mb-20 mt-20  w-full font-semibold text-4xl text-dark'>
          RELATED PRODUCTS
        </h1>

        <div className=' px-[104px] mb-20 flex flex-wrap gap-8 justify-center  '>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
