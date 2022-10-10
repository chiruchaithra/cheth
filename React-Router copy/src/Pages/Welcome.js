import {Route} from 'react-router-dom'
const Welcome = () => (
    <div className="welcome">
        <h1>Welcome page here!!</h1>
        <Route path="/welcome/new-user"><p>Welcome chaithra</p> </Route>
    </div>
)
export default Welcome
