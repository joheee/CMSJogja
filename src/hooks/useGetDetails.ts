import { useEffect, useState } from "react";
import { DataInterface, DetailInterface } from "../interface/interface";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../interface/Firebase";
import getImageURL from "./getImageURL";

export default function useGetDetails(prop:DetailInterface) {
    
    const [data,setData] = useState<DataInterface|null>(null)
    const stringRef = `${prop.nav}/${prop.navChild}/Activity/${prop.id}`

    useEffect(() => {
        const unsubscribeData = onSnapshot(doc(db,stringRef), async (snap) => {
            const storageLoc = `${prop.nav}/${prop.navChild}/Activity/${snap.data()!.profile}`
            const imageURL = await getImageURL(storageLoc)
            const snapData = {
                ...snap.data(),
                id:snap.id,
                image:imageURL
            } as DataInterface
            setData(snapData)
        })
        return () => unsubscribeData()
    },[])

    return {data}
}
