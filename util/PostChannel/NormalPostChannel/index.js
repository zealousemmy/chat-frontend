import { MdAddPhotoAlternate } from "react-icons/md";

export const NormalPostchannelArray = [
  {
    description: "post",
    name: "post",
    cols: 10,
    rows: 8,
    placeholder: "Post content",
    classbody: "inputbody",
    classname: "input",
  },
  {
    label: "Select Channel Type",
    select: "Select",
    name: "channel type",
    option: [
      {
        value: "Select the channel you want to post to",
        classname: "select_class",
      },

    ],
    classbody: "inputbody",
    classname: "input",
    labelclassname: "labelclass",
  },
  {
    type: "file",
    image: MdAddPhotoAlternate,
    file_text: "Photo or Video",
    label: "Add a picture or video",
    name: "Photo or video",
    classbody: "filebody",
    classname: "fileinput",
  },
  {
    type: "submit",
    value: "Create Post",
    classbody: "submitbody",
    classname: "submit",
  },
];
