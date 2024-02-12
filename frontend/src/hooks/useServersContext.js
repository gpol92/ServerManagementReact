import { ServersContext } from "../context/ServersContext";
import { useContext } from 'react';

export const useServersContext = () => {
    const context = useContext(ServersContext);

    if (!context) {
        throw Error('useServersContext must be used inside a ServersContextProvider')
    }

    return context
}