import { useState } from "react";
import ScheduleModal from "./ScheduleModal";
import '../styles/AddscheduleButton.css'

export default function AddScheduleButton({onScheduleChange}){

    const [isModalOpen, setIsModalOpen] = useState(false);

    
    return (
        <>
            <input onClick={() => setIsModalOpen(true)} className="SelectScheduleButton" type="button" value="Elegir horario..."></input>
            <ScheduleModal onScheduleChange={onScheduleChange} isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
        </>
    )
}


