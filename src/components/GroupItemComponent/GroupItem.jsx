import './GroupItem.css'
import AddScheduleButton from '../AddScheduleButtonComponent/AddScheduleButton'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAllSubjectsContext } from '../../contexts/AllSubjectsContext'
import { useEffect, useState } from 'react'

import { useGroupContext } from '../../contexts/GroupContext'
export default function GroupItem({ subjectIndex, groupIndex, group }) {
  const { subjects, setSubjects } = useAllSubjectsContext();
  const [selectedValue, setSelectedValue] = useState("GR1");
  const GRNames = ["GR1", "GR2", "GR3", "GR4", "GR5", "GR6", "GR7", "GR8", "GR9", "GR10"];
  const { subjectIndexC, setSubjectIndexC, groupIndexC, setGroupIndexC } = useGroupContext();

  const onGRValueSelected = (e) => {
    console.log(subjectIndex)
    console.log(groupIndex)

    const GRValue = e.target.value;
    setSelectedValue(GRValue);
  }

  const changeScheduleMatrix = (newMatrix) => {
    setScheduleMatrix(newMatrix);
  }

  useEffect(() => {
    setSubjectIndexC(subjectIndex);
    setGroupIndexC(groupIndex);
  }, []);
  
  useEffect(() => {
    const newSubjects = [...subjects];
    // Actualizar el nombre del grupo en la copia del array
    if (newSubjects[subjectIndex] && newSubjects[subjectIndex].groups[groupIndex]) {
      newSubjects[subjectIndex].groups[groupIndex].name = selectedValue;
    }
      setSubjects(newSubjects);
    }, [selectedValue]);

    /*useEffect(() => {
      const newSubjects = [...subjects];
      // Actualizar la matriz de horarios en la copia del array
      if (newSubjects[subjectIndex] && newSubjects[subjectIndex].groups[groupIndex]) {
        newSubjects[subjectIndex].groups[groupIndex].scheduleMatrix = scheduleMatrix;
      }
      setSubjects(newSubjects);
    }, [scheduleMatrix]);*/

  const onDeleteButton = () => {
    subjects[subjectIndex].groups.splice(groupIndex, 1);
    console.log(subjects[subjectIndex].groups);
    setSubjects([...subjects]);
  }

  return (
    
      <div className="GroupItem">
        <AddScheduleButton/>
        <select onChange={onGRValueSelected} value={selectedValue} className='GroupSelector'>
          {GRNames.map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
        <button onClick={onDeleteButton} className="TrashButton">
          <FontAwesomeIcon
            className="TrashIcon"
            icon={faTrash}
          />
        </button>
      </div>
    
  );
}

