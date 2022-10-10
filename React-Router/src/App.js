// import {Route,Routes,Redirect} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Product from "./Pages/Product";
import Welcome from "./Pages/Welcome";
import MainHeader from "./Components/MainHeader";
import ProductListPage from "./Pages/ProductListPage/ProductListPage";
function App(props) {
  return (
    <div>
        <MainHeader props={props} />
        <main>
            <Route>
                {/*<Route path="/" exact >*/}
                    {/*<Redirect to="/welcome" />*/}
                {/*</Route>*/}
            <Route path="/product" exact >
                <Product/>
            </Route>
            <Route path="/welcome">
                <Welcome />
            </Route>
            <Route path="/product/:pId" exact>
                <ProductListPage />
            </Route>
            </Route>
        </main>

    </div>
  );
}

export default App;
