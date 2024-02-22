import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"/>
        </figure>
        <div className="card-body">
            <h2 className="card-title">This is Name</h2>
            <p>this is address</p>
            <p>this is navbar</p>
            <p>this is navbar child</p>
            <div className="card-actions justify-end">
            <Link to={`/update/1`} className="btn btn-accent">update</Link>
            <button className="btn btn-error">delete</button>
            </div>
        </div>
    </div>
  )
}
