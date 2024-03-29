import GroupItem from "../GroupItemComponent/GroupItem"
import { useEffect, useState } from 'react'
import { useAllSubjectsContext } from '../../contexts/AllSubjectsContext'

export default function GroupGroups({ subjectIndex, groupss }) {
    const { subjects, setSubjects } = useAllSubjectsContext();
    const [ groups, setGroups] = useState([]);

    useEffect(() => {
        setGroups([...subjects[subjectIndex].groups]);
    }, [groupss, subjectIndex, subjects]);

    return (
        <div className="GroupGroups">
            {groups.map((group, index) => (
                <GroupItem key={index} subjectIndex={subjectIndex} groupIndex={index} group={group} />
            ))}
        </div>
    );
}

