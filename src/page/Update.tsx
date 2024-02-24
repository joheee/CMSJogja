import { useEffect, useState } from "react"
import Form from "../components/Form"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import toast from "react-hot-toast"
import Loading from "../components/Loading"
import { useNavigate, useParams } from "react-router-dom"
import { FormContext } from "../interface/FormContext"
import useGetDetails from "../hooks/useGetDetails"
import UpdateController from "../controller/UpdateController"
import FormatUpdateDescription from "../controller/FormatUpdateDescription"

export default function Update() {
  const navbarChildDic: { [key: string]: string[] } = {
    'placesToGo': ['Accommodation','Cuisine','Culture','Landmark','Nature'],
    'thingsToDo': ['Indoor','Outdoor'],
  }
  
  // NAVIGATE
  const navigate = useNavigate()

  // PARAM
  const {id, nav, navChild} = useParams()

  // GET DETAIL DATA
  const {data} = useGetDetails({id:id!, nav:nav!, navChild:navChild!})

  console.log(data)

  // LOADING ANIMATION
  const [loading, setLoading] = useState(false)

  // FOR NAVBAR SECTION
  const navbar = ['placesToGo','thingsToDo']
  const [navbarChild, setNavbarChild] = useState(navbarChildDic[nav!])

  // FOR INPUT SECTION
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [profile, setProfile] = useState<File|null>(null)
  const [navbarInput, setNavbarInput] = useState(nav!)
  const [navbarChildInput, setNavbarChildInput] = useState(navChild!)

  useEffect(() => {
    setName(data?.name!)
    setAddress(data?.address!)
    setPrice(data?.price!)
    setDescription(FormatUpdateDescription(data?.description!))
    setNavbarInput(nav!)
    setNavbarChildInput(navChild!)
  },[data])

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
    handleSubmit,
    id
  }

  async function handleSubmit() {
    if (name === null || name === '') {
      toast.error('Name cannot be empty')
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
    if (navbarChildInput === null) {
      toast.error('Navbar child input cannot be empty')
      return 
    }
  
    try {
      setLoading(true)
      await UpdateController(val).then(() => {
        toast.success('success update item')
        setLoading(false)
        navigate('/')
      })
    } catch (error) {
      console.error('Error during update:', error)
      toast.error('Error occurred during update')
    }
  }

  return (
    <FormContext.Provider value={val}>
      {loading ? <Loading/> : null}
      <Navigation/>
      <Form isInsert={false}/>
      <Footer/>
    </FormContext.Provider>
  )
}