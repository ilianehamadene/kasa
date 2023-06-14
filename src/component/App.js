import Apropos from'../Pages/apropos/apropos.js'
import Erreur404 from '../Pages/erreur404/erreur404.js'
import Fichelogement from'../Pages/fichelogement/fichelogement.js'
import Navbar from "./navbar/navbar.js"
import Footer from './Footer/Footer.js'
import {Routes, Route} from "react-router-dom"
import Homepage from '../Pages/homepage/homepage.js'
import Headerhome from './headerhome/header-home.js'
import Headerapropos from './headerabout/header-apropos.js'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<><Headerhome/><Homepage /></>} />
        <Route path='/apropos' element={<><Headerapropos/><Apropos /></>} />
        <Route path='/erreur' element={<Erreur404 />} />
        <Route path='/fichelogement/:fid' element={<Fichelogement />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
