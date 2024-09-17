import { TabsList, TabsTrigger } from "./ui/tabs";

interface TabsListWithTriggersProps {
  tabs: string[];
}

export const TabsListWithTriggers: React.FC<TabsListWithTriggersProps> = ({
  tabs,
}) => {
  return (
    <TabsList className='gap-4'>
      {tabs.map((tab) => (
        <TabsTrigger
          key={tab.toLowerCase()}
          value={tab.toLowerCase()}
          className='data-[state=active]:bg-white'
        >
          {tab}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};
