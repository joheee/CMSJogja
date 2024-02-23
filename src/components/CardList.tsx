import { CardListInterface } from "../interface/interface";
import Card from "./Card";

export default function CardList(prop:CardListInterface) {

  return (
    <div className="flex justify-center">
      <div className="p-5 md:pb-20 md:pt-5 gap-5 grid grid-cols-1 md:grid-cols-3">
        {prop.cardList.map((item,i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
}