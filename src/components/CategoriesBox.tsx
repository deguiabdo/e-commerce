interface Props {
  CatsList: Cat[];
  title: string;
}
interface Cat{
    title:string;
    nbr:number;
   
}
const CategoriesBox: React.FC<Props> = ({ CatsList, title }) => {

    const CatsListItems = CatsList.map((item, index) =>{
        
      return (
        <div
          key={index}
          className=' cursor-pointer flex justify-between'
        >
          <h1>{item.title}</h1>
          <h1 className=' opacity-30 text-darkClear  focus:text-primary '>
            {item.nbr}
          </h1>
        </div>
      );
    });
  return (
    <div className=' w-[270px]  h-auto bg-grayClear p-5'>
      <h1 className=' text-lg font-medium text-darkClear mb-6'>{title}</h1>
      <div className='flex flex-col gap-4 text-lg text-dark'>
        {CatsListItems}
      </div>
    </div>
  );
};

export default CategoriesBox