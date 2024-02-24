import { Link } from "react-router-dom";
import { DataInterface } from "../interface/interface";
import { useContext, useState } from "react";
import { ListContext } from "../interface/ListContext";
import DeleteController from "../controller/DeleteController";
import toast from "react-hot-toast";
import { PopUpDesc } from "./PopUpDesc";
import { PopUpDelete } from "./PopUpDelete";

export default function Card(prop: DataInterface) {

  const listContext = useContext(ListContext)
  const [popUp,setPopUp] = useState(false)
  const [popUpDelete,setPopUpDelete] = useState(false)

  async function handleDelete(){
    await DeleteController(prop).then(e => {
      if(e) {
        listContext.handleRefresh!()
        toast.success('success delete!')
      } else {
        toast.error('error occured in delete!')
      }
    })
  }

  function handlePopUp(){
    setPopUp(!popUp)
  }
  
  function handlePopUpDelete(){
    setPopUpDelete(!popUpDelete)
  }

  return (
    <>
      {popUp ? <PopUpDesc handlePopUp={handlePopUp} desc={prop.description}/> : null}
      {popUpDelete ? <PopUpDelete handlePopUp={handlePopUpDelete} handleDelete={handleDelete}/> : null}

      <div className="card w-80 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
        <img onClick={handlePopUp} className="cursor-pointer w-full h-40 object-cover object-center" src={prop.image} alt={prop.name} />
        <div className="card-body px-6 py-4">
          <h2 onClick={handlePopUp} className="cursor-pointer w-full text-2xl font-semibold text-gray-800 mb-2">{prop.name}</h2>
          <p onClick={handlePopUp} className="cursor-pointer w-full text-sm text-gray-600 mb-2">Address: {prop.address}</p>
          <p onClick={handlePopUp} className="cursor-pointer w-full text-lg text-gray-700 font-semibold mb-2">Price: IDR {prop.price}</p>
          <p onClick={handlePopUp} className="cursor-pointer w-full text-sm text-gray-700 mb-2">Category: {prop.navbar}</p>
          <p onClick={handlePopUp} className="cursor-pointer w-full text-sm text-gray-700 mb-4">Subcategory: {prop.navbarChild}</p>
          <div className="flex justify-between">
            <Link to={`/update/${prop.navbar}/${prop.navbarChild}/${prop.id}`} className="btn btn-accent">Update</Link>
            <button className="btn btn-error" onClick={handlePopUpDelete}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}