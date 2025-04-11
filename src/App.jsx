import './App.css'
import BackImage from './components/BackImage';
import Contador from './components/Contador';
import Montaje from './components/Montaje';
import Saludo from './components/Saludo';
import InputTexto from './components/TextoState';
import ToggleTema from './components/ToggleTema';
import UserCard from './components/UserCard';

function App() {
  return (
    <>
      <Saludo></Saludo>
      <UserCard 
      name='Barcelona' 
      country='Spain' 
      image="https://www.sopitas.com/wp-content/uploads/2020/05/escudo-barcelona-historia-significado.png">
      </UserCard>

      <UserCard 
      name='Inter Miami' 
      country='USA' 
      image="https://1000marcas.net/wp-content/uploads/2021/05/Inter-Miami-logo.png">
      </UserCard>

      <UserCard 
      name='Messi' 
      country='Argentina' 
      image="https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:16x9/messi-1805.jpg">
      </UserCard>
      
      <Contador></Contador>
      
      <InputTexto></InputTexto>

      <Montaje></Montaje>

      <ToggleTema></ToggleTema>

      <BackImage></BackImage>
    </>
  )
}

export default App
