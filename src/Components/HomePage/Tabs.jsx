import { useSelector,useDispatch } from "react-redux";
import {setActiveTab} from '../../Slices/SearchSlice'
   const tabs = ['Photo', 'Video', 'Gif']; 
     const Tabs = () => {
     const dispatch=useDispatch()
       const activeTab = useSelector((state)=>state.Search.activeTab)

   
  return (
    <>
    <div className="flex justify-start gap-5 items-center px-4 py-1">

      {tabs.map((elem,idx)=>{
          return(
            <button className={`${(activeTab===elem?'bg-blue-700':'bg-gray-700')} cursor-pointer  text-white font-bold px-3 py-1 rounded-2xl`}
            type="button"
            onClick={() => {
            console.log(`i am being clicked: ${elem}`);
            dispatch(setActiveTab(elem));
      }}
            key={idx} >
            {elem} 

            </button>
            )
        })}

        </div>
    </>
  )
}

export default Tabs