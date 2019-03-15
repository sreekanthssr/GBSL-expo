import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

import styles from '../style';
import Header from './common/header';
import Footer from './common/footer';


 class Home extends React.Component{
    render() {
        return (<View style={styles.container}>
                    <Header/>
                        <View style={styles.homeWrapper}>
                            <TouchableOpacity
                                style={styles.readyToDonateBtn}
                                onPress={() => this.props.navigation.navigate('Register')} >
                                <Text style={styles.readyToDonateBtnTxt}> Ready to donate Blood </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.requestBloodBtn}
                                onPress={() => this.props.navigation.navigate('RequestBlood')} >
                                <Text style={styles.requestBloodBtnTxt}> Request Blood </Text>
                            </TouchableOpacity>  
                        </View>
                    <Footer/>
                </View>);
    }
}

function mapStateToProps(state){
    return {
        test : state.test
    }
}

function mapDispatchToProps(dispatch){
    return{
        testFun : () => dispatch({'type':"test-button-click"})
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);