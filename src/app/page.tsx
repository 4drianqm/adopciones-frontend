import axios from 'axios'
import {parsedEnv} from '../../env'

interface User{
  id: number;
  name: string;
  lastname: string;
  email: string;
  address: string;
  password: string
}



export default async function Home() {

  const response = await axios.get<User[]>(`${parsedEnv.API_URL}/users`);

  return (
      <main>
        <h1>
          <ul>
            {response.data.map(user=>(
              <li key={user.id}>{`${user.id} - ${user.name}, ${user.lastname}`}</li>
            ))}
          </ul>
        </h1>
      </main>
    
  );
}
