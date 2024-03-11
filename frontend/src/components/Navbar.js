import { Link } from 'react-router-dom'
import { useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root');
const Navbar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [pingResults, setPingResults] = useState([])

    const handlePing = () => {
        fetch('http://localhost:3000/api/servers/ping')
        .then(response => response.json())
        .then(data => {
            console.log(data.Servers[0].Server)
            console.log(data.Servers[0].Status)
            setPingResults(data.Servers)
            setModalIsOpen(true)
            console.log(pingResults);
        })
        .catch(error => console.log(error))
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Server panel</h1>
                </Link>
            </div>
            <button className="Ping" onClick={handlePing}>Ping</button>

            <Modal
                isOpen = {modalIsOpen}
                onRequestClose={closeModal}
                contentLabel = "Ping results"
            >
                <h2>Ping results</h2>
                {pingResults.map((server, index) => (
                    <div key={index}>
                        <p>{`Server: ${server.Server}, Status: ${server.Status}`}</p> 
                    </div>
                ))}
                <button onClick={closeModal}>Close</button>
            </Modal>
        </header>
    )
}

export default Navbar;