import React from 'react';
import {Text,View,Image} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import DeviceInfo from 'react-native-device-info';

import styles from '../../style';
import {setDeviceId} from '../../actions';

class Header extends React.Component{
    componentDidMount(){
        var deviceSerial =0;
        try {
            if(Expo.Constants.appOwnership == 'expo')
            {
                console.log('Running in expo');
                deviceSerial = Expo.Constants.deviceId;
            }
            else
            {
                var DeviceInfo = require('react-native-device-info');
                deviceSerial = DeviceInfo.getUniqueID();
            }
            console.log('DEVICE ID FOUND: '+deviceSerial);
            this.props.setDeviceId(deviceSerial);
        }
        catch(e)
        {
            console.log('error reading device ID');
            deviceSerial =1;
        }
          
    }

    render() {
        return (<View style={styles.headerWrapper}>
                    <Image style={styles.logoImage} source={require('../../icons/small-icon.png')}/>
                    <Text style={styles.appName}>Give blood, Save Life </Text>                    
                </View>);
    }
}
const mapStateToProps = state => ({
    deviceId : state.deviceId    
  });
const mapDispatchToProps = (dispatch) =>{
    return {
        ...bindActionCreators({ setDeviceId }, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
