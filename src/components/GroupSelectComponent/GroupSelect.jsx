import { useState, useEffect } from 'react';
import './GroupSelector.css';

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

export default GroupSelector;