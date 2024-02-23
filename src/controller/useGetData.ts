import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { db, storage } from "../interface/Firebase"
import { useState, useEffect } from "react"
import { DataInterface } from "../interface/interface"
import { getDownloadURL, ref } from "firebase/storage"

async function getImage(location:string) {
    const ImageURL = await getDownloadURL(ref(storage, location))
    return await ImageURL
  }

export default function useGetData() {

    const [places, setPlaces] = useState<DataInterface[]>([])
    const [things, setThings] = useState<DataInterface[]>([])
    const [loading, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)

    function handleRefresh(){
        setRefresh(!refresh)
    }

    useEffect(() => {
        setLoading(true)
        const unsubscribePlaces = onSnapshot(collection(db, 'placesToGo'), async (snap) => {
            const placesData: DataInterface[] = []
        
            await Promise.all(snap.docs.map(async doc => {
                const subcollectionRef = collection(doc.ref, 'Activity')
                const subColSnapshot = await getDocs(subcollectionRef)
        
                await Promise.all(subColSnapshot.docs.map(async item => {
                    const storageLoc = `placesToGo/${doc.id}/Activity/${item.data().profile}`
                    const imageUrl = await getImage(storageLoc)
                    const data = { 
                        ...item.data(), 
                        id: item.id, 
                        image:imageUrl,
                        navbar:'placesToGo',
                        navbarChild:doc.id 
                    } as DataInterface
                    placesData.push(data)
                }))
            }))
        
            setPlaces(placesData)
            unsubscribeThings()
        })

        const unsubscribeThings = onSnapshot(collection(db, 'thingsToDo'), async (snap) => {
            const thingsData: DataInterface[] = []
        
            await Promise.all(snap.docs.map(async doc => {
                const subcollectionRef = collection(doc.ref, 'Activity')
                const subColSnapshot = await getDocs(subcollectionRef)
        
                await Promise.all(subColSnapshot.docs.map(async item => {
                    const storageLoc = `thingsToDo/${doc.id}/Activity/${item.data().profile}`
                    const imageUrl = await getImage(storageLoc)
                    const data = { 
                        ...item.data(), 
                        id: item.id, 
                        image:imageUrl,
                        navbar:'thingsToDo',
                        navbarChild:doc.id 
                    } as DataInterface
                    thingsData.push(data)
                }))
            })).then(() => setLoading(false))
            setThings(thingsData)
        })


        return () => {
            unsubscribePlaces()
        }
    }, [refresh])

    return { places, things, loading, handleRefresh }
}
