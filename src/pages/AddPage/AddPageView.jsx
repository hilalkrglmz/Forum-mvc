import React from 'react'

const AddPageView = ({handleSubmit}) => {
  return (
    <div className='h-[90vh] grid place-items-center'>
    <form 
    onSubmit={handleSubmit}
    action="" 
    className='flex flex-col gap-8 w-2/4 max-w-[700px] bg-black p-4 md:p-6 rounded-lg'>
      <h1 className='text-center text-xl'>Yeni Gönderi Oluştur</h1>
      <div className='flex flex-col gap-2'>
      <label htmlFor="first_name" class="block mb-2 text-sm font-medium text-white">Kullanıcı adı</label>
      <input type="text" name='user' 
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Mehmet" required />
      </div>
      <div className='flex flex-col gap-2'>
      <label htmlFor="first_name" class="block mb-2 text-sm font-medium text-white">Başlık</label>
      <input name='title' type="text"  
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="React Nedir?" required />
      </div>
      <div className='flex flex-col gap-2'>
      <label htmlFor="first_name" class="block mb-2 text-sm font-medium text-white">Açıklama</label>
      <textarea type="text" name='text' 
      className="min-h-[150px] max-h-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="..." required />
      </div>
      <button type='submit' className='bg-yellow-400 p-2 rounded-lg hover:bg-yellow-600 transition'>Oluştur</button>
    </form>
    </div>
  )
}

export default AddPageView