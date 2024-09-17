import { CgProfile } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi";

export const DirectReports = () => {
  const reports = ["Shane", "Nathan", "Mitchell", "Philip"];
  return (
    <div className='flex flex-col items-start p-6 gap-4 rounded-2xl bg-white'>
      <div>Direct Reports</div>
      <div className='flex flex-col gap-2'>
        {reports.map((report, index) => (
          <div key={index} className='flex items-center gap-2'>
            <CgProfile size={16} /> {report}
          </div>
        ))}
        <div className='flex items-center gap-2'>
          <HiOutlineUserGroup size={16} /> 4 More...
        </div>
      </div>
    </div>
  );
};
