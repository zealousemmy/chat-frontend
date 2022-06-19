import Image from "next/image";
import Link from "next/link";
import {withTheme} from "styled-components";
import {FlexCenterBodyStyles} from "./flexcenterbody";
import {useState} from "react";
import Likes from "../../../asset/Icons/like.svg";
import {BiMessageRoundedDetail} from "react-icons/bi";
import {BsFillShareFill, BsHandThumbsDownFill,} from "react-icons/bs";
import FormatDateTime from "../../../util/TimeDate";


const FlexCenterBody = ({error, loading, FlexBodyArray, theme: {Color}, MessageBox, selectItem,}) => {
    const [messageBox, setMessageBox] = useState(false);
    const [pic, setPic] = useState();
    console.log(FlexBodyArray)


    const HandleComments = (key) => {
        setMessageBox(!messageBox);
        setPic(key);
    };
    return (
        <FlexCenterBodyStyles Color={Color}>
            {loading ? <p>Loading...</p> : error ?
                <p style={{color: "red"}}>Error Occurred while fetching data. please check your internet
                    connection</p> : FlexBodyArray?.map((item, keyMain) => (
                    <div key={keyMain} className={`classsections`}>
                        {/*{console.log(item, "from flexcenter")}*/}
                        {/*{item.section.map((item, key) => (*/}
                        <div className={`layoutbody`}>
                            <div className={"layout"}>
                                <div className={`namelayout`}>
                                    <div className={`itemlayout`}>
                                        <div className={`itemlayout1`}>
                                            <Image

                                                src={`https://abolle.s3.eu-west-2.amazonaws.com/${item?.user?.avatar}`}
                                                alt={"profile pic"}
                                                width={"40px"}
                                                height={"40px"}
                                                className={"profile-image"}
                                                priority
                                            />
                                        </div>
                                        <div className={`itemlayout11`}>
                                            <h2>{item?.user?.name}</h2>
                                            <div className={`itemlayout111`}>
                                                <div>
                                                    <p>{item?.channel?.title}</p>
                                                </div>
                                                {/*<div>*/}
                                                {/*  <p>{item.Region_of_post}</p>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`${item.classitemlayouttime} ${item.classicon}`}
                                    >
                                        <p className={"postTime"}>{FormatDateTime(item.created_at)}</p>

                                    </div>
                                </div>
                              <div><p className={"postTitle"}>{item.title}</p></div>
                                <div className={`namelayout2`}>
                                    <div className={`itemlayout2`}>
                                        <p>{item.post}</p>
                                    </div>
                                    <div className={`itemlayout21`}>
                                        <Link href={"#"}>
                                            <a>{item.view_post}</a>
                                        </Link>
                                    </div>
                                </div>
                                <div className={`namelayout3`}>
                                    <div className={`itemlayout3`}>
                                        {/*<Image*/}
                                        {/*  src={item.postimage}*/}
                                        {/*  alt={"Posted Pic"}*/}
                                        {/*  // height={"329px"}*/}
                                        {/*/>*/}
                                    </div>
                                </div>
                                <div className={`namelayout4`}>
                                    <div className={`itemlayout4`}>
                                        <div className={`itemlayout40`}>
                                            <div className={`itemlayout401`}>
                                                <Image
                                                    src={Likes}
                                                    alt={"likes"}
                                                    width={"15px"}
                                                    height={"15px"}
                                                />
                                            </div>
                                            <div className={`itemlayout402`}>
                                                <p>{item?.total_agree}</p>
                                            </div>
                                        </div>

                                        <div className={`itemlayout40`}>
                                            <div className={`itemlayout401`}>
                                                <BsHandThumbsDownFill/>
                                            </div>
                                            <div className={`itemlayout402`}>
                                                <p>{item?.total_disagree}</p>
                                            </div>

                                            <div className={`itemlayout40`}>
                                                <div
                                                    className={`itemlayout401`}
                                                    onClick={() => HandleComments(keyMain)}
                                                >
                                                    <BiMessageRoundedDetail/>
                                                </div>
                                                <div className={`itemlayout402`}>
                                                    <p>{item?.total_comment}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`itemlayout41`}>
                                            <div className={`itemlayout411`}>
                                                <div className={`itemlayout4111`}>
                                                    <BsFillShareFill/>
                                                </div>
                                                <div className={`itemlayout4112`}>
                                                    <p>{item.share_post_text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* {!item.comments ? (
                messageBox &&
                keyMain === pic &&
                MessageBox && (
                  <div>
                    <MessageBox ProfilePics={ProfilePic} />
                  </div>
                )
              ) : (
                <div>
                  <div>
                    <MessageBox ProfilePics={ProfilePic} />
                  </div>
                  <FlexCenterSubHeader
                    details={"most relevant"}
                    selectItem={selectItem}
                    width={"70%"}
                  />
                  {item.comments.map((item, key) => (
                    <Comments key={key} Comments={item} />
                  ))}

                  <div className={"see-more-comments"}>
                    <button>See more</button>
                  </div>
                </div>
              )} */}
                            </div>
                            {/* // ))} */}
                        </div>
                    </div>
                ))}
            {/* ))} */}


        </FlexCenterBodyStyles>
    );
};

export default withTheme(FlexCenterBody);
