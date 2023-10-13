import SideNavigation from "@/components/account/sideNavigation";
import Top from "@/components/account/top";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="fixed inset-0 [background:linear-gradient(161.68deg,_#fa7c54,_#ec2c5a)] z-[-200]"></div>
      <div className="flex">
        <SideNavigation />
        <div className=" min-h-[calc(100vh-5rem)] flex-1 flex px-10  md:pl-14  lg:pl-12  mt-10 rounded-r  overflow-hidden">
          <div className="md:w-[200px] " />
          <div className="w-full h-full rounded-r overflow-hidden bg-whitesmoke-200  ">
           
            <Top />
          
           
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
