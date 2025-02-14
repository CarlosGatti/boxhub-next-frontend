import { Modal, ModalContent } from '../../../components/_ui/Modal'

interface ImageModalProps {
  src: string
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export const ImageModal = ({ src, isOpen, onOpenChange }: ImageModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent
        styleModal={{
          width: '100%',
          maxWidth: '800px',
          height: '600px',
          backgroundImage: `url(${src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></ModalContent>
    </Modal>
  )
}
