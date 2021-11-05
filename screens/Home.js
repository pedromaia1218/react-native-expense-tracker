import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

import { COLORS, FONTS, SIZES, icons } from '../constants'
import categoriesData from '../constants/categoriesData'

const Home = () => {

    const [categories, setCategories] = React.useState(categoriesData)
    const [viewMode, setViewMode] = React.useState('chart')

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

    function renderHeader() {
        return (
            <View style={{
                paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding,
                backgroundColor: COLORS.white
            }}>
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>Meus gastos</Text>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.h3 }}>Sumário (privado)</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center' }}>
                    <View style={{
                        height: 50,
                        width: 50,
                        backgroundColor: COLORS.lightGray,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={icons.calendar}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: SIZES.padding }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>11 Nov, 2020</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>18% Mais que mês passado</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderCategoryHeaderSection() {
        return (
            <View style={{
                flexDirection: 'row', padding: SIZES.padding,
                justifyContent: 'space-between', alignItems: 'center'
            }}>
                {/* Title */}
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>CATEGORIAS</Text>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{categories.length} Total</Text>
                </View>
                {/* Buttons */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            height: 50,
                            width: 50,
                            backgroundColor: viewMode == 'chart' ? COLORS.secondary : null,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => setViewMode('chart')}
                    >
                        <Image
                            source={icons.chart}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == 'chart' ? COLORS.white : COLORS.darkgray
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: 50,
                            width: 50,
                            backgroundColor: viewMode == 'list' ? COLORS.secondary : null,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => setViewMode('list')}
                    >
                        <Image
                            source={icons.menu}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == 'list' ? COLORS.white : COLORS.darkgray
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
            {/* Nav bar section */}
            {renderNavBar()}

            {/* Header section */}
            {renderHeader()}

            {/* Category header section */}
            {renderCategoryHeaderSection()}
        </View>
    )
}

export default Home