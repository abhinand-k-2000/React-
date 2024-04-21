
import React, { useState } from 'react'
import ItemList from './ItemList'

const ResCategory = ({data, showItems, setShowIndex}) => {

    // const[show, setShow] = useState(false)  
    const handleClick = ()=>{
        setShowIndex()
        // setShow(!show)
    }
  return (
    <div className='text-center bg-slate-200 p-3 w-1/2 mx-auto cursor-pointer my-3 shadow-lg '>

        <div className='flex justify-between' onClick={handleClick}>
        <span className='font-bold '>{data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
        </div>
        {
            showItems  && <ItemList items={data.itemCards}/>
        }
    </div>
  )
}

export default ResCategory