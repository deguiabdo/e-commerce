import IconCart2 from "../icons/IconCart2";
const AddToCart:React.FC = () => {
  return (
    <div className=' w-40 h-12 flex px-2 justify-around items-center bg-opacity-10 bg-primaryMuted rounded-lg'>
      <IconCart2 />
      <h1 className=' text-primary'>Add To Cart</h1>
    </div>
  );
}

export default AddToCart