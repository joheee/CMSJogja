import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../interface/Firebase";
import { ref, uploadBytesResumable } from "firebase/storage";
import { FormContextInterface } from "../interface/interface";

export default async function UpdateController(prop:FormContextInterface) {
    try {
        if (prop.profile === null) {
            const data = {
                name:prop.name,
                address:prop.address,
                description:prop.description,
                price:prop.price,
            }
    
            const stringRef = `${prop.navbarInput}/${prop.navbarChildInput}/Activity`
    
            // SAVE DATA TO FIRESTORE
            const dataRef = doc(db, `${stringRef}/${prop.id!}`)
            await updateDoc(dataRef, {
                ...data
            })
        } else {
            const data = {
                name:prop.name,
                address:prop.address,
                description:prop.description,
                price:prop.price,
                profile:prop.profile?.name
            }
    
            const stringRef = `${prop.navbarInput}/${prop.navbarChildInput}/Activity`
    
            // UPLOAD DATA TO STORAGE
            const storageRef = ref(storage, `${stringRef}/${prop.profile?.name}`)
            await uploadBytesResumable(storageRef, prop.profile!)
    
            // SAVE DATA TO FIRESTORE
            const dataRef = doc(db, `${stringRef}/${prop.id!}`)
            await updateDoc(dataRef, {
                ...data
            })
        }


    } catch (error) {
        console.error(`error insert: ${error}`)
    }   
}