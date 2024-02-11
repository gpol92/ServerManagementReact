import { useEffect, useState } from "react";
import ServerDetails from '../components/ServerDetails';
import ServerForm from '../components/ServerForm';

const Home = () => {
    const [servers, setServers] = useState([])
    useEffect(() => {
        const fetchServers = () => {
            fetch('/api/servers')
            .then(response => response.json().then(data=>setServers(data)))
            .catch((error) => {
                console.log(error)
            }
        )}
        fetchServers()
    }, [])
    return (
        <div className="Home">
            <div className="servers">
                {servers && servers.map((server) => (
                    <ServerDetails key={server._id} server={server} />
                ))}
            </div>
            <ServerForm />
        </div>
    )
}

export default Home;