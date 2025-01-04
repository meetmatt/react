import {Link} from "react-router";

export default function Index() {
  return (
    <ul>
      <li><Link to='/tip-calculator'>Tip Calculator</Link></li>
      <li><Link to='/split-the-bill'>Split the Bill</Link></li>
    </ul>
  )
}
