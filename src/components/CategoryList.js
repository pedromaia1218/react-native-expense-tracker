import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native'
import { COLORS, FONTS, SIZES, icons, normalize } from '../../constants'

import categoriesData from '../../constants/categoriesData'

function CategoryList() {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <Image
                    source={item.icon}
                    style={{
                        width: normalize(30),
                        height: normalize(30),
                        tintColor: item.color
                    }}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <View>
                <FlatList
                    data={categoriesData}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    key={'_'}
                    numColumns={2}
                />
            </View>
        </View>
    )
}

export default CategoryList