// components/CKEditor.js
import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const MyEditor = () => {
  const [editorData, setEditorData] = useState('')

  return (
    <div>
      <h2>CKEditor in Next.js</h2>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={(event, editor) => {
          const data = editor.getData()
          setEditorData(data)
        }}
      />
      <div>
        <h3>Editor Content</h3>
        <div>{editorData}</div>
      </div>
    </div>
  )
}

export default MyEditor