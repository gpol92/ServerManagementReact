import { useState } from "react"

const ServerForm = () => {
    const [nome, setNome] = useState('')
    const [indirizzoIP, setIndirizzoIP] = useState('')
    const [isOnline, setIsOnline] = useState(false);
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const server = {nome, indirizzoIP, isOnline} 
        const response = await fetch('/api/servers', {
            method: 'POST',
            body: JSON.stringify(server),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();

        if (!response.ok) {
            setError(json.error)
        }

        
        if (response.ok) {
            setNome('')
            setIndirizzoIP('')
            setIsOnline(false)
            setError(null)
            console.log("New server added", json)
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Aggiungi un server</h3>
            <label>Nome server</label>
            <input type="text" onChange={(e) => setNome(e.target.value)} value={nome}></input>
            <label>Indirizzo IP</label>
            <input type="text" onChange={(e) => setIndirizzoIP(e.target.value)} value={indirizzoIP}></input>
            <label>Online od Offline?</label>
            <input type="checkbox" onChange={(e) => setIsOnline(e.target.value)} value={isOnline}></input>

            <button>Aggiungi</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ServerForm;