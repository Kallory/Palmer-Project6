import { Component} from 'react';
import store from '../../redux/index';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text
} from 'react-native'



export default class Album extends Component {

    
    render() { 
        const contents = JSON.stringify(store.getState());
        return (
            <Text>{contents}</Text>
        );
    }
}