import React from 'react';
import {Text,View,Image} from 'react-native';

import styles from '../../style';

export default class Footer extends React.Component{
    render() {
        return (<View  style={styles.footerWrapper}>
                    <Text>{'\u00A9'} SS</Text>                    
                </View>);
    }
}
