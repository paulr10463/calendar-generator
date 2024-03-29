import './GroupItem.css'
import AddScheduleButton from '../AddScheduleButtonComponent/AddScheduleButton'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAllSubjectsContext } from '../../contexts/AllSubjectsContext'
import { useState } from 'react'

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

function GroupItem({ group, onDeleteButton }) {
    //console.log("GroupIndex: "+ groupIndex)
    const { subjects, setSubjects } = useAllSubjectsContext();

    const group = subjects[subjectIndex].groups[groupIndex];
    setSubjects([...subjects]);
    /**
      <button onClick={() => { console.log(group) }}>ASDA</button>
     */
    return (
        <div className="GroupItem">
            <AddScheduleButton onScheduleChange={()=>{}} />
            <GroupSelector initialGroupName={"GR"} onSetGroupName={()=>{}} />
            <button onClick={onDeleteButton} className="TrashButton">
                <FontAwesomeIcon
                    className="TrashIcon"
                    icon={faTrash}
                />
            </button>
        </div>
    )
}

export default GroupItem;
