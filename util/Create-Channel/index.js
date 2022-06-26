import { MdAddPhotoAlternate } from "react-icons/md";

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
        label: "Channel Description",
        description: "textarea",
        name: "description",
        cols: 10,
        rows: 6,
        placeholder: "Channel Description",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
      },
      {
        label: "Select Content Type",
        select: "Select",
        name: "channel_content_type_id",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
        option: [
          {
            value: "----select---",
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
    image: MdAddPhotoAlternate,
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
