import '../styles/CourseItem.css'
import AddScheduleButton from './AddScheduleButton'
import { faAngleDown , faTrash, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GroupSelector from './GroupSelect'
import { useState , useEffect } from 'react'

function CourseItem() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [titleArrowIcon, setTitleArrowIcon] = useState(faAngleRight);
    
    const handleExpand = () => {
        if(isExpanded){
            setTitleArrowIcon(faAngleRight);
        }else{
            setTitleArrowIcon(faAngleDown);
        }
        setIsExpanded(!isExpanded);
    }

  return (
      <div className="CourseItem">
          <div className="CourseName">
              <button onClick={handleExpand} type="button">
                  <FontAwesomeIcon className="ButtonIcon" icon={titleArrowIcon} style={{ color: "#ffffff", }} />
              </button>
              <div>Ingeniería de Software</div>
          </div>
          {isExpanded && 
            <div className="CourseGroup">
              <GroupSelector />
              <AddScheduleButton />
              <button className="TrashButton">
                <FontAwesomeIcon 
                    className="TrashIcon" 
                    icon={faTrash} 
                />
              </button>    
            </div>}
      </div>   
  )
}

export default CourseItem;
