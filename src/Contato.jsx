import Logo from "./components/Logo";
import Navbarproj from "./components/Navbarproj";
import Rodape from "./components/Foolter";
import './apps.css/'
function Contato(){
 return(
 <div>
  <div className="cabecalho bg-dark">
        <h1>BabyFun</h1>
    <Navbarproj/>
    </div>
 <div className="main">
 <h1>Contato</h1>
 
 <div className="log bg-dark" >
 <Logo/>
 <p>Email:babyfun@fiap.com</p>
 <p>Instagram: @babyfun.off</p>
 </div>
 </div>
 <br />
    <Rodape/>
 </div>
 )
}
export default Contato