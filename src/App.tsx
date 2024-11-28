import './App.css'
import BasicTable from './components/basic-table'
import { User } from './components/interfaces/user'

const user: User = {
  name: 'John',
  age: 30,
  email: 'john@test.com'
}

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <BasicTable name="First table example" user={user} />
    </>
  )
}

export default App
