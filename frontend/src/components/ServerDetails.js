import { useServersContext } from "../hooks/useServersContext";

const ServerDetails = ( {server }) => {
    const { dispatch } = useServersContext()
    
    const handlePing = async () => {
        console.log("Pinging")
    }
    const handleClick = async () => {
        const response = await fetch('/api/servers/' + server._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if(response.ok) {
            dispatch({type: 'DELETE_SERVER', payload: json})
        }
    }
    return (
        <div className="server-details">
            <h4>{server.nome}</h4>
            <h5>{server.indirizzoIP}</h5>
            {server.isOnline ? <h5>🟢 Online</h5> : <h5>🔴 Offline</h5>}
            <button onClick={handlePing}>Ping</button>
            <span onClick={handleClick}>Cancella</span>
        </div>
    )

}

export default ServerDetails;