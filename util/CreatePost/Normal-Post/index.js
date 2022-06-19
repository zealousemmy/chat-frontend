import { MdAddPhotoAlternate } from "react-icons/md";

export const NormalPostArray = [
  {
    type: "text",
    name: "normal post",
    placeholder: "Write the title of your post",
    classbody: "inputbody",
    classname: "input",
  },
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
