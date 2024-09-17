import React from "react";

interface LeaveCardProps {
  title: string;
  icon: React.ReactNode;
  daysAvailable: string | number;
  scheduledText?: string;
  footerText: string;
}

const LeaveCard: React.FC<LeaveCardProps> = ({
  title,
  icon,
  daysAvailable,
  scheduledText,
  footerText,
}) => {
  return (
    <div className='text-center'>
      <div className='flex flex-col items-center justify-center bg-[#F0F3F8] w-[264px] h-[138px] rounded-[8px] gap-1'>
        <h4 className='text-xl/none font-semibold'>{title}</h4>
        <div className='flex items-center gap-2.5 text-3xl/normal font-semibold'>
          {icon}
          {daysAvailable}
        </div>
        <div className='text-sm/none font-semibold'>Days Available</div>
        {scheduledText && (
          <div className='text-[#7C96B1] text-sm/normal font-semibold'>
            {scheduledText}
          </div>
        )}
      </div>
      <div className='mt-2 text-[#7C96B1]'>{footerText}</div>
    </div>
  );
};

export default LeaveCard;
