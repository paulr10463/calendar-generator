import { useState } from "react";
import ScheduleModal from "./ScheduleModal";
import '../styles/AddscheduleButton.css'

const AddScheduleButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <input onClick={() => setIsModalOpen(true)} className="SelectScheduleButton" type="button" value="Elegir horario..."></input>
            <ScheduleModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
        </>
    )
};

export default AddScheduleButton;

