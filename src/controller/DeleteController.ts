import { deleteDoc, doc } from "firebase/firestore";
import { DataInterface } from "../interface/interface";
import { db } from "../interface/Firebase";

export default async function DeleteController(prop:DataInterface) {
    try {
        const stringRef = `${prop.navbar}/${prop.navbarChild}/Activity/${prop.id}`
        await deleteDoc(doc(db, stringRef))
        return true
    } catch (error) {
        console.log(`error in delete: ${error}`)
        return false
    }
}
