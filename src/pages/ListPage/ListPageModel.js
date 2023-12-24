//*veri ile alakalı tüm yapıları tanımlarız.
//* modeller component değil de doğrudan class şeklinde oluşturulur. (genellikle)

import axios from "axios";


export default class ListPageModel {


    /* API den post verilerini alıp fonksiyonun çağrıldığı yere gönderir. */
    static async getPosts(){
        const res =  await axios.get("http://localhost:3077/posts");
        return res.data;
    }
}

ListPageModel.getPosts();