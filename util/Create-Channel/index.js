import { MdAddPhotoAlternate } from "react-icons/md";

export const CreateChannelArray = [
  {
    multiple_input: [
      {
        label: "Channel name",
        type: "text",
        name: "title",
        placeholder: "Enter the name of your channel",
        classbody: "inputbody",
        classname: "multiple-input",
        labelclassname: "labelclass",
      },
      {
        label: "Select Channel Type",
        select: "Select",
        select_name: "channel_content_type_id",
        option: [
          {
            value: "Select content",
            classname: "select_class",
          },
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
        name: "description",
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
        select_name: "channel_type_id",
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
    image: MdAddPhotoAlternate,
    file_text: "Photo or Video",
    label: "Add a picture or video",
    name: "file",
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
