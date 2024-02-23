import { DocumentData, DocumentSnapshot } from "firebase/firestore"
import getImageURL from "./getImageURL"

export default async function getImageData(storageLoc:string,snap:DocumentSnapshot<DocumentData,DocumentData>) {
    const imageUrl = await getImageURL(storageLoc)
    const res = await fetch(imageUrl)
    const blob = await res.blob()
    const file = new File([blob], snap.data()!.profile, {type:'image/jpeg'})
    return file
}