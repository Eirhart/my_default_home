import React, { useRef } from 'react'
import './Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Form = ({ addForm, setAddForm, itemLink, setItemLink, itemName, setItemName, addLink }) => {
  const slideForm = useRef()
  return (
    <div className='formahan'>
    <button className='backing' onClick={() => setAddForm(!addForm)}><FontAwesomeIcon icon={faAngleLeft} /></button>
    <hr />
    <form 
    ref={slideForm}
    onSubmit={e => e.preventDefault()}
    className="form"
    >
        <label>Input Link</label>
        <input 
            type="url" 
            value={itemLink}
            onChange={e => setItemLink(e.target.value)}
        />
        <label>Input Name</label>
        <input 
            type="text" 
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            />
        <button className='addlink' onClick={() => addLink(itemLink, itemName)}><span>Add</span><FontAwesomeIcon icon={faCheck} /></button>
    </form>
    </div>
  )
}

export default Form