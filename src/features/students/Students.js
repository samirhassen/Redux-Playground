import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {selectStudentName, updateStudentName } from './studentHelper'

export default function Students() {
    const studentName = useSelector(selectStudentName)
    const dispatch = useDispatch();
    const [usrInput, setInput] = useState('');

  return (
    <div>
        <h1>{studentName}</h1>
        <input type="text" value={usrInput} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => dispatch(updateStudentName(usrInput))}>Update Name</button>
    </div>
  )
}
