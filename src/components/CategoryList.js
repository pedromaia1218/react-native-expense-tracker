import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../../constants'

import categoriesData from '../../constants/categoriesData'

function CategoryList() {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <Image
                    source={item.icon}
                    style={{
                        width: 30,
                        height: 30,
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