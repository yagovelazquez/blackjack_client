
import LoadingSpinner from './LoadingSpinner';
import Modal from '../modal/Modal';

const LoadingSpinnerModal = ({ isLoading }) => {
  return (
    <Modal
      isModal={isLoading}
    >
      <div className="z-50">
        <LoadingSpinner />
      </div>
    </Modal>
  );
};

export default LoadingSpinnerModal;
