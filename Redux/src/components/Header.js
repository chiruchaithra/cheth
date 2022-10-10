import classes from './Header.module.css';
import {useDispatch,connect} from 'react-redux'
import {authActions} from '../store/AuthReducer'
import authSelector from "./Selector/selector";
const Header = (props) => {
  const dispatch = useDispatch()
  const {authentication} = props

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
          {authentication &&
          <ul>
              <li>
                  <a href='/'>My Products</a>
              </li>
              <li>
                  <a href='/'>My Sales</a>
              </li>

              <li>
                  <button
                      onClick={() => {
                          dispatch(authActions.logout())
                      }}
                  >Logout
                  </button>
              </li>
          </ul>
          }
      </nav>
    </header>
  );
};

export default connect(authSelector)(Header);
