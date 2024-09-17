import { HiOutlineUserGroup } from "react-icons/hi";
import { MdNumbers } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { TbClock, TbWorld } from "react-icons/tb";

export const GeneralInfo = () => (
  <div className='flex flex-col items-start p-6 gap-2 rounded-2xl bg-white'>
    <div className='flex items-center gap-2'>
      <MdNumbers size={16} /> 5
    </div>
    <div className='flex items-center gap-2'>
      <TbClock size={16} /> Full-Time
    </div>
    <div className='flex items-center gap-2'>
      <HiOutlineUserGroup size={16} /> Operations
    </div>
    <div className='flex items-center gap-2'>
      <TbWorld size={16} /> Europe
    </div>
    <div className='flex items-center gap-2'>
      <SlLocationPin size={16} /> London, UK
    </div>
  </div>
);
