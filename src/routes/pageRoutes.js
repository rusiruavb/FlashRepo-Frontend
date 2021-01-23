import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateUser from "../components/create_user/signIn";
import Login from "../components/login_user/user_login";
import UserProfile from "../components/user_profile/user_profile";
import CreateCard from "../components/create_card/create_card";

export default function PageRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={CreateUser} exact />
          <Route path="/login" component={Login} exact/>
          <Route path="/me" component={UserProfile} exact/>
          <Route path="/create" component={CreateCard} exact />
        </Switch>
      </BrowserRouter>
    </div>
  )
}