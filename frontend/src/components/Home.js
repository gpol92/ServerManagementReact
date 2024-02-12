import { useEffect} from "react";
import ServerDetails from '../components/ServerDetails';
import ServerForm from '../components/ServerForm';
import { useServersContext } from '../hooks/useServersContext'

const Home = () => {
    const { servers, dispatch } = useServersContext()
    useEffect(() => {
        const fetchServers = () => {
            fetch('/api/servers')
            .then(response => response.json().then(data=>dispatch({type: "SET_SERVERS", payload: data})))
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