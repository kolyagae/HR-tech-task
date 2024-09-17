import React from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { TabsList, TabsTrigger } from "./ui/tabs";
import { PanelLeft, Search } from "lucide-react";
import { TbSettings } from "react-icons/tb";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { TbBell } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import { serverSignOut } from "@/app/server-actions/signOutAction";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const Header = () => {
  const { data } = useSession();

  return (
    <header className='flex flex-wrap-reverse justify-between items-start px-6 pt-9 lg:items-end'>
      <h1 className=' font-semibold text-xl'>HarmonyHR</h1>
      <div>
        <TabsList className='mw-[523px] flex-wrap'>
          <TabsTrigger className='data-[state=active]:bg-blue' value='home'>
            Home
          </TabsTrigger>
          <TabsTrigger className='data-[state=active]:bg-blue' value='my-info'>
            My Info
          </TabsTrigger>
          <TabsTrigger className='data-[state=active]:bg-blue' value='people'>
            People
          </TabsTrigger>
          <TabsTrigger className='data-[state=active]:bg-blue' value='hiring'>
            Hiring
          </TabsTrigger>
          <TabsTrigger className='data-[state=active]:bg-blue' value='reports'>
            Reports
          </TabsTrigger>
          <TabsTrigger className='data-[state=active]:bg-blue' value='files'>
            Files
          </TabsTrigger>
        </TabsList>
      </div>
      <div className='relative flex-1 md:grow-0'>
        <Search className='absolute left-4 top-2.5 h-4 w-4 text-muted-foreground' />
        <Input
          type='search'
          placeholder='Search...'
          className='rounded-xl pl-14 md:w-[200px] lg:w-[336px]'
        />
      </div>
      <div className='flex items-center gap-6'>
        <TbSettings className='cursor-pointer' size={24} />
        <HiOutlineQuestionMarkCircle className='cursor-pointer' size={24} />
        <TbBell className='cursor-pointer' size={24} />
        <Image
          src={data?.user?.image!}
          width={38}
          height={38}
          alt='Avatar'
          className='overflow-hidden rounded-full'
        />
        <TbLogout
          className='cursor-pointer'
          size={24}
          onClick={serverSignOut}
        />
      </div>
    </header>
  );
};

export default Header;
