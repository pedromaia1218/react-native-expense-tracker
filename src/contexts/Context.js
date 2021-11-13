import React, { createContext, useState } from 'react'

const GlobalContext = createContext()
const GlobalProvider = props => {

    const [viewMode, setViewMode] = useState('list')
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [showMoreToggle, setShowMoreToggle] = useState(false)

    return (
        <GlobalContext.Provider value={{
            viewMode,
            setViewMode,
            selectedCategory,
            setSelectedCategory,
            showMoreToggle,
            setShowMoreToggle
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export { GlobalProvider }
export default GlobalContext