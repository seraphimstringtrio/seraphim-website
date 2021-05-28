/**
 * This is used to store useContext variables
 */

import React from 'react';

export const StoreContext = React.createContext(null);

const useContextStore = ({ children }) => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    // Keep track of window width for nav bar display type
    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize)
    });

    const store = {
        windowWidth: [windowWidth, setWindowWidth]
    }
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default useContextStore;
