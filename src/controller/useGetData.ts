import { collection, onSnapshot } from "firebase/firestore"
import { db } from "../interface/Firebase"
import { useState } from "react"

interface dataInterface {
    id:string,
    name:string,
    address:string,
    description:string,
    price:number
}

export default async function useGetData() {

    const [places, setPlaces] = useState<dataInterface[]>([])
    const [things, setThings] = useState<dataInterface[]>([])

    const docPlacesRef = collection(db,'placesToGo')
    onSnapshot(docPlacesRef, (snap) => {
        snap.docs.map(doc => {
            const subcollectionRef = collection(doc.ref, 'Activity')
            onSnapshot(subcollectionRef, (subCol) => {
                subCol.docs.map(item => {
                    const data = {...item.data(), id:item.id} as dataInterface
                    // setPlaces(data)
                })
            })
        })
    })
    
    const docThingsRef = collection(db,'thingsToDo')
    onSnapshot(docThingsRef, (snap) => {
        snap.docs.map(doc => {
            const subcollectionRef = collection(doc.ref, 'Activity')
            onSnapshot(subcollectionRef, (subCol) => {
                subCol.docs.map(item => {
                    const data = {...item.data(), id:item.id}
                    // setThings(data)
                })
            })
        })
    })

    return { places, things }
}