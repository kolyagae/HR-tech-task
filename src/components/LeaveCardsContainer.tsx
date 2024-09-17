import React from "react";
import { CiMedicalCross } from "react-icons/ci";
import { PiMountains } from "react-icons/pi";
import { GrDocumentTime } from "react-icons/gr";
import LeaveCard from "@/components/LeaveCard";

const leaveCardData = [
  {
    title: "Sick",
    icon: <CiMedicalCross className='font-semibold inline-block' size={30} />,
    daysAvailable: 3,
    scheduledText: "1 day scheduled",
    footerText: "Sick Full-Time",
  },
  {
    title: "Annual Leave",
    icon: <PiMountains className='font-semibold inline-block' size={30} />,
    daysAvailable: 10.3,
    footerText: "Holiday Full-Time",
  },
  {
    title: "Comp/in Lieu Time",
    icon: <GrDocumentTime className='font-semibold inline-block' size={30} />,
    daysAvailable: 0,
    footerText: "Comp/in Lieu Time Flexible Policy",
  },
];

const LeaveCardsContainer: React.FC = () => {
  return (
    <div className='flex justify-center gap-12 pb-4 flex-wrap'>
      {leaveCardData.map((card, index) => (
        <LeaveCard
          key={index}
          title={card.title}
          icon={card.icon}
          daysAvailable={card.daysAvailable}
          scheduledText={card.scheduledText}
          footerText={card.footerText}
        />
      ))}
    </div>
  );
};

export default LeaveCardsContainer;
