import Random from "./components/Random"
import Tag from "./components/Tag"



export default function App() {
  return(
    <div className="w-full h-full flex flex-col background   overflow-hidden items-center">
      <h1  className="bg-white  rounded-md  w-11/12 text-center font-bold py-[3px] pb-[1rem] mt-[3rem] text-2xl   rounded-lg ">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center">
        <Random/>
        <Tag/>
      </div>

    </div>
  )
  
}
