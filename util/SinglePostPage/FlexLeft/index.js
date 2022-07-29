import ImageView from "../../../asset/images/imageview.svg";
import Profile_Image from "../../../asset/images/profile.png";

export const SinglePostCenter = [
  {
    classname: "profile",
    section: [
      {
        profile: "profilepage",
        profile_image: Profile_Image,
        profile_name: "King Benjamin",
        classbody: "profiletbody",
        profileclassname: "profileclass",
        classnamesecond: "profileclasssecond",
        button: "buttonfiled",
        button_name: "View full profile",
        post: [
          {
            title: "Channels you have joined",
            count: 9,
            classname: "profileflextleftclass",
            classitem: "profileflexleftitem",
          },
          {
            title: "Impressions of your post",
            count: 210,
            classname: "profileflextleftclass",
            classitem: "profileflexleftitem",
          },
        ],
      },
    ],
  },
  {
    classname: "secondflexleft",
    section: [
      {
        title: "Abolle Community",
        image: ImageView,
        imagetitle: "image overview",
        footertitle: "Join abolle community and be part of the conversation",
        classbody: "secondflexleftbody",
        classnamefirst: "secondflexleftclass",
        classitemfirst: "secondflexleftitem",
        classnamesecond: "secondflexleftclasssecond",
        classitemsecond: "secondflexleftitemsecond",
        classnamethird: "secondflexleftclassthird",
        classitemthird: "secondflexleftitemthird",
      },
    ],
  },
];
