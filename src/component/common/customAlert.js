import React from 'react';
import {Text, View, TouchableOpacity, Modal} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {customAlertClose} from '../../actions';


import styles from '../../style';

class CustomAlert extends React.Component{
    /*success, info, warning  or danger */
    alertType = 'alert_'+(this.props.alertType || 'info');

    
    render() {
        return (<Modal
            transparent={true}
            animationType={'none'}
            visible={this.props.alertShow}
            onRequestClose={() => {}}>
                <View style={styles.ModelView}>
                    <Text style={[styles.alertMessage,styles[this.alertType]]}>{this.props.alertMessage}</Text>
                    <TouchableOpacity onPress = {() => this.props.customAlertClose()} 
                        style={styles.alertButton}>
                        <Text style={styles.alertButtonText}>Ok</Text>
                    </TouchableOpacity>
                </View>                              
            </Modal>);
    }
}
const mapStateToProps = state => ({
    alertShow : state.alertShow,
    alertMessage : state.alertMessage,
    alertType : state.alertType    
});
function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ customAlertClose }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomAlert);
