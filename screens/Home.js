import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

import { COLORS, FONTS, SIZES, icons } from '../constants'

const Home = () => {

    // dummy data
    const confirmStatus = "C"
    const pendingStatus = "P"

    let categoriesData = [
        {
            id: 1,
            name: "Education",
            icon: icons.education,
            color: COLORS.yellow,
            expenses: [
                {
                    id: 1,
                    title: "Tuition Fee",
                    description: "Tuition fee",
                    location: "ByProgrammers' tuition center",
                    total: 100.00,
                    status: pendingStatus
                },
                {
                    id: 2,
                    title: "Arduino",
                    description: "Hardward",
                    location: "ByProgrammers' tuition center",
                    total: 30.00,
                    status: pendingStatus
                },
                {
                    id: 3,
                    title: "Javascript Books",
                    description: "Javascript books",
                    location: "ByProgrammers' Book Store",
                    total: 20.00,
                    status: confirmStatus
                },
                {
                    id: 4,
                    title: "PHP Books",
                    description: "PHP books",
                    location: "ByProgrammers' Book Store",
                    total: 20.00,
                    status: confirmStatus
                }
            ],
        },
        {
            id: 2,
            name: "Nutrition",
            icon: icons.food,
            color: COLORS.lightBlue,
            expenses: [
                {
                    id: 5,
                    title: "Vitamins",
                    description: "Vitamin",
                    location: "ByProgrammers' Pharmacy",
                    total: 25.00,
                    status: pendingStatus,
                },

                {
                    id: 6,
                    title: "Protein powder",
                    description: "Protein",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: confirmStatus,
                },

            ],
        },
        {
            id: 3,
            name: "Child",
            icon: icons.baby_car,
            color: COLORS.darkgreen,
            expenses: [
                {
                    id: 7,
                    title: "Toys",
                    description: "toys",
                    location: "ByProgrammers' Toy Store",
                    total: 25.00,
                    status: confirmStatus,
                },
                {
                    id: 8,
                    title: "Baby Car Seat",
                    description: "Baby Car Seat",
                    location: "ByProgrammers' Baby Care Store",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 9,
                    title: "Pampers",
                    description: "Pampers",
                    location: "ByProgrammers' Supermarket",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 10,
                    title: "Baby T-Shirt",
                    description: "T-Shirt",
                    location: "ByProgrammers' Fashion Store",
                    total: 20.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 4,
            name: "Beauty & Care",
            icon: icons.healthcare,
            color: COLORS.peach,
            expenses: [
                {
                    id: 11,
                    title: "Skin Care product",
                    description: "skin care",
                    location: "ByProgrammers' Pharmacy",
                    total: 10.00,
                    status: pendingStatus,
                },
                {
                    id: 12,
                    title: "Lotion",
                    description: "Lotion",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: confirmStatus,
                },
                {
                    id: 13,
                    title: "Face Mask",
                    description: "Face Mask",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
                {
                    id: 14,
                    title: "Sunscreen cream",
                    description: "Sunscreen cream",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 5,
            name: "Sports",
            icon: icons.sports_icon,
            color: COLORS.purple,
            expenses: [
                {
                    id: 15,
                    title: "Gym Membership",
                    description: "Monthly Fee",
                    location: "ByProgrammers' Gym",
                    total: 45.00,
                    status: pendingStatus,
                },
                {
                    id: 16,
                    title: "Gloves",
                    description: "Gym Equipment",
                    location: "ByProgrammers' Gym",
                    total: 15.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 6,
            name: "Clothing",
            icon: icons.cloth_icon,
            color: COLORS.red,
            expenses: [
                {
                    id: 17,
                    title: "T-Shirt",
                    description: "Plain Color T-Shirt",
                    location: "ByProgrammers' Mall",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 18,
                    title: "Jeans",
                    description: "Blue Jeans",
                    location: "ByProgrammers' Mall",
                    total: 50.00,
                    status: confirmStatus,
                },
            ],
        }
    ]

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