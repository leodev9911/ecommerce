import { useState } from 'react'

export function useUploadImage () {
  const [file, setFile] = useState()
  const [imageUpload, setImageUpload] = useState()

  const uploadImage = (event) => {
    setImageUpload(URL.createObjectURL(event.target.files[0]))
    setFile(event.target.files)
  }

  return { file, imageUpload, uploadImage }
}
