import {
  ButtonOpenModal,
  Modal,
  ModalContent,
} from '../../../components/_ui/Modal';

export const ModalServiceTerms = () => {
  return (
    <Modal>
      <ButtonOpenModal>
        By signing up, you agree to our{' '}
        <strong>Terms of Service and Privacy Policies</strong> and receive
        notice of events and services.
      </ButtonOpenModal>
      <ModalContent title="Our terms">
        <h4 style={{ marginTop: 8 }}> BoxHub Code of Conduct</h4>
        <p>
          It is intended to be a welcoming application where people meet in a friendly environment. Therefore, we expect all participants to show respect and courtesy to others. 
          To make it clear what is expected, all participants, members, exhibitors, organizers and volunteers are required to comply with this Code of Conduct. In short, BoxHub is dedicated 
          to providing a harassment-free experience for all people, regardless of gender identity, sex, sexual orientation, disability, physical appearance, body size, race or religion. 
          We do not tolerate harassment of training participants in any way.
        </p>

        <p>
          Sexual content and images are not appropriate at any time. Be kind to others. Do not insult or discourage other participants. 
          Behave professionally. Do not post photos of others without their consent. Remember that harassment jokes, gender identity, sexism, racism and exclusion are not appropriate. 
          Members who violate these rules may be sanctioned or expelled at the discretion of the administrators.
        </p>
      </ModalContent>
    </Modal>
  );
};
