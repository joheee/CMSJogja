import { getDownloadURL, ref } from "firebase/storage"
import { storage } from "../interface/Firebase"

export default async function getImageURL(location:string) {
    const ImageURL = await getDownloadURL(ref(storage, location))
    return await ImageURL
}