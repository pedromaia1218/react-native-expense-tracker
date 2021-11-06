import React, { useContext } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

import { COLORS, FONTS, SIZES, icons } from '../../constants'
import ViewModeContext from '../contexts/ViewModeContext'

import NavBar from '../components/NavBar'
import Header from '../components/Header'
import CategoryHeaderSection from '../components/CategoryHeaderSection'
import CategoryList from '../components/CategoryList'

const Home = () => {

    const { viewMode, setViewMode } = useContext(ViewModeContext)

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
            {/* Nav bar section */}
            <NavBar />

            {/* Header section */}
            <Header />

            {/* Category header section */}
            <CategoryHeaderSection />

            {
                viewMode == 'list'
                    ?
                    <View>
                        <CategoryList />
                    </View>
                    :
                    <View>
                        <Text>chart comp</Text>
                    </View>
            }
        </View>
    )
}

export default Home