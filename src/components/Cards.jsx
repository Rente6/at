import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const servico = [
  {
   titulo:"Brinquedos",
   preco:"R$200,00",
   texto:"Divertido e alegre!",
   img:"https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw29935880/large/2002832_1.png" 
  },
  {
    titulo:"Chupeta",
    preco:"R$80,00",
    texto:"Fofas e úteis.",
    img:"https://io.convertiez.com.br/m/drogal/shop/products/images/9994260/medium/chupeta-soft-fiona-tamanho-2-6-meses-cor-verde-1-unidade_48629.png" 
   },
   {
    titulo:"Babador",
    preco:"R$50,00",
    texto:"Bonito, pratico e mantém o seu bebê limpo.",
    img:"https://images.tcdn.com.br/img/img_prod/839010/babador_blw_manga_curta_ursinho_319_1_e49f6336ed28392019729ded0984285d.png" 
   }
]
function Cards() {
  return (
    <CardGroup>
      {servico.map(({titulo, preco, texto, img}) =>(
        <Card key={titulo}>
          <Card.Img variant='top' src={img}/>
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>
              {texto}
            </Card.Text>
            <Card.Text>
              {preco}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
);
}

export default Cards;