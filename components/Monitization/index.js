import { useCallback } from "react";
import { useState } from "react";
import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import Image from "next/image";
import Link from "next/link";
import Retent from "../../asset/images/resent.png";
import Family from "../../asset/images/family.svg";

const Monitization = ({ theme: { Color } }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const RemoveDropdown = useCallback(() => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  }, [showDropdown]);

  const HandleShow = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  return (
    <BodyDiv Color={Color} onClick={RemoveDropdown}>
      <Nav
        NavArrayContent={NavArrayDashboard}
        show={showDropdown}
        HandleShow={HandleShow}
      />

      <div className={"body"}>
        <div className={"monetization"}>
          <div className={"monetization-header"}>
            <div className={"monetized-header"}>
              <h3>Monetizatipn</h3>
            </div>
            <div className={"monetized-header-body"}>
              <h4>Key rules for monetization</h4>
              <div className={"monetized-header-body-teams"}>
                <p>
                  1. You can monetize a channel if you have a minimum of 1000
                  views on a channel
                </p>
                <p>
                  2. You can only monetize channels you created or if you are
                  and admin in that channel
                </p>
                <p>
                  3. You can only monetize a channel that has at lease 500
                  members and 200 post.
                </p>
                <p>
                  4. You can only monetize channels that have been existing for
                  almost 30 days
                </p>
              </div>
            </div>
          </div>

          <div className={"monetization-body"}>
            <div className={"monetization-body-header"}>
              <h3>Channels you manage</h3>
            </div>
            <div className={"monetization-body-cards"}>
              <div className={"monetized-card"}>
                <div className={"monetized-card-image"}>
                  <div className={"monetized-card-image-items"}>
                    <Image
                      src={Retent}
                      alt={"rent"}
                      priority={true}
                      // layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={"monetized-card-title"}>
                    <p>The Hive</p>
                  </div>
                </div>
                <div className={"monetized-card-body"}>
                  <p>3204 views 320 Members</p>
                  <p>Funds generated-Nill</p>
                  <div className={"monetized-card-link"}>
                    <p>Status:</p>
                    <Link href={"./index"}>
                      <a>Not monetized</a>
                    </Link>
                  </div>
                  <div className={"monetized-card-body-button"}>
                    <button className={"apply"}>Apply</button>
                  </div>
                </div>
              </div>
              <div className={"monetized-card"}>
                <div className={"monetized-card-image"}>
                  <div className={"monetized-card-image"}>
                    <div className={"monetized-card-image-items"}>
                      <Image
                        src={Retent}
                        alt={"rent"}
                        priority={true}
                        // layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className={"monetized-card-title"}>
                      <p>The Hive</p>
                    </div>
                  </div>
                </div>
                <div className={"monetized-card-body"}>
                  <p>3204 views 320 Members</p>
                  <p>Funds generated-Nill</p>
                  <div className={"monetized-card-link"}>
                    <p>Status:</p>
                    <Link href={"./index"}>
                      <a>Not monetized</a>
                    </Link>
                  </div>
                  <div className={"monetized-card-body-button"}>
                    <button className={"cancel"}>Cancel</button>
                    <button className={"apply"}>Apply</button>
                  </div>
                </div>
              </div>
              <div className={"monetized-card"}>
                <div className={"monetized-card-image"}>
                  <div className={"monetized-card-image"}>
                    <div className={"monetized-card-image-items"}>
                      <Image
                        src={Retent}
                        alt={"rent"}
                        priority={true}
                        // layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className={"monetized-card-title"}>
                      <p>The Hive</p>
                    </div>
                  </div>
                </div>
                <div className={"monetized-card-body"}>
                  <p>3204 views 320 Members</p>
                  <p>Funds generated-Nill</p>
                  <div className={"monetized-card-link"}>
                    <p>Status:</p>
                    <Link href={"./index"}>
                      <a>Not monetized</a>
                    </Link>
                  </div>
                  <div className={"monetized-card-body-button"}>
                    <button className={"banned"}>Banned</button>
                  </div>
                </div>
              </div>
              <div className={"monetized-card"}>
                <div className={"monetized-card-image"}>
                  <div className={"monetized-card-image"}>
                    <div className={"monetized-card-image-items"}>
                      <Image
                        src={Retent}
                        alt={"rent"}
                        priority={true}
                        // layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className={"monetized-card-title"}>
                      <p>The Hive</p>
                    </div>
                  </div>
                </div>
                <div className={"monetized-card-body"}>
                  <p>3204 views 320 Members</p>
                  <p>Funds generated-Nill</p>
                  <div className={"monetized-card-link"}>
                    <p>Status:</p>
                    <Link href={"./index"}>
                      <a>Not monetized</a>
                    </Link>
                  </div>
                  <div className={"monetized-card-body-button"}>
                    <button className={"cancel"}>Cancel</button>
                    <button className={"apply"}>Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BodyDiv>
  );
};

export default withTheme(Monitization);
