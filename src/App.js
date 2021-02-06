import NavBar from './components/header/Navbar'
import PageRoutes from "./routes/pageRoutes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <NavBar/>
        <PageRoutes/>
      </Provider>
    </div>
  );
}

export default App;
