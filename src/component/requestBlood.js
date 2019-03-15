
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../style';
import Header from './common/header';
import Footer from './common/footer';

export default class RequestBlood extends React.Component{
    onPressLearnMore = () => {
        alert('Test 1');
    };
    render() {
        return (<View style={styles.container}>
                    <Header/>
                        <View style={styles.homeWrapper}>
                            <TouchableOpacity
                                style={styles.readyToDonateBtn}
                                onPress={() => this.props.navigation.navigate('Register')} >
                                <Text style={styles.readyToDonateBtnTxt}> RequestBlood </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.requestBloodBtn}
                                onPress={this.onPressLearnMore} >
                                <Text style={styles.requestBloodBtnTxt}> Request Blood </Text>
                            </TouchableOpacity>  
                        </View>
                    <Footer/>
                </View>);
    }
}
