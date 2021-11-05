import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

import { COLORS, FONTS, SIZES, icons } from '../constants'

const Home = () => {

    function renderNavBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.white
                }}
            >
                <TouchableOpacity
                    style={{ justifyContent: 'center', width: 58 }}
                    onPress={() => console.log('Back')}
                >
                    <Image
                        source={icons.back_arrow}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'flex-end', width: 58 }}
                    onPress={() => console.log('More')}
                >
                    <Image
                        source={icons.more}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
            {/* Nav bar section */}
            {renderNavBar()}

            {/* Header section */}
            {renderHeader()}
        </View>
    )
}

export default Home