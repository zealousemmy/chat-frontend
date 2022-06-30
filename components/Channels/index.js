import { withTheme } from "styled-components";
import { BodyDiv } from "../../universal-components/body";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import FlexLeftBody from "../../universal-components/FlexLeft";
import CreateChannelTab from "../../universal-components/CreateChannelTab";
import Cards from "../../universal-components/Cards";
import { CardsArray } from "../../util/New-User-Select-Channel/CardsArray";
import { ChannelsFlexArray } from "../../util/Channels/FlexLeft";
import ManagedChannels from "../../universal-components/Managed Channels";
import { ChannelsManagedArray } from "../../util/Channels/Body";
import { useEffect, useState, useCallback } from "react";
import Modals from "../../universal-components/Modals";
import CreateChannels from "../Create-Post/Create-Channel";
import Axios from "axios";
import Notify from "../../util/notify";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { config } from "../../config";
import { CreateChannelSchema } from "../../Authentication/schema";
import { useUser } from "../../util/store/userContext";
import { CreateChannelArray as formArray } from "../../util/Create-Channel";
import SearchInput from "../../universal-components/Search-Input";

const Channels = ({ theme: { Color }, channelType, contentType }) => {
  let globalFormArray = formArray;

  // console.log()
  const [show, setShow] = useState(false);
  const { user } = useUser();
  const [channelListData, setchannelListData] = useState([]);
  const [managedChannels, setManagedChannel] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [logForm, setLogForm] = useState({});
  const [fileName, setFileName] = useState();
  const [showDropdown, setShowDropdown] = useState(false);

  const RemoveDropdown = useCallback(() => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  }, [showDropdown]);

  const HandleClick = () => {
    setShow(!show);
  };

  const HandleShow = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  const FetchData = (data) => {
    Axios.post(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel/create`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // console.log(res.data?.message?.url)
        Notify(
          res.data?.message?.url[0] ||
            res.data?.message?.title[0] ||
            res.data?.message
        );
      })
      .catch((error) => {
        console.log(error);
        Notify(error.message);
      });
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setLogForm({ ...logForm, [name]: value });
  };
  const readImage = function (file) {
    let input = file.target;
    let reader = new FileReader();
    const lastDot = file.target.value.split("\\");
    setFileName(lastDot[lastDot.length - 1]);
    reader.onload = function () {
      let dataUrl = reader.result;
      // setFileName(dataUrl);
      setLogForm({ ...logForm, ["file"]: dataUrl });
    };
    reader.readAsDataURL(input.files[0]);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    let valid;

    await CreateChannelSchema.validate(logForm, { abortEarly: false })
      .then((res) => {
        valid = res;
      })
      .catch((error) => Notify(error.message));

    logForm["userId"] = user?.id;
    // logForm["url"] = "";

    if (valid) {
      FetchData(logForm);
    } else {
      Notify("Inputed Validation Failed");
    }
  };

  const getInitialPageData = async () => {
    try {
      const [channelsRes, managedChannelsRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel/get`),
        fetch(
          `${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel/all-channels-by-admin/${user.id}`
        ),
      ]);
      const [channels, managedChannels] = await Promise.all([
        channelsRes.json(),
        managedChannelsRes.json(),
      ]);
      setLoading(false);
      setchannelListData(channels.data);
      setManagedChannel(managedChannels.data);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    getInitialPageData().then();
  }, []);
  useEffect(() => {
    return () => {
      let ChannelTypeResponse = channelType.data.map((item) => {
        return { value: item?.name, classname: "select_classrr" };
      });
      let ContentTypeResponse = contentType.data.map((item) => {
        return { value: item?.name, classname: "select_classdd" };
      });
      globalFormArray[0].multiple_input[2].option = ChannelTypeResponse;
      globalFormArray[1].multiple_input[1].option = ContentTypeResponse;
    };
  }, []);
  return (
    <BodyDiv Color={Color} onClick={RemoveDropdown}>
      <Nav
        NavArrayContent={NavArrayDashboard}
        show={showDropdown}
        HandleShow={HandleShow}
      />
      <ToastContainer transition={Zoom} draggable={false} />
      <div className={"body"}>
        <div className={"flex-left"}>
          <FlexLeftBody FlexLeftArray={ChannelsFlexArray} />
        </div>
        <div className={"landingpageflexcenter"}>
          <div className={"channelHeader"}>
            <h2>Welcome to channels</h2>
          </div>
          <CreateChannelTab
            HandleClick={HandleClick}
            button_text={"Create a channel"}
            text={
              "Join channels to explore your interest. Note that you will be only able to post in a channel that you have joined"
            }
          />
          {show && (
            <Modals
              ModalComponent={CreateChannels}
              setValue={setShow}
              fileName={fileName}
              HandleChange={HandleChange}
              HandleSubmit={HandleSubmit}
              createForm={globalFormArray}
              readImage={readImage}
            />
          )}
          <div className={"channel"}>
            <h2>Channels You Manage</h2>
            <ManagedChannels
              ManageChannelArray={managedChannels}
              fallback={ChannelsManagedArray}
            />
          </div>
          <div className={"channelbodyfooter"}>
            <h3>Top channels</h3>
            <SearchInput placeholder="channel search..." />
            <Cards
              loading={loading}
              error={error}
              CardArray={channelListData}
            />
          </div>
        </div>
        <div className={"rightbody flex-right"} />
      </div>
    </BodyDiv>
  );
};

export default withTheme(Channels);
