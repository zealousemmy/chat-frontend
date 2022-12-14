import CheckList from "@editorjs/checklist";
import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Header from "@editorjs/header";

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  header: Header,
  list: List,
  linkTool: LinkTool,
  // image: {
  //   class: Image,
  //   config: {
  //     uploader: {
  //       uploadByFile(file) {
  //         let formData = new FormData();
  //         formData.append("images", file);
  //         // send image to server
  //         // return API.imageUpload(formData).then((res) => {
  //         //     // get the uploaded image path, pushing image path to image array
  //         //     imageArray.push(res.data.data)
  //         //     return {
  //         //         success: 1,
  //         //         file: {
  //         //             url: res.data.data
  //         //         }
  //         //     }
  //         // })
  //       },
  //     },
  //   },
  // },
  quote: Quote,
  checklist: CheckList,
  // delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};
