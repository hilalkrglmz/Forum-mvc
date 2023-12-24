import { v4 } from 'uuid';
import Model from './AddPageModel';
import AddPageView from './AddPageView'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddPageController = () => {
const navigate= useNavigate()


  /* form gönderilince çalışır */
  const handleSubmit = (e) => {
    e.preventDefault();

    /* inputlardaki veriyi al */

    const form = new FormData(e.target);
    const newPost= Object.fromEntries(form.entries()) 
    newPost.id = v4();

    /* API ye veriyi kaydet */
    Model.createPost(newPost)
    
    /* kullanıcıyı anasayfaya yönlendir */
    
    .then(() => {
      toast.success('Gönderi başarıyla eklendi.')
      navigate('/')
    })
    .catch((err) => toast.error('Gönderi eklenirken bir sorun oluştu.'))

     }


  return <AddPageView handleSubmit={handleSubmit}/>
}

export default AddPageController