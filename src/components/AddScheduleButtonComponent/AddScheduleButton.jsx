import { useState } from "react";
import ScheduleModal from "../ScheduleModaComponent/ScheduleModal";
import './AddscheduleButton.css'

export default function AddScheduleButton({ onScheduleChange }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <input onClick={() => setIsModalOpen(true)} className="SelectScheduleButton" type="button" value="Elegir horario..."></input>
            <ScheduleModal onScheduleChange={onScheduleChange} isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
        </>
    )
}


