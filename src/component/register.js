import React from 'react';
import {connect} from 'react-redux';
import { Text, View, TouchableOpacity, TextInput,  Picker } from 'react-native';
import { bindActionCreators } from 'redux';

import styles from '../style';
import Header from './common/header';
import Footer from './common/footer';
import {registerUser} from '../actions';

class Register extends React.Component {
    state = {
        name : '',
        phoneNumber : '',
        emailId : '',
        bloodGroup : 0
    };

    submitRegister = (state) => {
        let  name= state.name,
        phoneNumber= state.phoneNumber,
        emailId= state.emailId,
        bloodGroup= state.bloodGroup;
        console.log(JSON.stringify(state));
        if(name && phoneNumber && emailId && bloodGroup){            
            this.props.registerUser();
        }
        
    }

    render() {        
        return (<View style={styles.container}>
                    <Header/>                    
                    <View style={styles.registerWrapper}>
                            <View  style={styles.textInputView}>
                                <TextInput placeholder="Name" style={styles.textInput} onChangeText={name => this.setState({name})} value={this.state.name} />
                            </View>
                            <View  style={styles.textInputView}>
                                <TextInput placeholder="Phone number" style={styles.textInput}  onChangeText={phoneNumber => this.setState({phoneNumber})} value={this.state.phoneNumber} />
                            </View>
                            <View  style={styles.textInputView}>
                                <TextInput placeholder="Email" style={styles.textInput}  onChangeText={emailId => this.setState({emailId})} value={this.state.emailId} />
                            </View>
                            <View  style={styles.textInputView}>
                                <Picker 
                                    selectedValue={this.state.bloodGroup}
                                    mode="dropdown"
                                    onValueChange={(bloodGroupValue) =>
                                        this.setState({bloodGroup: bloodGroupValue})
                                      }>
                                    {this.props.bloodGroupList.map((item, index) => {
                                        return (<Picker.Item label={item} value={index} key={index}/>) 
                                    })}
                                </Picker>
                            </View>
                            <View style={styles.homeWrapper}>
                            <TouchableOpacity
                                style={styles.readyToDonateBtn}
                                onPress={() => this.submitRegister(this.state)} >
                                <Text style={styles.readyToDonateBtnTxt}> Submit </Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <Footer/>
                </View>);
    }
}
const mapStateToProps = state => ({
    bloodGroupList : state.bloodGroupList    
});
function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ registerUser }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
