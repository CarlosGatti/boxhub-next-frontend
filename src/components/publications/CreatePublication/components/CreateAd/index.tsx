import {
  AddToPublication,
  Avatar,
  Container,
  EmojiButton,
  Image,
  InfoAuthor,
  InputTitle,
  InsertButton,
  Name,
  Textarea,
  WrapperAddAttach,
  WrapperAttach,
  WrapperPreview,
  WrapperTextarea,
  WrapperThumbNinePreview,
} from './styles'
import { AiOutlineFile, AiOutlineGif, AiOutlineUser } from 'react-icons/ai'
import { useEffect, useState } from 'react'

import { BsCameraVideo } from 'react-icons/bs'
import { Button } from '../../../../../components/_ui/Button'
import { CgSmileMouthOpen } from 'react-icons/cg'
import EmojiPicker from 'emoji-picker-react'
import { FiTrash2 } from 'react-icons/fi'
import { IoAddCircleOutline } from 'react-icons/io5'
import { RiImage2Line } from 'react-icons/ri'
import { useDropzone } from 'react-dropzone'

interface CreatePostProps {
  avatarAuthor: string
  nameAuthor: string
}

export function CreateAd({ avatarAuthor, nameAuthor }: CreatePostProps) {
  const [messageTextarea, setMessageTextarea] = useState('')
  const [showPicker, setShowPicker] = useState(false)

  const [isAttach, setIsAttach] = useState('')
  const [files, setFiles] = useState<File[]>([])

  // const [dataPublication, setDataPublication] = useState({})

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      Array.prototype.push.apply(acceptedFiles, files)
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
    },
  })
  const togglePicker = () => {
    setShowPicker(!showPicker)
  }

  const onEmojiClick = (emojiObject: { emoji: string }) => {
    setMessageTextarea(messageTextarea + emojiObject.emoji)
  }

  const handleAttach = (e: string) => {
    setIsAttach(e)
  }

  // useEffect(() => {
  //   setDataPublication({ messageTextarea, files })
  // }, [messageTextarea, files])

  const removeFile = (file: any) => () => {
    const newFiles = [...files]
    newFiles.splice(newFiles.indexOf(file), 1)
    setFiles(newFiles)
  }

  const thumbNinePreview = files.map((file: any, index: number) => (
    <WrapperThumbNinePreview key={index}>
      <Image
        alt="selected"
        src={file.preview}
        onLoad={() => {
          URL.revokeObjectURL(file.preview)
        }}
      />
      <button onClick={removeFile(file)} aria-label="Excluir">
        <FiTrash2 />
      </button>
    </WrapperThumbNinePreview>
  ))

  useEffect(() => {
    return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <InfoAuthor>
        <Avatar
          width={48}
          height={48}
          src={avatarAuthor}
          alt="Avatar do Autor do Post"
        />
        <Name>
          <strong>{nameAuthor}</strong>
        </Name>
      </InfoAuthor>
      <WrapperTextarea>
        <InputTitle placeholder={`Dê um título para seu anúncio.`} />
        <Textarea
          value={messageTextarea}
          onChange={(e) => setMessageTextarea(e.target.value)}
          placeholder={`Escreva seu anúncio!`}
        />
        {showPicker && <EmojiPicker width="100%" onEmojiClick={onEmojiClick} />}
        <EmojiButton onClick={togglePicker}>
          <CgSmileMouthOpen
            style={{ color: showPicker ? 'var(--color-primary)' : '' }}
          />
        </EmojiButton>
      </WrapperTextarea>

      <WrapperPreview multiplesThumNine={thumbNinePreview.length > 1}>
        {thumbNinePreview}
      </WrapperPreview>

      <WrapperAttach>
        {isAttach && (
          <WrapperAddAttach {...getRootProps()}>
            <input {...getInputProps()} />
            {!isDragActive ? (
              <>
                <IoAddCircleOutline />
                <span>{isAttach}</span>
              </>
            ) : (
              ''
            )}
          </WrapperAddAttach>
        )}

        <AddToPublication>
          <span>Add Post</span>
          <InsertButton
            onClick={() => handleAttach('Adicionar fotos')}
            arial-aria-label="anexar imagem"
          >
            <RiImage2Line />
          </InsertButton>

          <InsertButton
            onClick={() => handleAttach('Adicionar vídeos')}
            arial-aria-label="anexar vídeo"
          >
            <BsCameraVideo />
          </InsertButton>
          <InsertButton arial-aria-label="anexar gif">
            <AiOutlineGif />
          </InsertButton>
          <InsertButton arial-aria-label="anexar arquivo">
            <AiOutlineFile />
          </InsertButton>
          <InsertButton arial-aria-label="marcar usuário">
            <AiOutlineUser />
          </InsertButton>
        </AddToPublication>
        <Button
          type="submit"
          /* value={value.id} */
          buttonStyle={{ minHeight: 42, width: '100%' }}
          isLoading={false}
          /*  isDisabled={true} */
        >
          Publicação
        </Button>
      </WrapperAttach>
    </Container>
  )
}
