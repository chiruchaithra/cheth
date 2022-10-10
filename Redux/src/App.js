import {Fragment} from "react";
import {connect} from "react-redux";
import Counter from './components/Counter';
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import authSelector from "./components/Selector/selector";

function App(props) {
    const {authentication} = props
    return (
      <Fragment>
        <Header/>
          {authentication ? <UserProfile/> : <Auth />
          }
        <Counter />
      </Fragment>
  );
}

export default connect(authSelector)(App);
