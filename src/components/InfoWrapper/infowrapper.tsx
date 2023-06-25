import "./infowrapper.css";
import React from "react";

import {
  Plus,
  CaretDown,
  CaretRight,
  ChatsCircle,
  Signpost,
  CalendarBlank,
  Hash,
  SpeakerHigh,
  UserPlus,
} from "@phosphor-icons/react";

export function InfoWrapper() {
  return (
    <div className="InfoWrapper">
      <div className="InfoWrapperTitle">
        <p>Wumpus Guild</p>
        <CaretDown weight="bold" />
      </div>
      <div className="InfoWrapperChannels">
        <div className="InfoWrapperGuildSettings">
          <div className="InfoWrapperGuildSetting">
            <div>
              <Signpost weight="fill" size={16} />
              <p>Server guide</p>
            </div>
          </div>
          <div className="InfoWrapperGuildSetting">
            <div>
              <CalendarBlank weight="fill" size={16} />
              <p>Events</p>
            </div>
          </div>
          <div className="InfoWrapperGuildSetting">
            <div>
              <Hash weight="bold" size={16} />
              <p>Channels and Roles</p>
            </div>
          </div>
        </div>
        <div className="InfoWrapperDivider"></div>
        <div className="InfoWrapperCategories">
          <div className="InfoWrapperCategoryChannels">
            <div className="InfoWrapperCategory">
              <div>
                <CaretRight weight="regular" />
                <p>CATEGORY ONE</p>
              </div>
            </div>
            <div className="InfoWrapperChannel">
              <div className="InfoWrapperChannelBtn">
                <div className="InfoWrapperChannelName">
                  <Hash weight="bold" />
                  <p>channel-one</p>
                </div>
                <UserPlus weight="fill" size={16} className="Invite" />
              </div>
            </div>
            <div className="InfoWrapperChannel ChannelActive">
              <div className="InfoWrapperChannelBtn">
                <div className="InfoWrapperChannelName">
                  <Hash weight="bold" />
                  <p>channel-two</p>
                </div>
                <UserPlus weight="fill" size={16} className="Invite" />
              </div>
            </div>
            <div className="InfoWrapperChannel">
              <div className="InfoWrapperChannelBtn">
                <div className="InfoWrapperChannelName Silenced">
                  <Hash weight="bold" />
                  <p>channel-three</p>
                </div>
                <UserPlus weight="fill" size={16} className="Invite" />
              </div>
            </div>
          </div>
          <div className="InfoWrapperCategoryChannels">
            <div className="InfoWrapperCategory">
              <div>
                <CaretRight weight="regular" />
                <p>CATEGORY TWO</p>
              </div>
            </div>
            <div className="InfoWrapperChannel">
              <div className="InfoWrapperChannelBtn">
                <div className="InfoWrapperChannelName">
                  <Hash weight="bold" />
                  <p>channel-four</p>
                </div>
                <UserPlus weight="fill" size={16} className="Invite" />
              </div>
            </div>
            <div className="InfoWrapperChannel">
              <div className="InfoWrapperChannelBtn">
                <div className="InfoWrapperChannelName">
                  <SpeakerHigh weight="bold" />
                  <p>Voice One</p>
                </div>
                <UserPlus weight="fill" size={16} className="Invite" />
              </div>
            </div>
            <div className="InfoWrapperChannel">
              <div className="InfoWrapperChannelBtn">
                <div className="InfoWrapperChannelName">
                  <ChatsCircle weight="bold" />
                  <p>forum-one</p>
                </div>
                <UserPlus weight="fill" size={16} className="Invite" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
