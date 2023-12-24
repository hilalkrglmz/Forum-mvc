import { useEffect, useState } from 'react'
import PopupView from './PopupView'
import Model from './PopupModel'

const PopupController = ({setIsOpen, isOpen}) => {

    const [posts, setPosts] = useState(null)

    /* model açıldığında kullanıcının gönderilerini alır. */
useEffect(() => {
    Model.getUserPosts(isOpen)
    .then((data) => setPosts(data))
},[])

  return (
    <PopupView posts={posts} setIsOpen={setIsOpen} isOpen={isOpen}/>
  )
}

export default PopupController