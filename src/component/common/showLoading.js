import React from 'react';
import {Text, View, Image, Modal} from 'react-native';
import {connect} from 'react-redux';


import styles from '../../style';

class Loader extends React.Component{
    render() {
        return (<Modal
            transparent={true}
            animationType={'none'}
            visible={this.props.showLoader}
            onRequestClose={() => {console.log('close modal')}}>
                <View   style={styles.ModelView}>
                    <View style={styles.loadingViewWrapper}>
                        <Image style={styles.loadingImage} source={require('../../icons/loader.gif')}/>
                        <Text style={styles.loadingText}>Loading... </Text>   
                    </View> 
                </View>                              
            </Modal>);
    }
}
const mapStateToProps = state => ({
    showLoader : state.showLoader    
});
export default connect(mapStateToProps)(Loader);
