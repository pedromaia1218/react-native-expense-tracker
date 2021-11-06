import React, { createContext, useState } from 'react'

const ViewModeContext = createContext()
const ViewModeProvider = props => {

    const [viewMode, setViewMode] = useState('chart')

    return (
        <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
            {props.children}
        </ViewModeContext.Provider>
    )
}

export { ViewModeProvider }
export default ViewModeContext