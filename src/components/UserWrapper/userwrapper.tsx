import React from "react";
import "./userwrapper.css";

import { Microphone, Headset, Gear, Moon } from "@phosphor-icons/react";

export function UserWrapper() {
  return (
    <div className="UserWrapper">
      <div className="UserWrapperUser">
        <div className="UserWrapperAvatar">
          <img
            src="https://cdn.discordapp.com/avatars/131773537743667200/7a1a5b2da03d37d8a7b20e03997cde9a.webp?size=512"
            alt="User Avatar"
          />
          <div className="UserWrapperStatusIcon">
            <Moon weight="fill" />
          </div>
        </div>
        <div className="UserWrapperUsername">
          <span className="UserWrapperDisplayName">pulse</span>
          <span className="UserWrapperStatus">Ausente</span>
        </div>
      </div>
      <div className="UserWrapperBtns">
        <div className="UserWrapperBtn">
          <Microphone weight="fill" size={32} />
        </div>
        <div className="UserWrapperBtn">
          <Headset weight="fill" size={32} />
        </div>
        <div className="UserWrapperBtn">
          <Gear weight="fill" size={32} />
        </div>
      </div>
    </div>
  );
}
