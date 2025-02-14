import 'cropperjs/dist/cropper.css'

import { Container, Dropzone, Preview } from './styles'
import { useEffect, useState } from 'react'

import { Button } from '../../_ui/Button'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'

interface UploadPhotoWithCropProps {
  url?: any
}

export const UploadPhoto = ({ url }: UploadPhotoWithCropProps) => {
  const [files, setFiles] = useState<File[]>([])
  const [urlImage, setUrlImage] = useState('')

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      maxFiles: 1,
      onDrop: (acceptedFiles: File[]) => {
        const reader = new FileReader()
        reader.onload = () => {
          setUrlImage(reader.result as any)
        }
        reader.readAsDataURL(acceptedFiles[0])
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            }),
          ),
        )
      },
    })

  const thumbNinePreview = files.map((file: any, index: number) => (
    <Preview key={index}>
      <Image width={200} height={200} src={file.preview} alt="profile" />
    </Preview>
  ))

  useEffect(() => {
    if (urlImage) {
      url(urlImage)
    }
  }, [urlImage])
  return (
    <Container>
      <Dropzone {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {isDragAccept && <p>Soltar</p>}
        {isDragReject && <p>Por favor enviar apenas um arquivo!</p>}
        {thumbNinePreview.length >= 1 ? (
          <Button typeButton="tertiary" type="button">
            Escolher outra
          </Button>
        ) : (
          <Button typeButton="tertiary" type="button">
            Adicionar foto
          </Button>
        )}
      </Dropzone>
    </Container>
  )
}
