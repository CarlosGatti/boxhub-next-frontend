import { ButtonOpenModal, Modal } from '../../../components/_ui/Modal'

import { BtnShowMore } from '../Post/styles'
import { CommentCard } from '../Comment'
import { ModalBody } from './styles'
import { TimelineQuery } from '../../../generated/graphql'

interface CommentsModalProps {
  publication: TimelineQuery['timeline']['publications'][number]
}

export const CommentsModal = ({ publication }: CommentsModalProps) => {
  return (
    <Modal>
      <ButtonOpenModal
        style={{
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            paddingBottom: '20px',
          }}
        >
          <BtnShowMore style={{ position: 'inherit', paddingRight: '0px' }}>
            Ver mais
          </BtnShowMore>
        </div>
      </ButtonOpenModal>
      <ModalBody
        styleModal={{ backgroundColor: '#F4F3F6', height: '70vh' }}
        title="Comentários"
      >
        {publication?.comments?.map((value, index) => (
          <div key={index} style={{ padding: 16 }}>
            <CommentCard
              user={value.user}
              comment={value}
              // iconDelete={
              //   value.user.id === Number(currentUser?.id) ||
              //   publication.user?.id === Number(currentUser?.id)
              // }
              //  editComent={(e) => handleEditComment(e.target.value)}
              // deleteComment={() => deleteCommentPublication(value.id)}
            />
          </div>
        ))}
      </ModalBody>
    </Modal>
  )
}
