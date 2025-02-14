import {
  AddToPublication,
  Avatar,
  Container,
  EmojiButton,
  Image,
  InfoAuthor,
  InsertButton,
  Name,
  Textarea,
  WrapperAddAttach,
  WrapperAttach,
  WrapperPreview,
  WrapperTextarea,
  WrapperThumbNinePreview,
} from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from '../../../../../components/_ui/Button'
import { Carousel } from 'react-responsive-carousel'
import { CgSmileMouthOpen } from 'react-icons/cg'
import EmojiPicker from 'emoji-picker-react'
import { FiTrash2 } from 'react-icons/fi'
import { IoAddCircleOutline } from 'react-icons/io5'
import { Pagination } from 'swiper'
import { RiImage2Line } from 'react-icons/ri'
import { convertBase64 } from '../../../../../utils/functions'
import graphqlRequestClient from '../../../../../lib/graphql.request'
import { toast } from 'react-toastify'
import { uploadImages } from '../../../../../lib/imgBB'
import { useCreatePublicationMutation } from '../../../../../generated/graphql'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react'
import { useTimeline } from '../../../../../context/TimelineContext'

interface CreatePostProps {
  idAuthor: string
  avatarAuthor: string
  nameAuthor: string
  cancelPublication: () => void
  idCommunity?: number | null
  communityId?: number
}

export function CreatePost({
  avatarAuthor,
  nameAuthor,
  cancelPublication,
  communityId,
}: CreatePostProps) {
  const [messageTextArea, setMessageTextArea] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const [isAttach, setIsAttach] = useState('')
  const [files, setFiles] = useState<File[]>([])

  const { mutate: createPublication } =
    useCreatePublicationMutation(graphqlRequestClient)

  const [isLoadingCreatePublication, setIsLoadingCreatePublication] =
    useState(false)

  const { refetchTimeline } = useTimeline()

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

  const onEmojiClick = (emojiObject: any) => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    setMessageTextArea(messageTextArea + emojiObject.emoji)
  }

  const handleAttach = (e: string) => {
    setIsAttach(e)
  }

  const removeFile = (file: any) => () => {
    console.log('remove')
    const newFiles = [...files]
    newFiles.splice(newFiles.indexOf(file), 1)
    setFiles(newFiles)
  }

  const onSubmit = async () => {
    try {
      let medias = ''
      const imagesArr = [] as string[]
      setIsLoadingCreatePublication(true)

      for (const file of files) {
        await convertBase64(file)
          .then((res) => (medias = res as string))
          .catch((err) => console.log(err))
        await uploadImages(medias).then((res) => {
          imagesArr.push(res.data.url)
        })
      }

      createPublication(
        {
          data: {
            description: messageTextArea,
            communityId,
            images: imagesArr,
          },
        },
        {
          onSuccess(data) {
            if (data.createPublication.success) {
              setMessageTextArea('')
              setFiles([])
              cancelPublication()
              refetchTimeline()
              toast.success('Post created successfully!')
            }
            setIsLoadingCreatePublication(false)
          },
        },
      )
    } catch {
      setIsLoadingCreatePublication(false)
      toast.error('Error publishing the post! Try again.')
    }
  }
  return (
    <Container>
      <InfoAuthor>
        <Avatar
          width={48}
          height={48}
          src={avatarAuthor}
          alt="Post Author Avatar"
        />
        <Name>
          <strong>{nameAuthor}</strong>
        </Name>
      </InfoAuthor>
      <WrapperTextarea>
        <Textarea
          style={{ maxWidth: 'inherit' }}
          value={messageTextArea}
          onChange={(e) => setMessageTextArea(e.target.value)}
          placeholder="O que você está pensando hoje?"
          autoFocus
        />
        {showPicker && <EmojiPicker width="100%" onEmojiClick={onEmojiClick} />}
        <EmojiButton onClick={togglePicker}>
          <CgSmileMouthOpen
            style={{ color: showPicker ? 'var(--color-primary)' : '' }}
          />
        </EmojiButton>
      </WrapperTextarea>
      <WrapperPreview>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
          >
            {files.map((file: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <WrapperThumbNinePreview>
                    <Image
                      width={578}
                      height={350}
                      alt="selected"
                      src={file.preview}
                    />
                    <button onClick={removeFile(file)} aria-label="Excluir">
                      <FiTrash2 />
                    </button>
                  </WrapperThumbNinePreview>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        <Carousel showArrows={false} showStatus={false}></Carousel>
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
          <div>
            <InsertButton
              onClick={() => handleAttach('Adicionar fotos')}
              arial-aria-label="anexar imagem"
              title="anexar imagem"
            >
              <RiImage2Line />
            </InsertButton>
          </div>
        </AddToPublication>
        <Button
          type="submit"
          /* value={value.id} */
          buttonStyle={{ minHeight: 42, width: '100%' }}
          isLoading={isLoadingCreatePublication}
          onClick={onSubmit}
          isDisabled={messageTextArea.length === 0}
        >
          Publish
        </Button>
      </WrapperAttach>
    </Container>
  )
}
