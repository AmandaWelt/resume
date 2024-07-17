//functions & hooks from react neeeded 
import React, {createContext, useState, useContext} from 'react';

// creating context to pass data without having to pass props down manually at every level
const SidebarContext = createContext();

// comp that wraps around the app, using arrow function to keep track of status- use state 
export const SidebarProvider = ({ children }) => { //exporting so it can be used in other files {children prop}, nested components passed to sidebarprovider
    const [isSidebarOpen, setSidebarOpen] = useState(false) //keeping track of if its open w initial state of no/fasle
    const toggleSidebar = () => { //declares function 
        setSidebarOpen(!isSidebarOpen); //this is setting the state the opposite of its current state *!* toggles it one might say
    };
//giving the context the state and toggle function
    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar}}>
            {children}
        </SidebarContext.Provider>
    );
};

//HOOK !!! exporting the context to the app 

export const useSidebar = () => {
    return useContext(SidebarContext);
};