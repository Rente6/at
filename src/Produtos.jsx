import Navbarproj from "./components/Navbarproj";
import Cards from "./components/Cards";
import Rodape from "./components/Foolter";
import './apps.css/';

function Produtos(){
 return(
 <div>
 <div className="cabecalho bg-dark">
        <h1>BabyFun</h1>
    <Navbarproj/>
    </div>
 <div className="hzin">
 <h3>Nossos produtos</h3>
 </div>
 <br />
    <Cards/>
    <br />

 <Rodape/>
 </div>
 )
}
export default Produtos
