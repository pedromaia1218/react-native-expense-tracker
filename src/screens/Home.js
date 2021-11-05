import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

import { COLORS, FONTS, SIZES, icons } from '../../constants'

import NavBar from '../components/NavBar'
import Header from '../components/Header'
import CategoryHeaderSection from '../components/CategoryHeaderSection'

const Home = () => {   

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
            {/* Nav bar section */}
            <NavBar />

            {/* Header section */}
            <Header />

            {/* Category header section */}
            <CategoryHeaderSection />
        </View>
    )
}

export default Home