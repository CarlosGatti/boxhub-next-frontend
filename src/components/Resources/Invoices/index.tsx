import {
  Dropzone,
  IconNFe,
  InfoNote,
  NoteSent,
  Preview,
  TitleNotesSent,
  WrapperAddAttach,
  WrapperNotesSent,
} from './styles'

import { Button } from '../../_ui/Button'
import { ContainerMain } from '../containerMain'
import { DownloadButton } from '../../_ui/ButtonIcon/Download'
import { FiTrash2 } from 'react-icons/fi'
import { RiFileUploadLine } from 'react-icons/ri'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react'

export const Invoices = () => {
  const [files, setFiles] = useState<File[]>([])

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      maxFiles: 1,

      // accept: "image/*",
      onDrop: (acceptedFiles: File[]) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            }),
          ),
        )
      },
    })

  const removeFile = (file: any) => () => {
    const newFiles = [...files]
    newFiles.splice(newFiles.indexOf(file), 1)
    setFiles(newFiles)
  }

  const thumbNinePreview = files.map((file: any, index: number) => (
    <Preview key={index}>
      <p>{file.name}</p>
      <button onClick={removeFile(file)} aria-label="Excluir">
        <FiTrash2 />
      </button>
    </Preview>
  ))
  return (
    <ContainerMain title="Upload Invoice">
      <WrapperAddAttach>
        {thumbNinePreview.length >= 1 ? (
          <>
            {thumbNinePreview}
            <Button>Salvar NFe</Button>
          </>
        ) : (
          <Dropzone {...getRootProps({ className: 'dropzone' })}>
            <div></div>
            <input {...getInputProps()} />
            {isDragAccept && <p>Drop</p>}
            {isDragReject && <p>Please send just one file!</p>}
            {/*   {!isDragActive && <RiFileUploadLine />} */}
            <RiFileUploadLine />
            <Button>Upload Invoice</Button>
          </Dropzone>
        )}
      </WrapperAddAttach>

      <WrapperNotesSent>
        <TitleNotesSent>Notas enviadas</TitleNotesSent>

        <NoteSent>
          <div>
            <IconNFe>NFe</IconNFe>
            <InfoNote>
              <p>NFe mês</p>
              <span>data</span>
            </InfoNote>
          </div>
          <DownloadButton description="download nota fiscal" />
        </NoteSent>

        <NoteSent>
          <div>
            <IconNFe>NFe</IconNFe>
            <InfoNote>
              <p>NFe mês</p>
              <span>data</span>
            </InfoNote>
          </div>
          <DownloadButton description="download nota fiscal" />
        </NoteSent>
      </WrapperNotesSent>
    </ContainerMain>
  )
}
