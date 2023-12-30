import React from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import AddIcon from '@mui/icons-material/Add';
const Section = () => {
  return (
 <>
 <div className="flex flex-row m-12">
    <div className="h-10 w-56 bg-purple-900 font-medium text-center text-white pt-2 rounded-3xl">Products-4 </div>
    <div className="h-10 w-56 bg-[#F3EBF5] font-medium text-center pt-2 rounded-3xl ml-5 text-purple-900">Promotions-4 </div>
    <div className="h-10 w-72 bg-[#F3EBF5] font-medium text-center pt-2 rounded-3xl ml-5 px-4 text-purple-900">Online  Promotions-4 </div>

<div className="h-10 w-48 bg-[#FFE066] rounded-md text-black ml-96 text-center pt-2 font-medium ">New Product <AddIcon/></div>
<div className="h-10 w-48 bg-[#FFE066] rounded-md text-black ml-5 text-center pt-2 font-medium">Create Site <AddIcon/></div>
<div className="h-10 w-48 bg-[#FFE066] rounded-md text-black ml-5 text-center pt-2 font-medium">Bulk Upload <FileUploadIcon/></div>
</div>

 </>
  )
}

export default Section