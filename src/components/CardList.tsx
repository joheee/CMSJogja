import Card from "./Card";

export default function CardList() {
  
  const list = [1,2,3,4,5]

  return (
    <div className="flex justify-center">
      <div className="p-5 gap-5 grid grid-cols-3">
          {
            list.map(i => (
              <Card key={i}/>
            ))
          }
      </div>
    </div>
  )
}
