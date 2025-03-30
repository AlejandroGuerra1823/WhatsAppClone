import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-svg'

interface PropChats {
    chatId: string;
    participants: string[];
    messages: {
        id: string;
        senderId: string;
        text: string;
        timestamp: string;
        status: string;
    }[];
}

const CardChat = () => {
    return (
        <View style={{ height: 20 ,width:'100%'}}>
            <Text>
                Holaa alejo
            </Text>
        </View>
    )
}

export default CardChat
