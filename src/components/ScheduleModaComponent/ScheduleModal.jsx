
import Modal from 'react-modal';
import './Modals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import CalendarToSelect from '../CalendarToSelectComponent/CalendarToSelect';


const ScheduleModal = ({ onScheduleChange, isOpen, onRequestClose }) => {


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
            <a onClick={onRequestClose} className="modal-close-icon">
              <FontAwesomeIcon icon={faX} />
            </a>
            <h2>Selecciona el horario de la asignatura</h2>
            <CalendarToSelect onScheduleChange={onScheduleChange} />
          </div>
        </section>
      </Modal>
    </>
  );
}

export default ScheduleModal;
