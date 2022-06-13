import PhoteIcon from "../../../asset/Icons/image_black.svg";

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
      {
        value: "private",
        classname: "select_class",
      },
      {
        value: "multiple",
        classname: "select_class",
      },
    ],
    classbody: "inputbody",
    classname: "input",
    labelclassname: "labelclass",
  },
  {
    type: "file",
    image: PhoteIcon,
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
