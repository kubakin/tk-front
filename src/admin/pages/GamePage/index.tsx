import AdminLayout from "../../components/Layout";
import {useEffect, useState} from "react";
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export const GamePage = () => {
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        setValue(editorRef.current.getContent())
        // console.log(editorRef.current.getContent());
      }
    };
    useEffect(()=> {
        console.log(editorRef?.current)
        setValue(editorRef?.current?.getContent())
    }, [editorRef?.current?.getContent(), editorRef.current, editorRef.current?.value])
    const [value, setValue] = useState('');
    return <AdminLayout>
        <Editor
        onEditorChange={(i,j)=> {
            setValue(i)
        }}
        apiKey="u87w6ua4zioy9w1rf6wtfqdxudtp7jwcrxvg23jis0mm4c60"
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue="<p>This is the initial content of the editor.</p>"
         init={{
           height: 500,
           menubar: true,
           plugins: [
             'image media video advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help media image',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
       <button onClick={log}>Log editor content</button>
                <div dangerouslySetInnerHTML={{__html: value}}/>
    </AdminLayout>
}