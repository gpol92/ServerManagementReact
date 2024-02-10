import { useState, useEffect } from 'react';
import axios from 'axios';

function Config() {
    const [servers, setServers] = useState([])
    const handleDelete = () => {
        axios.delete("http://localhost:3000/deleteServer")
        .then(response => console.log(response))
        .catch(error => console.error(error))
    }
    useEffect(() => {
    axios.get("http://localhost:3000/getServers")
      .then(response => {
        console.log(response.data);
        setServers(response.data);
      })
      .catch(error => console.error(error));
  }, []);

    return (
        <div>
        
        <h1>Servers</h1>
        <ul>
            {servers.map((server) => (
            <li key={server._id}>
                <h3>{server.nome}</h3>
                <h3>{server.indirizzoIP}</h3>
                <h3>{server.isOnline ? '🟢Online' : '🔴Offline'}</h3>
                <button onClick={handleDelete}>Cancella</button><br></br>
                <button>Test singolo</button>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default Config;