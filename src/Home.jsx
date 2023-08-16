import Carou from "./components/Caroussel";
import Cards from "./components/Cards";
import Rodape from "./components/Foolter";
import Navbarproj from "./components/Navbarproj";
import './apps.css/'



function Home() {
  return (
    <div>
      <div className="cabecalho bg-info">
        <h1>Metemégica</h1>
       <p>Matemática fácil para pessoas carentes com deficiência auditiva</p> 
      <Navbarproj/>
    </div>
    <div></div>
    <Carou/>
    
    <div className="joao bg-dark">
    <p>Nossas aulas:</p>
    </div>
    <Cards/>
    <br />
    
    <br />
    <Rodape/>
    </div>
    
  )
}

export default Home