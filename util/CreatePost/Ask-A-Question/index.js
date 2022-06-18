import { MdAddPhotoAlternate } from "react-icons/md";

export const AskAQuestionArray = [
  {
    type: "text",
    name: "full name",
    placeholder: "Write your question here",
    classbody: "inputbody",
    classname: "input",
  },
  {
    description: "question",
    name: "full name",
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
    value: "Ask Question",
    classbody: "submitbody",
    classname: "submit",
  },
];
