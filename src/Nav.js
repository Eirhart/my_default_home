import React, { useEffect, useRef, useState } from 'react'
import Form from './Form'
import Links from './Links'
import './Nav.css'
import { motion } from 'framer-motion'

const Nav = ({ navBar }) => {
    const [list, setList] = useState(JSON.parse(localStorage.getItem('links')) || [])
    const [itemLink, setItemLink] = useState('')
    const [itemName, setItemName] = useState('')
    const [addForm, setAddForm] = useState(false)
    const [menuHeight, setMenuHeight] = useState(null)



    
    const addLink = (link, name) => {
        if(link && name !== '') {
        const id = list.length ? list[list.length - 1].id +1 : 1
        const newlink = {id, link, name}
        const newListItem = [...list, newlink]
        setAddForm(false)
        setList(newListItem)
        localStorage.setItem('links', JSON.stringify(newListItem))
        setItemLink('')
        setItemName('')
      }
    }

    const deleteLink = (names) => {
        const mylist = list.filter(item => item.id !== names)
        setList(mylist)
        localStorage.setItem('links', JSON.stringify(mylist))
    }

    const navref = useRef()
    useEffect(() => {
      const height = !addForm ? navref.current?.firstChild.firstChild.scrollHeight : navref.current?.lastChild.firstChild.scrollHeight
      setMenuHeight(height)
    }, [list, addForm])

  return (
    <motion.div 
    className='nav'
    initial={{height: 0}}
    animate={{
      height: navBar ? menuHeight : 0,
    }}
    transition={{
      duration: 0.3
    }}
    >
      <motion.div
      className='navCont'
      ref={navref}
      animate={{x: addForm ? -320 : 0}}
      transition={{duration: 0.5}}
      >
        <div>
          <Links
          list={list}
          deleteLink={deleteLink}
          addForm={addForm}
          setAddForm={setAddForm}
          setMenuHeight={setMenuHeight}
          />
        </div>
        <div>
          <Form
          itemLink={itemLink}
          setItemLink={setItemLink}
          itemName={itemName}
          setItemName={setItemName}
          addLink={addLink}
          addForm={addForm}
          setAddForm={setAddForm}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Nav