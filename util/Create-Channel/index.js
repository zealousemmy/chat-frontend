import PhoteIcon from "../../asset/Icons/image_black.svg";

export const CreateChannelArray = [
  {
    multiple_input: [
      {
        label: "Channel name",
        type: "text",
        name: "channel name",
        placeholder: "Enter the name of your channel",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
      },
      {
        label: "Select Channel Type",
        select: "Select",
        name: "channel type",
        option: [
          {
            value: "public",
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
        classname: "multiple-input",
        labelclassname: "labelclass",
      },
    ],
  },
  {
    multiple_input: [
      {
        label: "Channel name",
        description: "textarea",
        name: "channel name",
        cols: 10,
        rows: 6,
        placeholder: "About the channel",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
      },
      {
        label: "Select Content Type",
        select: "Select",
        name: "channel type",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
        option: [
          {
            value: "Select your bank here",
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
      },
    ],
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
    value: "Create channel",
    classbody: "submitbody",
    classname: "submit",
  },
];
