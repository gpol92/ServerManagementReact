const ServerDetails = ( {server }) => {
    return (
        <div className="server-details">
            <h4>{server.nome}</h4>
            <h5>{server.indirizzoIP}</h5>
            {server.isOnline ? <h5>🟢 Online</h5> : <h5>🔴 Offline</h5>}
        </div>
    )

}

export default ServerDetails;