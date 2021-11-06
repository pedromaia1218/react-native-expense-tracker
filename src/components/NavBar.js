import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import { COLORS, FONTS, SIZES, icons, normalize } from '../../constants'

function NavBar() {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: '7%',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white
            }}
        >
            <TouchableOpacity
                style={{ justifyContent: 'center', width: normalize(58) }}
                onPress={() => console.log('Back')}
            >
                <Image
                    source={icons.back_arrow}
                    style={{
                        width: '40%',
                        height: '40%',
                        tintColor: COLORS.primary
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'flex-end', width: normalize(58) }}
                onPress={() => console.log('More')}
            >
                <Image
                    source={icons.more}
                    style={{
                        width: '40%',
                        height: '40%',
                        tintColor: COLORS.primary
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default NavBar