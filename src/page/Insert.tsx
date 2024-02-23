import { useEffect, useState } from "react"
import Form from "../components/Form"
import Navigation from "../components/Navigation"
import { InsertContext } from "../interface/InsertContext"
import Footer from "../components/Footer"
import InsertController from "../controller/InsertController"
import toast from "react-hot-toast"
import Loading from "../components/Loading"

export default function Insert() {
  const navbarChildDic: { [key: string]: string[] } = {
    'placesToGo': ['Accommodation','Cuisine','Culture','Landmark','Nature'],
    'thingsToDo': ['Indoor','Outdoor'],
  }

  // LOADING ANIMATION
  const [loading, setLoading] = useState(false)

  // FOR NAVBAR SECTION
  const navbar = ['placesToGo','thingsToDo']
  const [navbarChild, setNavbarChild] = useState(navbarChildDic[navbar[0]])

  // FOR INPUT SECTION
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [navbarInput, setNavbarInput] = useState(navbar[0])
  const [profile, setProfile] = useState<File|null>(null)
  const [navbarChildInput, setNavbarChildInput] = useState(navbarChildDic[navbar[0]][0])

  // FOR RESET NAVBAR SECTION
  useEffect(() => {
    setNavbarChild(navbarChildDic[navbarInput])
    setNavbarChildInput(navbarChildDic[navbarInput][0])
  },[navbarInput])

  const val = {
    name, 
    setName,
    address, 
    setAddress,
    description, 
    setDescription,
    price,
    setPrice,
    navbar,
    navbarChild,
    navbarInput, 
    setNavbarInput,
    profile, 
    setProfile,
    navbarChildInput,
    setNavbarChildInput,
    handleInsert
  }

  async function handleInsert() {
    if (name === null || name === '') {
      toast.error('Name cannot be empty')
      return 
    }
    if (address === null || address === '') {
      toast.error('Address cannot be empty')
      return 
    }
    if (description === null || description === '') {
      toast.error('Description cannot be empty')
      return 
    }
    if (price === null) {
      toast.error('Price cannot be empty')
      return 
    }
    if (navbarInput === null) {
      toast.error('Navbar input cannot be empty')
      return 
    }
    if (profile === null) {
      toast.error('Profile cannot be empty')
      return 
    }
    if (navbarChildInput === null) {
      toast.error('Navbar child input cannot be empty')
      return 
    }
  
    try {
      setLoading(true)
      await InsertController(val).then(() => {
        toast.success('success insert new item')
        setLoading(false)
      })
    } catch (error) {
      console.error('Error during insertion:', error)
      toast.error('Error occurred during insertion')
    }
  }

  return (
    <InsertContext.Provider value={val}>
      {loading ? <Loading/> : null}
      <Navigation/>
      <Form isInsert={true}/>
      <Footer/>
    </InsertContext.Provider>
  )
}