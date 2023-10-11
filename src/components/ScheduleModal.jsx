
import Modal from 'react-modal';
import '../styles/modals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import CalendarToSelect from './CalendarToSelect';


const ScheduleModal =  ({isOpen, onRequestClose }) => {

  const openModal = () => {
    onRequestClose();
  };

  const customStyles = {
    overlay: {
      zIndex: 1000, // Ajusta este valor según sea necesario
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Ejemplo Modal"
      >
        <section>
          <div className="modal-content">
            <a onClick={onRequestClose} className="modal-close-icon"><FontAwesomeIcon icon={faX} /></a>
            <h2>Selecciona el horario de la asignatura</h2>
            <CalendarToSelect />
          </div>
        </section>
      </Modal>
    </>
  );
}

export default ScheduleModal;
