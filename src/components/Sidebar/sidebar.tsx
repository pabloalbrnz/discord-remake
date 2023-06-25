import React from "react";
import "./sidebar.css";
import logo from "./Logo.svg";

import { Plus, Compass } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="HomeBtn">
        <img src={logo} className="HomeBtnLogo" alt="logo" />
      </div>
      <div className="SidebarDivider"></div>
      <div className="SidebarGuilds">
        <div className="SidebarGuild GuildActive">
          <img src="./wumpus.jpg" alt="Wumpus Guild" />
        </div>
        <div className="SidebarGuild">
          <img src="./bento.jpg" alt="Bento Guild" />
        </div>
        <div className="SidebarGuild">
          <img src="./clide.jpg" alt="Clide Guild" />
        </div>
        <div className="SidebarGuild">
          <img src="https://picsum.photos/200" alt="Random Guild" />
        </div>
        <div className="SidebarBtn AddGuild">
          <Plus weight="regular" />
        </div>
        <div className="SidebarBtn SearchGuild">
          <Compass weight="fill" />
        </div>
      </div>
    </div>
  );
}
