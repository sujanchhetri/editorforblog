import React from "react";
import "./Editor.css";
// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/third_party/embedly.min.js";
import "froala-editor/js/plugins/fullscreen.min.js";
import "froala-editor/js/plugins/code_view.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/third_party/embedly.min.css";
import "froala-editor/css/plugins/fullscreen.min.css";
import "froala-editor/css/plugins/code_view.min.css";

import "font-awesome/css/font-awesome.min.css";

import Froala from "froala-editor";
import FroalaEditor from "react-froala-wysiwyg";

const TextileEditor = () => {
    return (
      <div className="body-container">
        <FroalaEditor
          tag="textarea"
          config={{
            toolbarInline: true,
            attribution: false,
            placeholder: "Start typing...",
            toolbarButtons: {
              moreText: {
                buttons: [
                  "bold",
                  "italic",
                  "html",
                  "underline",
                  "strikeThrough",
                  "fontFamily",
                  "fontSize",
                  "textColor",
                  "backgroundColor",
                  "subscript",
                  "superscript",
                  "inlineClass",
                  "inlineStyle",
                  "clearFormatting"
                ],
                buttonsVisible: 5
              },
              moreParagraph: {
                buttons: [
                  "alignLeft",
                  "alignCenter",
                  "alignRight",
                  "alignJustify",
                  "formatOL",
                  "formatUL",
                  "paragraphFormat",
                  "paragraphStyle",
                  "lineHeight",
                  "outdent",
                  "indent",
                  "quote"
                ],
                buttonsVisible: 6
              },
              moreRich: {
                buttons: [
                  "insertLink",
                  "insertImage",
                  "insertVideo",
                  "insertTable",
                  "emoticons",
                  "fontAwesome",
                  "specialCharacters",
                  "embedly",
                  "insertFile",
                  "insertHR"
                ],
                buttonsVisible: 6
              }
            },
            pluginsEnabled: [
              "table",
              "spell",
              "quote",
              "save",
              "quickInsert",
              "paragraphFormat",
              "paragraphStyle",
              "help",
              "draggable",
              "align",
              "link",
              "lists",
              "file",
              "image",
              "emoticons",
              "url",
              "video",
              "embedly",
              "colors",
              "entities",
              "inlineClass",
              "inlineStyle",
              "imageTUI",
              "code"
            ]
          }}
        />
      </div>
    )
}

export default TextileEditor;
