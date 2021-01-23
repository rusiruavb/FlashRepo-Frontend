import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateUser from "../components/create_user/signIn";
import Login from "../components/login_user/user_login";
import UserProfile from "../components/user_profile/user_profile";

export default function PageRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={CreateUser} exact />
          <Route path="/login" component={Login} exact/>
          <Route path="/me" component={UserProfile} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}