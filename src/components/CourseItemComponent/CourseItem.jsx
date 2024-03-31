import './CourseItem.css'
import { faAngleDown, faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Group from '../../classes/Models/Group'
import GroupItem from '../GroupItemComponent/GroupItem'
import { useState } from 'react'
import Subject from '../../classes/Models/Subject'

function CourseItem({name}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [titleArrowIcon, setTitleArrowIcon] = useState(faAngleRight);
  const [groups, setGroups] = useState([]);


  const AddGroup = () => {
    const newGroup = new Group("GR1");
    setGroups([...groups, newGroup]);
    setIsExpanded(true);
    setTitleArrowIcon(faAngleDown);
    console.log(groups);
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
    console.log("Index a borrar: " + index );
    console.log(groups);
    const newGroups = [...groups];
    newGroups.splice(index, 1);
    setGroups(newGroups);
    console.log(groups);
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
        {isExpanded && groups.map((value, index) => {
          return <GroupItem group={groups[index]} key={index} onDeleteButton={() => onDeleteGroupItem(index)} />
        })}
      </div>
    </div>

  )
}

export default CourseItem;
