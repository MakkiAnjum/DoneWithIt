import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    { id: 1, title: 'T1', description: 'D1', image: require('../assets/makki.jpg') },
    { id: 2, title: 'T2', description: 'D2', image: require('../assets/makki.jpg') },
]

function MessagesScreen(props) {
    const [messages, setMessage] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        setMessage(messages.filter(m => m.id !== message.id))
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('es', item.description)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />} />
                )}
                ItemSeparatorComponent={() => <ListItemSeparator />}
                refreshing={refreshing}
                onRefresh={() => setMessage([{ id: 2, title: 'T2', description: 'D2', image: require('../assets/makki.jpg') }])} />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;