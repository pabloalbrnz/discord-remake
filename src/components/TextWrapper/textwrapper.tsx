import { SetStateAction, useRef, useState } from "react";
import "./textwrapper.css";

import {
  Hash,
  HashStraight,
  BellSlash,
  Circle,
  PushPin,
  Users,
  Tray,
  Question,
  MagnifyingGlass,
  MinusCircle,
  Moon,
  Note,
  Check,
  PlayCircle,
  PlusCircle,
  Gift,
  Gif,
  Sticker,
  Smiley,
  PaperPlaneRight,
} from "@phosphor-icons/react";

export function TextWrapper() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleWrapperClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="TextWrapper">
      <div className="TextWrapperTopBar">
        <div className="TextWrapperChannel">
          <div className="TextWrapperChannelName">
            <Hash weight="bold" size={24} />
            <span>channel-two</span>
            <div className="TextWrapperDivider"></div>
            <div className="TextWrapperChannelDesc">
              <span>Description of channel two</span>
            </div>
          </div>
        </div>
        <div className="TextWrapperTopBarBtns">
          <div className="TextWrapperTopBarBtn">
            <HashStraight weight="regular" />
          </div>
          <div className="TextWrapperTopBarBtn">
            <BellSlash weight="fill" />
          </div>
          <div className="TextWrapperTopBarBtn">
            <PushPin weight="fill" />
          </div>
          <div className="TextWrapperTopBarBtn ActiveBtn">
            <Users weight="fill" />
          </div>
          <div className="TextWrapperSearchInput" onClick={handleWrapperClick}>
            <input ref={inputRef} type="text" placeholder="Search" />
            <MagnifyingGlass weight="bold" />
          </div>
          <div className="TextWrapperTopBarBtn">
            <Tray weight="regular" />
          </div>
          <div className="TextWrapperTopBarBtn">
            <Question weight="fill" />
          </div>
        </div>
      </div>
      <div className="TextWrapperAllWrapper">
        <div className="TextWrapperChatMessages">
          <div className="TextWrapperChatBoxWrapper">
            <div className="TextWrapperChatBox">
              <PlusCircle weight="fill" className="TextWrapperChatBoxButtons" />
              <input
                onChange={handleChange}
                type="text"
                className="TextWrapperChatBoxInput"
                placeholder="Chat in #channel-two"
              />
              <Gift weight="fill" className="TextWrapperChatBoxButtons" />
              <Gif weight="fill" className="TextWrapperChatBoxButtons" />
              <Sticker weight="fill" className="TextWrapperChatBoxButtons" />
              <Smiley weight="fill" className="TextWrapperChatBoxButtons" />
              <div className="TextWrapperChatBoxDivider"></div>
              <PaperPlaneRight
                weight="fill"
                className={inputValue ? "SendActive" : "SendDesactive"}
              />
            </div>
          </div>
        </div>
        <div className="TextWrapperMembersWrapper">
          <div className="TextWrapperMembers">
            <div className="TextWrapperRoleMembers">
              <div className="TextWrapperRoleName">
                <span>ADMINISTRATOR — 1</span>
              </div>
              <div className="TextWrapperMembersRole">
                <div className="TextWrapperMember">
                  <div className="TextWrapperMemberAvatar">
                    <img src="./wumpus.jpg" alt="Wumpus Avatar" />
                  </div>
                  <div className="TextWrapperStatusIcon Idle">
                    <Moon weight="fill" />
                  </div>
                  <div className="TextWrapperMemberUser">
                    <span className="TextWrapperMemberUsername Blurple">
                      Wumpus
                    </span>
                    <span className="TextWrapperMemberStatus">
                      Discord Remake are awesome
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="TextWrapperRoleMembers">
              <div className="TextWrapperRoleName">
                <span>MODERATOR — 3</span>
              </div>
              <div className="TextWrapperMembersRole">
                <div className="TextWrapperMember">
                  <div className="TextWrapperMemberAvatar">
                    <img src="./clide.jpg" alt="Clide Avatar" />
                  </div>
                  <div className="TextWrapperStatusIcon Online">
                    <Circle weight="fill" />
                  </div>
                  <div className="TextWrapperMemberUser">
                    <span className="TextWrapperMemberUsername Pink">
                      Clide
                    </span>
                    <span className="TextWrapperMemberStatus">
                      🪩 Wumpus Party!!!
                    </span>
                  </div>
                </div>
                <div className="TextWrapperMember">
                  <div className="TextWrapperMemberAvatar">
                    <img src="./bento.jpg" alt="Bento Avatar" />
                  </div>
                  <div className="TextWrapperStatusIcon Busy">
                    <MinusCircle weight="fill" />
                  </div>
                  <div className="TextWrapperMemberUser">
                    <span className="TextWrapperMemberUsername Pink">
                      Bento
                    </span>
                    <span className="TextWrapperMemberStatus">
                      Listening Spotify <Note weight="fill" />
                    </span>
                  </div>
                </div>
                <div className="TextWrapperMember">
                  <div className="TextWrapperMemberAvatar">
                    <img src="./discord.jpg" alt="Discord Avatar" />
                  </div>
                  <div className="TextWrapperStatusIcon Online">
                    <Circle weight="fill" />
                  </div>
                  <div className="TextWrapperMemberUser">
                    <span className="TextWrapperMemberUsername Pink">
                      DiscordModer066
                    </span>
                    <span className="TextWrapperMemberStatus"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="TextWrapperRoleMembers">
              <div className="TextWrapperRoleName">
                <span>BOTS — 2</span>
              </div>
              <div className="TextWrapperMember">
                <div className="TextWrapperMemberAvatar">
                  <img
                    src="https://cdn.discordapp.com/avatars/1076027273435688993/e08a7358e3a5947c7ee67d2336e88137.webp?size=512"
                    alt="Cosmos Avatar"
                  />
                </div>
                <div className="TextWrapperStatusIcon Streaming">
                  <PlayCircle weight="fill" />
                </div>
                <div className="TextWrapperMemberUser">
                  <span className="TextWrapperMemberUsername Purple">
                    Cosmos
                    <div className="BotBadge">BOT</div>
                  </span>
                  <span className="TextWrapperMemberStatus"></span>
                </div>
              </div>
              <div className="TextWrapperMember">
                <div className="TextWrapperMemberAvatar">
                  <img
                    src="https://cdn.discordapp.com/avatars/487328045275938828/3cad11d7474f0a47df6f2c3135b3af9c.png?size=1024"
                    alt="Gartic Avatar"
                  />
                </div>
                <div className="TextWrapperStatusIcon Online">
                  <Circle weight="fill" />
                </div>
                <div className="TextWrapperMemberUser">
                  <span className="TextWrapperMemberUsername Purple">
                    GarticBOT
                    <div className="BotBadge">
                      <Check weight="bold" />
                      BOT
                    </div>
                  </span>
                  <span className="TextWrapperMemberStatus"></span>
                </div>
              </div>
            </div>
            <div className="TextWrapperRoleMembers">
              <div className="TextWrapperRoleName">
                <span>MEMBERS — 3</span>
              </div>
              <div className="TextWrapperMembersRole">
                <div className="TextWrapperMember">
                  <div className="TextWrapperMemberAvatar">
                    <img
                      src="https://cdn.discordapp.com/avatars/329823160683855874/ccb821c6cc9822c4409bf3a40705bce8.webp?size=512"
                      alt="Otto Avatar"
                    />
                  </div>
                  <div className="TextWrapperStatusIcon Idle">
                    <Moon weight="fill" />
                  </div>
                  <div className="TextWrapperMemberUser">
                    <span className="TextWrapperMemberUsername Red">Otto</span>
                    <span className="TextWrapperMemberStatus">📚 Studying</span>
                  </div>
                </div>
                <div className="TextWrapperMember">
                  <div className="TextWrapperMemberAvatar">
                    <img
                      src="https://cdn.discordapp.com/avatars/131773537743667200/7a1a5b2da03d37d8a7b20e03997cde9a.webp?size=512"
                      alt="pulse Avatar"
                    />
                  </div>
                  <div className="TextWrapperStatusIcon Idle">
                    <Moon weight="fill" />
                  </div>
                  <div className="TextWrapperMemberUser">
                    <span className="TextWrapperMemberUsername Red">pulse</span>
                    <span className="TextWrapperMemberStatus"></span>
                  </div>
                </div>
                <div className="TextWrapperMember">
                  <div className="TextWrapperMemberAvatar">
                    <img
                      src="https://cdn.discordapp.com/avatars/199318572604981248/a_cacbfb046424ae00589edb470b612646.gif?size=512"
                      alt="Tardis Avatar"
                    />
                  </div>
                  <div className="TextWrapperStatusIcon Online">
                    <Circle weight="fill" />
                  </div>
                  <div className="TextWrapperMemberUser">
                    <span className="TextWrapperMemberUsername Red">
                      Tardis
                    </span>
                    <span className="TextWrapperMemberStatus">
                      Jogando Krita <Note weight="fill" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="TextWrapperRoleMembers">
              <div className="TextWrapperRoleName">
                <span>OFFLINE — 1</span>
              </div>
              <div className="TextWrapperMembersRole Offline">
                <div className="TextWrapperMember">
                  <div className="TextWrapperMemberAvatar">
                    <img
                      src="https://cdn.discordapp.com/avatars/443889144037507072/12c144a71a6d0bcdc5f7e38368c6faae.webp?size=512"
                      alt="Paulo Avatar"
                    />
                  </div>
                  <div className="TextWrapperMemberUser OfflineUser">
                    <span className="TextWrapperMemberUsername Red">Paulo</span>
                    <span className="TextWrapperMemberStatus"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
