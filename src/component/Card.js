import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import th1 from './../assets/th (1).jpg'


import React from 'react';

function Card(props) {
  return (
    <div>
      <div className="rounded-lg border-2 border-gray-300 flex-col p-2 w-[360px] h-[185px]">
        <div className='flex flex-row'>
        <div className="text-center justify-center m-2"><img src={th1} alt="promotion" className="h-24 w-32"/></div>
        <div className="flex flex-col">
          <div className="bg-[#BCEDFF] text-green-800 w-28 text-center justify-center rounded-lg text-xs font-medium p-1"><UpdateRoundedIcon sx={{height:"16px"}}/>Pending</div>
          <div className="text-l font-medium">{props.title}</div>
          <div className="text-sm text-gray-500 font-medium">Bar Code ID: {props.id}</div>
          <div className="flex flex-row text-left gap-1">
            <div className='text-black text-[20px] font-medium -mt-1'><span className='-mr-2 pt-1'><CurrencyRupeeIcon sx={{height:"20px",margin:"0px",padding:"0px",paddingBottom:"-2px"}}/></span>{props.price}</div>
            <div className='text-xs text-gray-400 flex text-center justify-center font-medium line-through mt-1 mr-1'><span className='-mr-2'><CurrencyRupeeIcon sx={{height:"10px"}}/></span>{props.price}</div>
            <div className='bg-green-200 text-green-900 w-16 flex text-center justify-center text-sm font-medium mt-1 rounded-md'><span className='-mr-2'><CurrencyRupeeIcon sx={{height:"16px",margin:"0px"}}/></span>{props.discount} OFF</div>
          </div>
        </div>
        </div>
        <div className="flex flex-row gap-2 mt-4">
          <div className="bg-[#333333] text-center justify-center text-white w-36 rounded-lg py-1">Promote</div>
          <div className='text-center justify-center text-black w-44 border-2 border-black rounded-lg'>Promote Online</div>
          <div className="flex text-center justify-center w-12 border-2 border-black rounded-lg pt-1"><DriveFileRenameOutlineRoundedIcon/></div>
        </div>
      </div>
    </div>
  );
}

export default Card;