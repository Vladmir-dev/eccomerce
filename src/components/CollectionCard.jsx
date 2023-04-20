import React from 'react'
import {
    AiOutlineHeart,
    AiOutlineSearch,
  } from 'react-icons/ai';
  import { BsBag } from 'react-icons/bs';



const CollectionCard = ({url,name, price}) => {

    const cardstyle = {
       backgroundImage: `url(${url})`,
       backgroundRepeat:'no-repeat',

    }

  return (
    <div style={cardstyle} className="md:w-[350px] hover:scale-110 duration-500 shadow-md md:h-[450px] w-[180px] h-[400px] flex justify-center items-end">
    {/* <img
      src={url} alt=""
      className="w-full md:h-full h-[300px]"
    /> */}
    <div className="text-center justify-center items-center p-2">
      <h4 className="text-[18px]">{name}</h4>
      <p className="text-[16px] p-[2px]"> ${price}</p>
      <div className="flex justify-center items-center p-2 gap-4 text-[20px]">
        <AiOutlineHeart />
        <BsBag className='hover:text-yellow-500'/>
        <AiOutlineSearch />
      </div>
    </div>
  </div>
  )
}

export default CollectionCard