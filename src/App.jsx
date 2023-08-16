import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Contato from './Contato'
import Produtos from "./Produtos";
function App(){
 return(
 <div>

 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/produtos" element={<Produtos/>}/>
 <Route path="/contato" element={<Contato/>}/>
 </Routes>
 </BrowserRouter>
 </div>
 )
}
export default App
