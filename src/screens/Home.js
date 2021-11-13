import React, { useContext } from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'

import { COLORS, } from '../../constants'
import GlobalContext from '../contexts/Context'

import NavBar from '../components/NavBar'
import Header from '../components/Header'
import CategoryHeaderSection from '../components/CategoryHeaderSection'
import CategoryList from '../components/CategoryList'

const Home = () => {

    const { viewMode } = useContext(GlobalContext)

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
            {/* Nav bar section */}
            <NavBar />

            {/* Header section */}
            <Header />

            {/* Category header section */}
            <CategoryHeaderSection />

            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                {
                    viewMode == 'list' &&
                        <View>
                            <CategoryList />
                        </View>
                }
            </ScrollView>
        </View>
    )
}

export default Home