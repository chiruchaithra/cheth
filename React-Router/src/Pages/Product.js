import {Link} from 'react-router-dom'
const Product = () => (
    <div>
        <h1>Welcome to Product page</h1>
        <ul>
            <li> <Link to="/product/p1">product 1</Link></li>
            <li><Link to="/product/p2">product 2</Link></li>
            <li><Link to="/product/p3">product 3</Link></li>
            <li><Link to="/product/p4">product 4</Link></li>
        </ul>
    </div>
)
export default Product
