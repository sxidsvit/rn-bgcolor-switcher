import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { generateBackgroundAndTextColor } from './../utils/bgcolors'

export default function Home() {
  const [textColor, setTextColor] = useState('#000000')
  const [bgColor, setBgColor] = useState('#FFFFFF')

  const changeBackgroundColor = () => {
    const { bgColor, textColor } = generateBackgroundAndTextColor()
    setTextColor(textColor)
    setBgColor(bgColor)
  }

  return (
    <SafeAreaView
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <TouchableWithoutFeedback onPress={changeBackgroundColor}>
        <View className="flex-1 justify-center items-center">
          <Text className="text-4xl font-bold" style={{ color: textColor }}>
            Hello World
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}
