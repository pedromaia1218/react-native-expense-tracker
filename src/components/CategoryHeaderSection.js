import React, { useContext } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import { COLORS, FONTS, SIZES, icons, normalize } from '../../constants'

import categoriesData from '../../constants/categoriesData'
import GlobalContext from '../contexts/Context'

function CategoryHeaderSection() {

    const { viewMode, setViewMode } = useContext(GlobalContext)

    return (
        <View style={{
            flexDirection: 'row', padding: SIZES.padding,
            justifyContent: 'space-between', alignItems: 'center'
        }}>
            {/* Title */}
            <View>
                <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>CATEGORIAS</Text>
                <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{categoriesData.length} Total</Text>
            </View>
            {/* Buttons */}
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        height: normalize(50),
                        width: normalize(50),
                        backgroundColor: viewMode == 'chart' ? COLORS.secondary : null,
                        borderRadius: normalize(25),
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => setViewMode('chart')}
                >
                    <Image
                        source={icons.chart}
                        resizeMode='contain'
                        style={{
                            width: normalize(20),
                            height: normalize(20),
                            tintColor: viewMode == 'chart' ? COLORS.white : COLORS.darkgray
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: normalize(50),
                        width: normalize(50),
                        backgroundColor: viewMode == 'list' ? COLORS.secondary : null,
                        borderRadius: normalize(25),
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => setViewMode('list')}
                >
                    <Image
                        source={icons.menu}
                        resizeMode='contain'
                        style={{
                            width: normalize(20),
                            height: normalize(20),
                            tintColor: viewMode == 'list' ? COLORS.white : COLORS.darkgray
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CategoryHeaderSection