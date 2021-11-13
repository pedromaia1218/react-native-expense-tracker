import React, { useContext, useRef } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    StyleSheet,
    Animated
} from 'react-native'
import { COLORS, FONTS, SIZES, normalize, icons } from '../../constants'

import GlobalContext from '../contexts/Context'
import categoriesData from '../../constants/categoriesData'

function CategoryList() {

    const { 
        setSelectedCategory, 
        showMoreToggle,
        setShowMoreToggle 
    } = useContext(GlobalContext)

    const categoryListHeightAnimatedValue = useRef(new Animated.Value(normalize(95))).current

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: '1%',
                    paddingVertical: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: normalize(5),
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                }}
                onPress={() => setSelectedCategory(item)}
            >
                <Image
                    source={item.icon}
                    style={{
                        width: normalize(20),
                        height: normalize(20),
                        tintColor: item.color
                    }}
                />
                <Text style={{
                    marginLeft: SIZES.base,
                    color: COLORS.primary,
                    ...FONTS.h4
                }}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ paddingHorizontal: SIZES.padding }}>
            <Animated.View style={{ height: categoryListHeightAnimatedValue }}>
                <FlatList
                    data={categoriesData}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    key={'_'}
                    numColumns={2}
                />
            </Animated.View>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    marginVertical: SIZES.base,
                    justifyContent: 'center'
                }}
                onPress={() => { 
                    if(showMoreToggle){
                        Animated.timing(categoryListHeightAnimatedValue, {
                            toValue: normalize(98),
                            duration: 300,
                            useNativeDriver: false
                        }).start()
                    }else{
                        Animated.timing(categoryListHeightAnimatedValue, {
                            toValue: normalize(150),
                            duration: 300,
                            useNativeDriver: false
                        }).start()
                    }
                    setShowMoreToggle(!showMoreToggle) 
                }}
            >
                <Text style={{ ...FONTS.body4 }}>{showMoreToggle ? "LESS" : "MORE"}</Text>
                <Image source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
                    style={{
                        marginLeft: normalize(5),
                        width: normalize(15),
                        height: normalize(15),
                        alignSelf: 'center'
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: normalize(4)
    }
})

export default CategoryList