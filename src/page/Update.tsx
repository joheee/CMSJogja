import { useEffect, useState } from "react";
import Form from "../components/Form";
import Navigation from "../components/Navigation";
import { InsertContext } from "../interface/InsertContext";
import Footer from "../components/Footer";

export default function Update() {
  
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
  const [price, setPrice] = useState(0)
  const [navbarInput, setNavbarInput] = useState(navbar[0])  
  const [navbarChildInput, setNavbarChildInput] = useState(navbarChildDic[navbar[0]][0])

  // FOR RESET NAVBAR SECTION
  useEffect(() => {
    setNavbarChild(navbarChildDic[navbarInput])
    setNavbarChildInput(navbarChildDic[navbarInput][0])
  },[navbarInput])

  console.log(navbarInput)
  console.log(navbarChildInput)

  const val = {
    name, 
    setName,
    address, 
    setAddress,
    price,
    setPrice,
    navbar,
    navbarChild,
    navbarInput, 
    setNavbarInput,
    navbarChildInput,
    setNavbarChildInput
  }

  return (
    <InsertContext.Provider value={val}>
      <Navigation/>
      <Form isInsert={false}/>
      <Footer/>
    </InsertContext.Provider>
  )
}
