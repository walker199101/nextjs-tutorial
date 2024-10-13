// components/CKEditor.js
import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const MyEditor = ({ initialData, onChange }) => {

  return (
    <div>
      <h2>CKEditor in Next.js</h2>
      <CKEditor
        editor={ClassicEditor}
        data={initialData}
        onChange={(event, editor) => {
          const data = editor.getData()
          onChange(data)
        }}
      />
    </div>
  )
}

export default MyEditor