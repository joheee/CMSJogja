import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost text-xl">CMS Jogja</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>
                Action
              </summary>
              <ul className="p-2 grid gap-2 bg-base-100 rounded-t-none z-20">
                <li>
                  <Link to='/'>List</Link>
                </li>
                <li>
                  <Link to='/insert'>Insert</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}