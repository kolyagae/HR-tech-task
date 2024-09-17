import { FiTwitter } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbMail, TbPhone } from "react-icons/tb";

export const ContactInfo = () => (
  <div className='flex flex-col items-start p-6 gap-4 rounded-2xl bg-white'>
    <div className='flex items-center gap-2'>
      <TbPhone size={16} /> 07911 654321
    </div>
    <div className='flex items-center gap-2'>
      <TbMail size={16} /> avd.yana@videorollnet
    </div>
    <div className='flex items-center gap-2'>
      <SlSocialLinkedin size={16} />
      <LuFacebook size={16} />
      <FiTwitter size={16} />
    </div>
  </div>
);
