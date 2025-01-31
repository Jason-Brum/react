import logo from './logo.svg';
import './App.css';
import City from "./assets/city.jpg"
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import UserDetails from './components/UserDetails';

function App() {
const name = "Zé"
const cars = [
  {id: 1, brand: "Fiat", color: "azul", novo: true, km: 0},
  {id: 2, brand: "Hyundai", color: "branco", novo: false, km: 45000},
  {id: 3, brand: "Peugeot", color: "Verde", novo: true, km: 0}
]

const users = [
  {id: 1, name: "Jason", city: "Rio de Janeiro" , gender: "Masc", age: 47 },
  {id: 2, name: "Pâmela", city: "Maceió" , gender: "Fem", age: 39 },
  {id: 3, name: "Murilo", city: "Curitiba" , gender: "Masc", age: 38 },
  {id: 3, name: "Enzo", city: "São Paulo" , gender: "Masc", age: 17},


];

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem localizada em public*/}
      <div>
        <img src="/img1.jpg" alt="Por do sol Jeri" />
      </div>
      {/*imagem em assets*/}
      <div>
        <img src={City} alt="Foto da cidade de Hamburgo" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*Props*/}
      <ShowUserName name={name}/>
      {/*Destructuring*/}
      <CarDetails brand="Ford" km={2.200} color="Prata" novo={false}/>
      {/*reaproveitando componentes*/}
      <CarDetails brand="Renault" km={0} color="Laranja" novo={true}/>
      <CarDetails brand="Chevrolet" km={10.000} color="Preto" novo={false}/>
      {/*loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails 
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        novo={car.novo}/>
      ))}

      {/* fragment */}
      <Fragment propFragment="teste" />

      {/* children */}
      <Container>   
        <p>Este é o conteúdo</p>    
      </Container>


      {/* desafio */}
      {users.map((user) => (
        <UserDetails 
        key={user.id} 
        name={user.name} 
        city={user.city} 
        gender={user.gender}
        age={user.age} />
      )
    
    )}



    </div>
  );
}

export default App;
