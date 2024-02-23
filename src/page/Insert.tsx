import { useEffect, useState } from "react";
import Form from "../components/Form";
import Navigation from "../components/Navigation";
import { InsertContext } from "../interface/InsertContext";
import Footer from "../components/Footer";
import InsertController from "../controller/InsertController";

export default function Insert() {
  const navbarChildDic: { [key: string]: string[] } = {
    'placesToGo': ['Accommodation','Cuisine','Culture','Landmark','Nature'],
    'thingsToDo': ['Indoor','Outdoor'],
  }

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
    await InsertController(val)
  }

  console.log(navbarChildInput)

  return (
    <InsertContext.Provider value={val}>
      <Navigation/>
      <Form isInsert={true}/>
      <Footer/>
    </InsertContext.Provider>
  )
}