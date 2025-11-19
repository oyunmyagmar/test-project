import React from "react";
import HeaderAvatarComponent from "./HeaderAvatarComponent";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="w-full h-15 bg-[#09090b] flex items-center justify-between pr-4">
        <Link href={"https://pinecone.mn/"}>
          <img src={"/pine-lg.png"} className="h-18 w-18" />
        </Link>

        <HeaderAvatarComponent />
      </div>
    </div>
  );
};

export default Header;
