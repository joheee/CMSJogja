import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../interface/Firebase";
import { ref, uploadBytesResumable } from "firebase/storage";
import { FormContextInterface } from "../interface/interface";
import BreakDescription from "./BreakDescription";

export default async function InsertController(prop:FormContextInterface) {
    try {
        const data = {
            name:prop.name,
            address:prop.address,
            description:BreakDescription(prop.description),
            price:prop.price,
            profile:prop.profile?.name
        }

        const stringRef = `${prop.navbarInput}/${prop.navbarChildInput}/Activity`

        // UPLOAD DATA TO STORAGE
        const storageRef = ref(storage, `${stringRef}/${prop.profile?.name}`)
        await uploadBytesResumable(storageRef, prop.profile!)

        // SAVE DATA TO FIRESTORE
        const dataRef = collection(db, stringRef)
        await addDoc(dataRef, {
            ...data
        })

    } catch (error) {
        console.error(`error insert: ${error}`)
    }   
}