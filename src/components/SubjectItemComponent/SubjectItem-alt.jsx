
import { faAngleDown, faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Group from '../../classes/Models/Group'
import GroupItem from '../GroupItemComponent/GroupItem'
import { useState } from 'react'
import Subject from '../../classes/Models/Subject'
import { useAllSubjectsContext } from '../../contexts/AllSubjectsContext'

function SubjectItem({ name, subjectIndex }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [titleArrowIcon, setTitleArrowIcon] = useState(faAngleRight);
  const [groups, setGroups] = useState([]);
  const { subjects, setSubjects } = useAllSubjectsContext();
  const subject = subjects[subjectIndex];

  const AddGroup = () => {
    const newGroup = new Group("GR1");
    setGroups([...groups, newGroup]);
    setIsExpanded(true);
    setTitleArrowIcon(faAngleDown);
    subject.groups = groups;
  }

  const handleExpand = () => {
    if (isExpanded) {
      setTitleArrowIcon(faAngleRight);
    } else {
      setTitleArrowIcon(faAngleDown);
    }
    setIsExpanded(!isExpanded);
  }

  function onDeleteGroupItem(index) {
    const newGroups = [...groups];
    newGroups.splice(index, 1);
    setGroups(newGroups);
  }

  return (
    <div className="CourseItem">
      <div className="CourseName">
        <button onClick={handleExpand} type="button">
          <FontAwesomeIcon className="ButtonIcon" icon={titleArrowIcon} style={{ color: "#ffffff", }} />
        </button>
        <div className="SubjectName">{name}</div>
        <button onClick={AddGroup} className="AddGroupButton">
          <FontAwesomeIcon
            className="PlusIcon"
            icon={faPlus}
          />
        </button>
      </div>
      <div className="GroupList">
        {isExpanded && groups.length > 0 && groups.map((group, index) => {
          return <GroupItem 
                    key={1} 
                    groupIndex={1} 
                    onDeleteButton={() => onDeleteGroupItem(index)} 
                    subjectIndex={1} />
        }
        )}
      </div>
    </div>

  )
}

export default SubjectItem;
