import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const HeaderAvatarComponent = () => {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-gray-400"></AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent>Username</HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default HeaderAvatarComponent;
