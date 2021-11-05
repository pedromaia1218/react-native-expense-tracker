import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../../constants'

import moment from 'moment'
import 'moment/locale/pt-br'

function Header() {

    const today = moment().locale('pt-br').format('D MMM, YYYY')

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
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>{today}</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>18% Mais que mês passado</Text>
                </View>
            </View>
        </View>
    )
}

export default Header