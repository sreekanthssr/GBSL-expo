import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      height: Dimensions.get('window').height,
      paddingTop: 50,
      paddingLeft:10,
      paddingRight:10,
      paddingBottom: 50,
      flex: 1,
      alignItems: 'flex-start',
      justifyContent:'center',
      fontSize:12,
    },
    headerWrapper : {
      flexWrap: 'wrap', 
      alignItems: 'center',
      flexDirection:'row',
      margin: 10,
      justifyContent: 'flex-start'
    },
    footerWrapper : {
      flex: 1,
      justifyContent: 'flex-end'
    },
    logoImage:{
      width: 50,
      height: 50,
      flexDirection:'column'
    },
    appName : {
      flexDirection:'column',
      fontSize:24,
      color:'#330000',
      textAlign : 'center',
      paddingLeft: 10
    },
    homeWrapper : {      
      flex:1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
    },
    readyToDonateBtn : {
      padding:20,
      borderColor: '#cc0000',
      borderWidth: 1,
      marginBottom: 10
    },
    requestBloodBtn : {
      padding:20,
      borderColor: '#cc0000',
      borderWidth: 1,
    },
    readyToDonateBtnTxt : {
      color: '#cc0000',
      textAlign: 'center'
    },
    requestBloodBtnTxt : {
      color: '#cc0000',
      textAlign: 'center'
    },
    registerWrapper:{
      margin: 10
    },
    textInputView: {
      borderColor: '#CCCCCC',
      borderWidth: 1,
      padding: 10
    },
    textInput: {
      fontSize:15,
      width:200
    },    
    ModelView: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#00000040'
    },
    loadingViewWrapper: {
      backgroundColor: '#FFFFFF',
      height: 100,
      width: 100,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    loadingImage: {
      width: 50,
      height: 50,
      flexDirection:'column',
    },
    loadingText: {
      flexDirection:'column',
      fontSize:24,
      color:'#330000',
      textAlign : 'center',
      paddingLeft: 10
    },
    alertMessage:{
      fontSize:14,
      color:'#000000'
    },
    alert_success: {
      borderColor:'green',
      borderWidth:1,
      color: 'green',
      padding: 5,
      margin: 5
    },
    alert_info: {
      borderColor:'yellow',
      borderWidth:1,
      color: 'yellow',
      padding: 5,
      margin: 5
    },
    alert_warning: {
      borderColor:'orange',
      borderWidth:1,
      color: 'orange',
      padding: 5,
      margin: 5
    },
    alert_danger: {
      borderColor:'red',
      borderWidth:1,
      color: 'red',
      padding: 5,
      margin: 5
    },
    alertButton:{
      borderColor:'#666',
      padding:2,
      margin: 2,
      backgroundColor:'#ccc'
    },
    alertButtonText:{
      fontSize:14,
      color:'#666'
    },

  });
  export default styles;