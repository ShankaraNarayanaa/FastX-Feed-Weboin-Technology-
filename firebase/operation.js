import {addDoc, collection, doc, getDocs, orderBy, query, serverTimestamp} from 'firebase/firestore';
import {db} from "./firebase";

async function getAllPost()
{
    const ref = collection(db,"Posts")
    const q = query(ref,orderBy("createdAt","desc"))
    const snapshot = await getDocs(q);
    const datas = snapshot.docs.map(doc => doc.data());

return datas;
}

async function addPost(data) {
   
    const ref = await addDoc(collection(db, "Posts"), {
        location: data.location,
        url: data.url,
        username: data.username,
        options: data.options,
        createdAt: serverTimestamp(),
    });

    return ref.id;
}

export {addPost ,getAllPost};


