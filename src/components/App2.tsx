import { useEffect, useState } from 'react';
import BasicTable from './basic-table'
import { User } from './interfaces/user'
import { fetchUsers, fetchUserById } from '../services/userService';
import SecondScreen from './second-screen';
import ConditionalComponent from './conditional-component';

const user: User = {
  id: '1',
  name: 'John',
  age: 30,
  email: 'john@test.com'
}

function App2() {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Apel pentru a obține toți utilizatorii
  useEffect(() => {
    const controller = new AbortController(); // Control pentru anularea fetch-ului
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users: ' + err);
      }
    };

    getUsers();

     // Cleanup: Anulează fetch-ul dacă componenta este demontată
     return () => controller.abort();
  }, []);

  // Apel pentru a obține un utilizator după ID
  const handleFetchUserById = async (id: string) => {
    try {
      const user = await fetchUserById(id);
      setSelectedUser(user);
    } catch (err) {
      setError('Failed to fetch user: ' + err);
    }
  };

  return (
    <>
      <h1>Vite + React</h1>
      <BasicTable name="First table example" user={user} />
      <SecondScreen />
      <ConditionalComponent />

      <div>
      <h1>User List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            {user.name} <button onClick={() => handleFetchUserById(user.id)}>View Details</button>
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
        </div>
      )}
    </div>
    </>
  )
}

export default App2;
