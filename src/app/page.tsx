import { Sidebar } from "@/components/ui/sidebar";
import Header from "./_components/Header";

const HomePage = () => {
  return (
    <div className="bg-linear-to-r from-[#323a5c] via-[#003153] to-[#86608e] w-full h-screen">
      {/* <img src={"/pinebaatar-bg.svg"} /> */}
      <Sidebar />
      <Header />
    </div>
  );
};
export default HomePage;
