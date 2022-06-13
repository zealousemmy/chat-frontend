import PhoteIcon from "../../../asset/Icons/image_black.svg";

export const AskAQuestionChannelArray = [
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
    label: "Select Channel Type",
    select: "Select",
    name: "channel type",
    classbody: "inputbody",
    classname: "input",
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
