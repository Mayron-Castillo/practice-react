import './App.css'
import Saludo from './components/Saludo';
import UserCard from './components/UserCard';

function App() {
  return (
    <>
      <Saludo></Saludo>
      <UserCard name='Barcelona' country='Spain' image="https://www.sopitas.com/wp-content/uploads/2020/05/escudo-barcelona-historia-significado.png"></UserCard>
      <UserCard name='Inter Miami' country='USA' image="https://1000marcas.net/wp-content/uploads/2021/05/Inter-Miami-logo.png"></UserCard>
    </>
  )
}

export default App
