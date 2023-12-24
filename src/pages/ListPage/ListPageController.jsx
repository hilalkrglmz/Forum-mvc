import { useEffect } from 'react'
import Model from './ListPageModel'
import ListPageView from './ListPageView'
import { useState } from 'react'


/* kullanıcı etkileşimiyle tetiklenen fonksiyonlardır. */
const ListPageController = () => {

  const [posts, setPosts] = useState(null);
  const [isOpen, setIsOpen] = useState(null)

/* useEffect ile de kullanıcı etkileşimini izleiğimiz için controllerda
tanımlarız.*/
  useEffect(() =>{
    Model.getPosts()
    .then((data) => setPosts(data))
  },[])


/* controller bileşenlerinde ara yüz (jsx kodu)
yazmayız ama View bileşenini göstermek istediğimi için
jsx formatında hazırlarız. */

/* view bileşenini döndürürüz. */
  return <ListPageView posts={posts} isOpen={isOpen} setIsOpen={setIsOpen}/>
}

export default ListPageController