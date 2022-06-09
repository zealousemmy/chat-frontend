import PhoteIcon from "../../../asset/Icons/image_black.svg";

export const NormalPostArray = [
  {
    type: "text",
    name: "full name",
    placeholder: "Write the title of your post",
    classbody: "inputbody",
    classname: "input",
  },
  {
    description: "post",
    name: "post",
    placeholder: "Post content",
    classbody: "inputbody",
    classname: "input",
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
