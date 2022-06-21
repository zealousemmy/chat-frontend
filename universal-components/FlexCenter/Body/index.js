import Image from "next/image";
import Link from "next/link";
import {withTheme} from "styled-components";
import {FlexCenterBodyStyles} from "./flexcenterbody";
import {useCallback, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {BiMessageRoundedDetail} from "react-icons/bi";
import {BsFillShareFill, BsHandThumbsDownFill, BsHandThumbsUpFill,} from "react-icons/bs";
import FormatDateTime from "../../../util/TimeDate";
import Axios from "axios";
import {useUser} from "../../../util/store/userContext";
import {useRouter} from "next/router";
import ProfilePic from "../../../asset/images/profileimage.png";
import FlexCenterSubHeader from "../SubHeader";
// import Comments from "../../Comments";

const FlexCenterBody = ({      error,    loading,FlexBodyArray,theme: {Color},MessageBox, selectItem,singlepage, ProfileCommentBox }) => {
    const router = useRouter();
    const {user} = useUser();
    const [messageBox, setMessageBox] = useState(false);
    const [pic, setPic] = useState();
    // const [FlexBodyArray, setFlexBodyArray] = useState({});
    const [hasMore, setHasMore] = useState(false);
    // useEffect(() => {
    //     return () => {
    //         setFlexBodyArray(data);
    //         // if (data?.length > 0) setHasMore(true);
    //     };
    // });

    // function fetchMore() {
    //     if (FlexBodyArray?.current_page !== FlexBodyArray?.last_page) {
    //         Axios.get("/trending-posts?page=" + (FlexBodyArray.current_page + 1))
    //             .then(({data}) => {
    //                 setFlexBodyArray({
    //                     ...FlexBodyArray,
    //                     current_page: data.current_page,
    //                     from: data.from,
    //                     to: data.to,
    //                     data: [...FlexBodyArray.data, ...data.data],
    //                 });
    //                 // setLoading(false)
    //             })
    //             // .finally(() => setHasMore(false))
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     } else {
    //         setHasMore(false);
    //     }
    // }

    const HandleComments = (key) => {
        if (user === null) return router?.push("/auth/signin");
        setMessageBox(!messageBox);
        setPic(key);
    };
    const LikePost = useCallback( (postId) => {

            if (user === null) return router?.push("/auth/signin");
            let userId = 7;
            Axios.get(  `${process.env.NEXT_PUBLIC_APP_DOMAIN}/like-post/${userId}/${postId}/agree`  )   .then((res) => {
                    if (
                        res.data.message === "You agreed with the view point on this post"
                    ) {
                        FlexBodyArray?.data.forEach((item) => {
                            if (item.id === postId) {
                                let total_agree = item.total_agree;
                                let total = (item.total_agree += 1);
                                setFlexBodyArray({
                                    ...FlexBodyArray,
                                    data: [
                                        ...FlexBodyArray.data,
                                        {...item, total_agree: total},
                                    ],
                                });
                            }
                        });
                    }
                })
                .catch((err) => console.log(err));
        }, [FlexBodyArray]  );
    const disLikePost = useCallback(   (postId) => {
            if (user === null) return router?.push("/auth/signin");
            let userId = 8;
            Axios.get(
                `${process.env.NEXT_PUBLIC_APP_DOMAIN}/like-post/${userId}/${postId}/disagree`
            )
                .then((res) => {
                    if (
                        res.data.message ===
                        "You disagreed with the view point on this post"
                    ) {
                        FlexBodyArray?.data.forEach((item) => {
                            if (item.id === postId) {
                                let total_disagree = item.total_disagree;
                                let total = (item.total_disagree =
                                    item.total_disagree === 0
                                        ? item.total_disagree
                                        : (item.total_disagree += 1));
                                setFlexBodyArray({
                                    ...FlexBodyArray,
                                    data: [
                                        ...FlexBodyArray.data,
                                        {...item, total_disagree: total},
                                    ],
                                });
                            }
                        });
                    }
                })
                .catch((err) => console.log(err));
        },   [FlexBodyArray] );

    return (
        <FlexCenterBodyStyles Color={Color}>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{color: "red"}}>
                    Error Occurred while fetching data. please check your internet
                    connection
                </p>
            ) :
                // <InfiniteScroll
                //     dataLength={FlexBodyArray?.data?.length || 25}
                //     next={fetchMore}
                //     hasMore={hasMore}
                //     loader={<h3 className={"endlessScroll-message"}> Loading...</h3>}
                //     endMessage={
                //         <h4 className={"endlessScroll-message"}>Nothing more to show</h4>
                //     }
                // >
                    FlexBodyArray?.data?.map((item, keyMain) => (
                        <div key={keyMain} className={`classsections`}>
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
                                                <h2>{item?.user?.user_name}</h2>
                                                <div className={`itemlayout111`}>
                                                    <div>
                                                        <p>{item?.channel?.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={`${item.classitemlayouttime} ${item.classicon}`}
                                        >
                                            <p className={"postTime"}>
                                                {FormatDateTime(item.created_at)}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className={"postTitle"}>{item.title}</p>
                                    </div>
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
                                                <div
                                                    className={`itemlayout401`}
                                                    onClick={() => LikePost(item?.id)}
                                                >
                                                    <BsHandThumbsUpFill/>
                                                </div>
                                                <div className={`itemlayout402`}>
                                                    <p>{item?.total_agree}</p>
                                                </div>
                                            </div>

                                            <div className={`itemlayout40`}>
                                                <div
                                                    className={`itemlayout401`}
                                                    onClick={() => disLikePost(item?.id)}
                                                >
                                                    <BsHandThumbsDownFill/>
                                                </div>
                                                <div className={`itemlayout402`}>
                                                    <p>{item?.total_disagree}</p>
                                                </div>
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
                                    {/*{singlepage && (*/}
                                    {/*    <div className={"profilecommentbox"}>*/}
                                    {/*        <ProfileCommentBox ProfilePics={ProfilePic}/>*/}
                                    {/*    </div>*/}
                                    {/*)}*/}

                                    {/*{!item.comments ? (*/}
                                    {/*    messageBox &&*/}
                                    {/*    keyMain === pic &&*/}
                                    {/*    MessageBox && (*/}
                                    {/*        <div>*/}
                                    {/*            <div className={"messagecommentbox"}>*/}
                                    {/*                <MessageBox ProfilePics={ProfilePic}/>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    )*/}
                                    {/*) : (*/}
                                    {/*    <div>*/}
                                    {/*        <div>*/}
                                    {/*            <MessageBox ProfilePics={ProfilePic}/>*/}
                                    {/*        </div>*/}
                                    {/*        <FlexCenterSubHeader*/}
                                    {/*            details={"most relevant"}*/}
                                    {/*            selectItem={selectItem}*/}
                                    {/*            width={"70%"}*/}
                                    {/*        />*/}
                                    {/*        /!*{item?.comments?.map((item, key) => (*!/*/}
                                    {/*        /!*    <Comments key={key} Comments={item}/>*!/*/}
                                    {/*        /!*))}*!/*/}
                                    {/*    </div>*/}
                                    {/*)}*/}
                                </div>
                            </div>
                        </div>
                    ))}
                {/*</InfiniteScroll>*/}

        </FlexCenterBodyStyles>
    );
};

export default withTheme(FlexCenterBody);
