import React from 'react'
import { Form } from 'react-bootstrap'

export const ImageUpload = ({ useFoto }) => {
  const [selectedFile, setSelectedFile] = useFoto
  //   const [preview, setPreview] = useState()
  //   useEffect(() => {
  //     // if (!selectedFile) {
  //     //   setPreview(undefined)
  //     //   return
  //     // }

  //     // const objectUrl = URL.createObjectURL(selectedFile)
  //     // setPreview(objectUrl)

  //     // free memory when ever this component is unmounted
  //     return () => URL.revokeObjectURL(objectUrl)
  //   }, [selectedFile])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }

  return (
    <Form.Group className='mb-3'>
      <Form.Control type='file' name='file' onChange={onSelectFile} />
    </Form.Group>
  )
}
