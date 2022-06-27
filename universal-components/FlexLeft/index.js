import React from "react";
import {withTheme} from "styled-components";
import {FlexLeftStyle} from "./flex.style";

const FlexLeftBody = ({FlexLeftArray, theme: {Color}}) => {
    console.log(FlexLeftArray,"fromLeft/Index")
    return (
        <FlexLeftStyle Color={Color}>

            <div className={`firstbody`}>
                <div className={`firstclass`}>
                    <h3 className={`firsttitem`}>
                        Channel Activity
                    </h3>
                </div>
                <div className={`firstclasssecond`}>
                    <div className={'profileclass'}>
                        <p className={`profileitem`}>Channel Members</p>
                        <p className={"profile-count"}>{FlexLeftArray?.data?.user_channel_count}</p>
                    </div>
                    <div className={'profileclass'}>
                        <p className={`profileitem`}>Engagement of post</p>
                        <p className={"profile-count"}>{FlexLeftArray?.total_channel_enagement}</p>
                    </div>
                    <div className={'profileclass'}>
                        <p className={`profileitem`}>Amount of post</p>
                        <p className={"profile-count"}>{FlexLeftArray?.data?.post_count}</p>
                    </div>
                </div>

            </div>


        </FlexLeftStyle>
    );
};
// const Profile = ({ FlexLeftArray, user,theme: { Color } }) => {
//   return (
//     <FlexLeftStyle Color={Color}>
//       {FlexLeftArray?.data?.map((item, key) => (
//         <div key={key} className={`firstflexleft`}>
//           {/*{item.section.map((item, key) => (*/}
//             <div key={key} className={`firstbody`}>
//               {item.profile && (
//                 <div className={`${item.profileclassname}`}>
//                   <ProfileDiv
//                     profile_image={item.profile_image}
//                     profile_name={user?.name}
//                   />
//                 </div>
//               )}
//               <div className={`${item.classnamefirst}`}>
//                 <h3 className={`${item.classitemfirst}`}>
//                   {item.title}
//                   {item.num && `(${item.num})`}
//                 </h3>
//               </div>
//               <div className={`${item.classnamesubsecond}`}>
//                 <h3 className={`${item.classitemsubsecond}`}>
//                   {item.subtitle}
//                 </h3>
//               </div>
//               <div className={`${item.classnamesecond}`}>
//                 {item.post
//                   ? item.post.map((item, key) => (
//                       <div key={key} className={`${item.classname}`}>
//                         <p className={`${item.classitem}`}>{item.title}</p>
//                         <p className={"profile-count"}>{item.count}</p>
//                       </div>
//                     ))
//                   : item.image && (
//                       <div className={`${item.classitemsecond}`}>
//                         <Image
//                           src={item.image}
//                           alt={item.imagetitle}
//                           className={"image"}
//                           width={"186px"}
//                           height={"102px"}
//                           priority={true}
//                         />
//                       </div>
//                     )}
//               </div>
//               <div className={`${item.classnamethird}`}>
//                 <p className={`${item.classitemthird}`}>{item.footertitle}</p>
//               </div>
//               {item.button && (
//                 <div className={"profile_button"}>
//                   <button>{item.button_name}</button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ))}
//     </FlexLeftStyle>
//   );
// };
export const SideProfile=({user})=>{
return(
    <div  className={`firstbody`}>
        {user && (
            <div className={`profileclass`}>
                <div className={`${item.classnamefirst}`}><h3 className={`${item.classitemfirst}`}>{item.title}{item.num && `(${item.num})`}
                </h3></div>
                <div className={`${item.classnamesubsecond}`}>
                    <h3 className={`${item.classitemsubsecond}`}>
                        {item.subtitle}
                    </h3>
                </div>
            </div>
        )}
    </div>
)
}

export default withTheme(FlexLeftBody);
