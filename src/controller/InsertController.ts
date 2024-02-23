import { addDoc, collection } from "firebase/firestore";
import { InsertContextInterface } from "../interface/InsertContext";
import { db, storage } from "../interface/Firebase";
import { ref, uploadBytesResumable } from "firebase/storage";

export default async function InsertController(prop:InsertContextInterface) {
    try {
        const data = {
            name:prop.name,
            address:prop.address,
            description:prop.description,
            price:prop.price,
            profile:prop.profile?.name
        }

        console.log(prop)

        const stringRef = `${prop.navbarInput}/${prop.navbarChildInput}/Activity`

        // UPLOAD DATA TO STORAGE
        const storageRef = ref(storage, `${stringRef}/${prop.profile?.name}`)
        await uploadBytesResumable(storageRef, prop.profile!)

        // SAVE DATA TO FIRESTORE
        const dataRef = collection(db, stringRef)
        await addDoc(dataRef, {
            ...data
        }).then(e => console.log(e.id))

    } catch (error) {
        console.error(`error insert: ${error}`)
    }   
}