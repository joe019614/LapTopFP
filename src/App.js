/* import {Route,Switch} from "react-router-dom"; */
import LandingPage from "./LandingPage/LandingPage";
import Search from "./Search/Search";
import {Routes,Route} from "react-router-dom";


function App() {
  return (

    <>
        <Routes>
          <Route path="/search" Component={Search}/>
          <Route path="/"       Component={LandingPage}/>
        </Routes>
    </>


  );
}

export default App;
