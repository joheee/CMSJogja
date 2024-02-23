import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Navigation from "../components/Navigation";
import useGetData from "../hooks/useGetData";
import { ListContext } from "../interface/ListContext";

export default function List() {
  const { places, things, loading, handleRefresh } = useGetData();

  if(loading) return <Loading/>

  const val = {
    handleRefresh
  }

  return (
    <ListContext.Provider value={val}>
      <Navigation />

      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 mt-8 px-4">Places to Go</h1>
        <CardList cardList={places} />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 mt-8 px-4">Things to Do</h1>
        <CardList cardList={things} />
      </div>
      
      <Footer />
    </ListContext.Provider>
  );
}
