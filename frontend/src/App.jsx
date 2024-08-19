import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AppBar from "./components/AppBar"
import Signup from "./components/Signup"
import Signin from './components/Signin';

function App() {
  return (
    <>
     <AppBar></AppBar>
     <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
        </Routes>
     </Router>
    </>
  )
}

export default App
