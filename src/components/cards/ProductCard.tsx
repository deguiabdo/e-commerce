
import IconStar from '../icons/IconStar';
import IconHeart from '../icons/IconHeart';
import IconCart2 from '../icons/IconCart2';
import {useRouter} from "next/router"

const ProductCard:React.FC = () => {

  const router = useRouter()
  function showProductHandler(){
  router.push("/CatId/ProductId" );
  }
  return (
    <div className=' relative w-[298px] min-h-[385x] border-[3px] border-grayClear '>
      <div className='text-lg grid place-items-center text-white w-16 h-8 absolute -left-[3px] -top-[3px] bg-secendery'>
        HOT
      </div>
      <img
        className='h-[272px] w-full'
        src='assetes/Air-Max.png'
        alt='Air-Max'
      />

      <div
        onClick={showProductHandler}
        className=' cursor-pointer flex flex-col items-center my-2 gap-2 h-full w-full'
      >
        <h1 className='text-lg font-bold text-darkBlue'>
          Nike Air Max 270 React
        </h1>
        <div className='flex gap-1 '>
          <IconStar color={"#FFC600"} />
          <IconStar color={"#FFC600"} />
          <IconStar color={"#FFC600"} />
          <IconStar color={"#FFC600"} />
          <IconStar color={"#C1C8CE"} />
        </div>
        <div className=' flex gap-1 items-center '>
          <h1 className=' text-lg text-primary font-semibold'>$299,43</h1>
          <h1 className='text-sm line-through text-grayNeutral '>$534,33</h1>
          <h1 className='text-sm  text-secendery font-semibold'>24% Off</h1>
        </div>
      </div>
      <div className=' absolute top-7 left-[7px] grid place-items-center bg-white bg-opacity-95 h-[219px]  w-[278px] '>
        <div className=' flex gap-4'>
          <button className=' w-12 h-12 grid place-items-center rounded-full border-2 border-opacity-25 border-primary'>
            <IconHeart />
          </button>

          <button className=' w-12 h-12 grid place-items-center rounded-full border-2 border-opacity-25 border-primary'>
            <IconCart2 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard