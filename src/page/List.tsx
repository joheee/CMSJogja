import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import useGetData from "../controller/useGetData";

export default function List() {

  // const {} = useGetData()

  return (
    <div>
      <Navigation/>
      <CardList/>
      <Footer/>
    </div>
  )
}

