import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import './styles/tailwind.css'
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
    <Pressable
      onPress={changeBackgroundColor}
      className="flex-1 items-center justify-center max-h-screen"
      style={{ backgroundColor: bgColor }}
    >
      <View className="flex-1 items-center justify-center max-h-screen">
        <Text className="text-4xl font-bold" style={{ color: textColor }}>
          Hello World
        </Text>
      </View>
    </Pressable>
  )
}
