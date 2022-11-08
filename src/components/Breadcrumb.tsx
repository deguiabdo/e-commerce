interface Props{
    titleList:string[];
}
const Breadcrumb: React.FC<Props> = ({ titleList }) => {
    const titleListElements = titleList.map((item, index, arr) => {
        if (arr.length -1 === index ) 
           return (
             <h1 className=' text-lg text-grayNeutral ' key={index}>
               
               {item}
             </h1>
           );
        else 
           return (
             <h1
               className='  text-primary   text-lg '
               key={index}
             >
               
               {item}
             </h1>
           );
    
    } );
  return <div className=' items-center justify-center w-full h-12 flex gap-2 bg-grayClear'>{titleListElements}</div>;
};

export default Breadcrumb
