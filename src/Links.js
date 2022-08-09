import React, { useRef } from 'react'
import './Links.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Links = ({ addForm, setAddForm, list, deleteLink }) => {
  const heightRef = useRef()
  return (
    <div
    className='listahan'
    ref={heightRef}
    >
          {list.length ? (list.map(item => {
              return(<li key={item.id}>
                  <a href={item.link}>{item.name}</a><button className='trashButton' onClick={()=> deleteLink(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
              </li>)
          })) : (<span className='listSpan'>Empty List</span>)}
          <hr />
          <button
          className='addFormButton' onClick={(e) => setAddForm(!addForm)}>
                <span>Add Link</span><FontAwesomeIcon className='addlistahan' icon={faAngleRight}/>
          </button>
      </div>
  )
}

export default Links