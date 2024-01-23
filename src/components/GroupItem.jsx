import '../styles/GroupItem.css'
import AddScheduleButton from './AddScheduleButton'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GroupSelector from './GroupSelect'
import Schedule from '../classes/Schedule'

function GroupItem({ group, onDeleteButton }) {
    const schedule = new Schedule();
    function setGroupName(name) {
        group.name = name;
    }
    function setSchedule(schedule) {
        group.schedule = schedule;
    }
    
    return (
        <div className="GroupItem">
            <button onClick={() => { console.log(group) }}></button>
            <GroupSelector initialGroupName={group.Name} onSetGroupName={setGroupName} />
            <AddScheduleButton onScheduleChange={setSchedule} />
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
