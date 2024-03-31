import GroupItem from "../GroupItemComponent/GroupItem"
import { useEffect, useState } from 'react'
import { useAllSubjectsContext } from '../../contexts/AllSubjectsContext'
import { GroupContextProvider } from '../../contexts/GroupContext'

export default function GroupGroups({ subjectIndex, groupss }) {
    const { subjects, setSubjects } = useAllSubjectsContext();
    const [ groups, setGroups] = useState([]);

    useEffect(() => {
        setGroups([...subjects[subjectIndex].groups]);
    }, [groupss, subjectIndex, subjects]);

    return (
        <div className="GroupGroups">
            {groups.map((group, index) => (
                <GroupContextProvider key={index}>
                    <GroupItem key={index} subjectIndex={subjectIndex} groupIndex={index} group={group} />
                </GroupContextProvider>
            ))}
        </div>
    );
}

