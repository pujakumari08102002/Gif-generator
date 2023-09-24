import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';


 
      const API_KEY  =    process.env.REACT_APP_GIPHY_API_KEY;

      const Tag = () => {
      const [gif ,setGif] =useState("");
      const [loading ,setLoading ] = useState(true);
      const [tag , setTag] = useState("car");
     

     
      async function fetchData()
      {
        try{
            setLoading(true);
         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
         const {data}= await axios.get(url);
         const imageSource = data.data.images.downsized_large.url;
        //  console.log(imageSource)
        setGif(imageSource)
        setLoading(false)
      
        }
        catch(error){
            console.log("error fectching data ",error)
        }
      }
      
      useEffect(()=>{
        fetchData();
      },[])




     function clickHandler()
     {
        fetchData();
     }


     function changeHandler(event){
        setTag(event.target.value)

     }

  return (
    <div className='w-1/2  bg-blue-500  mt-[15px] gap-y-5 flex flex-col items-center rounded-lg border-black'>
      <h1 className='flex  justify-center font-semibold text-2xl mt-[1rem] uppercase underline'>Random {tag}</h1>

            {/* {
                loading ?(<Spinner/>): (<img src={gif} width="450"/>)
            } */}



      <img src={gif}  alt="" width="450" />
      <input 
      className='w-10/12

      h-[2rem] bg-sky-300 text-lg 
      rounded-lg  font-bold mb-[2rem] items-center
      text-center'
      type="text"
      placeholder='Enter the gif name'
      value={tag}
      onChange={changeHandler}

       />




      <button 
      className='w-10/12 h-[2rem] bg-sky-700 text-lg 
      rounded-lg  font-bold mb-[2rem]'



      onClick={clickHandler}>Generate </button>
    </div>
  )
}

export default Tag
