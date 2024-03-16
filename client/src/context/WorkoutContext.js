import { createContext } from "react";

import React from 'react'

export const WorkoutContext = createContext();
 export const WorkoutContextProvider = ({children})=>{
    return(
        <WorkoutContext.Provider value={{workouts : []}}>
            {children}
        </WorkoutContext.Provider>
    )
}

