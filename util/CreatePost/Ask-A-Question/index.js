import PhoteIcon from "../../../asset/Icons/image_black.svg";

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
    image: PhoteIcon,
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
