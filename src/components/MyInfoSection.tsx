import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { TbClock, TbSettings } from "react-icons/tb";
import { ContactInfo } from "./ContactInfo";
import { HireInfo } from "./HireInfo";
import { GeneralInfo } from "./GeneralInfo";
import { DirectReports } from "./DirectReports";
import { GrDocumentTime } from "react-icons/gr";
import { Button } from "./ui/button";
import { CiMedicalCross } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { LiaPiggyBankSolid } from "react-icons/lia";
import historyIcon from "@/assets/icons/history.svg";

import Table from "./Table";
import LeaveCardsContainer from "./LeaveCardsContainer";

const MyInfoSection = () => {
  const { data } = useSession();

  return (
    <Tabs defaultValue='time off'>
      <div className='bg-blue pt-9'>
        <div className='flex flex-col md:flex-row items-center md:items-end justify-evenly gap-4'>
          <div className='grow-0 shrink-0 z-10'>
            <Image
              className='rounded-full'
              width={150}
              height={150}
              src={data?.user?.image!}
              alt='Avatar'
            />
          </div>

          <div className='flex flex-col gap-6 md:gap-9 w-full md:w-auto'>
            <div className='flex flex-col md:flex-row gap-4 justify-between w-full md:w-auto'>
              <h2 className='text-[24px] md:text-[28px] font-semibold text-center md:text-left'>
                {data?.user?.name}
              </h2>
              <div className='flex gap-4'>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Request a Change' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='option-1'>Option 1</SelectItem>
                    <SelectItem value='option-2'>Option 2</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <TbSettings />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='option-1'>Option 1</SelectItem>
                    <SelectItem value='option-2'>Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <TabsList className='gap-2 flex-wrap justify-center md:justify-start'>
              {[
                "Personal",
                "Job",
                "Time Off",
                "Emergency",
                "Documents",
                "Notes",
                "Benefits",
                "Training",
                "Assets",
                "More",
              ].map((tab) => (
                <TabsTrigger
                  key={tab.toLowerCase()}
                  value={tab.toLowerCase()}
                  className='data-[state=active]:bg-white text-xs md:text-sm/none'
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row bg-[#F0F3F8] px-6 md:px-[72px] gap-6'>
        <div className='relative top-[-10px] flex flex-col gap-4 w-full lg:w-[300px]'>
          <ContactInfo />
          <HireInfo />
          <GeneralInfo />
          <DirectReports />
        </div>
        <TabsContent
          className='px-2 md:px-4 pt-9 pb-24 flex-1 m-0 bg-white'
          value='time off'
        >
          <div className='flex flex-wrap items-center justify-between'>
            <div className='flex items-center gap-3'>
              <GrDocumentTime size={16} />
              <span className='text-lg md:text-xl/none text-[#204973]'>
                Time Off
              </span>
            </div>
            <div className='text-sm'>
              Accrual Level Start Date
              <span className='text-[#3758AB]'> 03/09-2020</span>
            </div>
            <Button className='bg-inherit text-black border border-black'>
              Add Time Off Policy
            </Button>
          </div>
          <hr className='mt-4 mb-6 bg-[#7C96B1] h-0.5' />
          <LeaveCardsContainer />
          <div className='flex items-center gap-3'>
            <TbClock size={16} />
            <span className='text-sm/none text-[#204973]'>
              Upcoming Time Off
            </span>
          </div>
          <hr className='mt-4 mb-6 bg-[#7C96B1] h-0.5' />
          <div className='flex gap-4 items-center'>
            <CiMedicalCross size={30} />
            <div>
              <div>Jan 27</div>
              <div>
                <GoDotFill className='inline-block' size={8} />1 day of Sick
              </div>
            </div>
          </div>
          <hr className='mt-4 mb-6 bg-[#7C96B1] h-0.5' />
          <div className='flex gap-4 items-center'>
            <LiaPiggyBankSolid size={30} />
            <div>
              <div>Jul 4</div>
              <div>Independence Day</div>
            </div>
          </div>
          <hr className='mt-4 mb-6 bg-[#7C96B1] h-0.5' />
          <div className='flex items-center gap-3 pb-4'>
            <Image
              src={historyIcon}
              width={15}
              height={15}
              alt='Icon history'
            />
            <span className='text-sm/none text-[#204973]'>History</span>
          </div>
          <div className='flex flex-wrap gap-4'>
            <Select>
              <SelectTrigger className='w-full md:w-[256px]'>
                <SelectValue placeholder='Sick' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='option-1'>Option-1</SelectItem>
                <SelectItem value='option-2'>Option-2</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className='w-full md:w-[96px]'>
                <SelectValue placeholder='All' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='option-1'>Option-1</SelectItem>
                <SelectItem value='option-2'>Option-2</SelectItem>
              </SelectContent>
            </Select>
            <div className='ml-auto'>
              <Select>
                <SelectTrigger className='w-full md:w-[176px]'>
                  <SelectValue placeholder='Balance History' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='option-1'>Option-1</SelectItem>
                  <SelectItem value='option-2'>Option-2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Table />
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default MyInfoSection;
