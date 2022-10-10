import {Link,NavLink} from 'react-router-dom'
import classes from './MainHeader.module.css'
const MainHeader = (props) => {
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.activeButton} to="/product"> Product</NavLink>
                    </li>
                    <li>
                        <NavLink  activeClassName={classes.activeButton} to="/welcome"> Welcome</NavLink>
                    </li>
                </ul>
            </nav>
        </header>

    )
}
export default MainHeader
