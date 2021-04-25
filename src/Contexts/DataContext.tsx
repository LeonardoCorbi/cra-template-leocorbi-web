import React, { createContext, ReactNode } from 'react'
import { DataContextProps } from '../interfaceProps'

interface DataProviderProps {
  children: ReactNode
}

export const DataContext = createContext({} as DataContextProps) // Declare all functions in interfaceProps.ts

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {

  // Create constant functions 
  
  return (
    <DataContext.Provider value={{
      // constant functions name
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider