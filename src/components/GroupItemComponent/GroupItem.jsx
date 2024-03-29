import './GroupItem.css'
import AddScheduleButton from '../AddScheduleButtonComponent/AddScheduleButton'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAllSubjectsContext } from '../../contexts/AllSubjectsContext'
import { useEffect, useState } from 'react'

function GroupSelector({ initialGroupName, onSetGroupName }) {
  const onValueSelected = (e) => {
    onSetGroupName(e.target.value);
  }

  const [selectedValue, setSelectedValue] = useState(initialGroupName);

  const groups = ["GR1", "GR2", "GR3", "GR4", "GR5", "GR6", "GR7", "GR8", "GR9", "GR10"];

  return (
    <select onChange={onValueSelected} value={selectedValue} className='GroupSelector'>
      {groups.map((value) => (
        <option key={value} value={value}>{value}</option>
      ))}
    </select>
  );
}

export default function GroupItem({ subjectIndex, groupIndex, group }) {
  const { subjects, setSubjects } = useAllSubjectsContext();
  const actualGroup = subjects[subjectIndex].groups[groupIndex];

  useEffect(() => {
    console.log("GroupItem useEffect");
  }, [actualGroup, group]);
  
  const subject = subjects[subjectIndex];

  const onDeleteButton = () => {
    subjects[subjectIndex].groups.splice(groupIndex, 1);
    console.log(subjects[subjectIndex].groups);
    setSubjects([...subjects]);
  }
  
  return (
    <div className="GroupItem">
      <AddScheduleButton onScheduleChange={() => { }} />
      <GroupSelector initialGroupName={subject.name!=undefined&&subject.name} onSetGroupName={() => { }} />
      <button onClick={onDeleteButton} className="TrashButton">
        <FontAwesomeIcon
          className="TrashIcon"
          icon={faTrash}
        />
      </button>
    </div>
  );
}

