import React from "react";
import Image from "next/image";
import arrowDownIcon from "@/assets/icons/arrow-down.svg";
import {
  Table as TableShadCn,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";

interface TableRowData {
  date: string;
  description: string;
  usedDays?: string;
  earnedDays?: string;
  balance: string;
}

const tableData: TableRowData[] = [
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    earnedDays: "3.00",
    balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: "-6",
    balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    earnedDays: "3.00",
    balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    earnedDays: "3.00",
    balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    usedDays: "-6",
    balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    earnedDays: "3.00",
    balance: "3.00",
  },
];

const Table: React.FC = () => {
  return (
    <TableShadCn className='mt-4'>
      <TableHeader className='bg-[#DAE6F2]'>
        <TableRow>
          <TableHead className='w-[100px] text-black'>
            Date
            <Image
              className='inline-block'
              src={arrowDownIcon}
              width={16}
              height={16}
              alt='Icon arrow-down'
            />
          </TableHead>
          <TableHead className='text-black'>Description</TableHead>
          <TableHead className='text-black'>Used Days (-)</TableHead>
          <TableHead className='text-right text-black'>
            Earned Days (+)
          </TableHead>
          <TableHead className='text-black'>Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((row, index) => (
          <TableRow key={index}>
            <TableCell className='font-medium'>{row.date}</TableCell>
            <TableCell>{row.description}</TableCell>
            <TableCell>{row.usedDays}</TableCell>
            <TableCell className='text-right'>{row.earnedDays}</TableCell>
            <TableCell className='text-right'>{row.balance}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableShadCn>
  );
};

export default Table;
