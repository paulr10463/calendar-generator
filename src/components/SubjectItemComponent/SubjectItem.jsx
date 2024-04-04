import './SubjectItem.css'
import { faAngleDown, faAngleRight, faPlus, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import GroupGroups from '../GroupsGroupComponent/GroupGroups'
import { useAllSubjectsContext } from '../../contexts/AllSubjectsContext'
import Group from '../../classes/Models/Group'

function SubjectItem({ subjectIndex }) {
  const [titleArrowIcon, setTitleArrowIcon] = useState(faAngleRight);
  const [isExpanded, setIsExpanded] = useState(false);
  const { subjects, setSubjects } = useAllSubjectsContext();
  const subject = subjects[subjectIndex];
  const [groups, setGroups] = useState([]);

  const AddGroup = () => {
    const subjectName = subject.name;
    const newGroup = new Group(subjectName, "GR1");
    subject.groups.push(newGroup);
    setGroups([...subject.groups]);
    setIsExpanded(true);
    setTitleArrowIcon(faAngleDown);
  }

  const handleExpand = () => {
    if (isExpanded) {
      setTitleArrowIcon(faAngleRight);
    } else {
      setTitleArrowIcon(faAngleDown);
    }
    setIsExpanded(!isExpanded);
  }

  const handleDeleteSubject = () => {
    const newSubjects = [...subjects];
    newSubjects.splice(subjectIndex, 1);
    setSubjects(newSubjects);
  }

  return (
    <div className="CourseItem">
      <div className="CourseName">
        <button onClick={handleExpand} type="button">
          <FontAwesomeIcon className="ButtonIcon" icon={titleArrowIcon} style={{ color: "#ffffff", }} />
        </button>
        <div className="SubjectName">{subject.name}</div>
        <div className='RightButtons'>
          <button className="AddGroupButton" onClick={AddGroup}>
            <FontAwesomeIcon
              className="PlusIcon"
              icon={faPlus}
            />
          </button>
          <button onClick={handleDeleteSubject} className="TrashButton">
            <FontAwesomeIcon
              className="TrashIcon"
              icon={faTrash}
            />
          </button>
        </div>
      </div>
      {isExpanded &&
        <div className="GroupList">
          <GroupGroups subjectIndex={subjectIndex} groupss={groups} />
        </div>
      }
    </div>
  )
}
export default SubjectItem;
