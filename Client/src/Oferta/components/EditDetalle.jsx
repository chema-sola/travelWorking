import { useState } from 'react'
import ReactQuill from 'react-quill'

export const EditDetalle = ({ trabajoActive }) => {
  const [title, setTitle] = useState(trabajoActive.titulo)

  return (
    <div>
      <h1>Título</h1>
      <input value={title} onChange={(e) => setFormValues(e.target.value)} />
    </div>
  )
}
