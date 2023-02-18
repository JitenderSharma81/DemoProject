// import React from 'react';
import { TextInput,Picker,ScrollView, TouchableOpacity,Text, View,Image, StyleSheet} from 'react-native';
import React, { useState } from "react";
// import { View, Picker, StyleSheet } from "react-native";
// import { SearchBar } from 'react-native-elements';

// import styles from './styles';
import { data} from '../../data/data';
import SearchList from './SearchList';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Images from '../../constants/Images';
import Colors from '../../constants/Colors';
import MenuImage from '../../components/MenuImage/MenuImage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SearchMatchScreen from '../SearchMatch/SearchMatchScreen';
export default class SearchScreen extends React.Component {
  state = {
    search: '',
  };

  static navigationOptions = ({ navigation }) => {
    return {
      //Heading/title of the header
      title: navigation.getParam('Title', 'Search Your Match'),
      //Heading style
      headerStyle: {
        backgroundColor: navigation.getParam('BackgroundColor', Colors.PrimaryColor),
      },
      //Heading text color
      headerTintColor: navigation.getParam('HeaderTintColor', Colors.headerTitleColor),
      headerRight: () => (
            // <TouchableOpacity onPress={() => alert("right button clicked")}>
           // <View style={{marginRight:15}}>
    // <Image resizeMode="contain" style={{width: wp('8%'), height: wp('8%')}}
             // source = {Images.headerMenu}
        // />
		// </View> 
        // </TouchableOpacity>
		 <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
          ),

     headerLeft: () => (
        <View style={{marginLeft:15}}>
			{/*}
    <Image resizeMode="contain" style={{width: wp('12%'), height: wp('12%')}}
             source = {require('../../../assets/or.png')}
	/>*/}
		
</View> 
      ),
    };
  };
//   static navigationOptions = {
//     headerShown: false,
// };
that = this;
constructor(props) {
    super(props);
    this.state = {
        maritalStatus: '',
        height: '',
        education: '',
        employedIn: '',
        city: '',
        gothram: '',
        caste: '',
              
    };

    const { navigation } = props;

}

goToNextScreen() {
// var name =JSON.stringify(this.props.navigation.getParam('name', 'NO-ID')).replace(/\"/g, "");
// var email = JSON.stringify(this.props.navigation.getParam('email', 'NO-ID'));

// retriving object parameter value.
const UserProfileStep1Data = this.props.navigation.getParam('UserProfileStep1Data', 'NO-ID')

// console.log('UserProfileStep1Data ===== ',UserProfileStep1Data);
// var email = JSON.stringify(this.props.navigation.getParam('UserProfileStep1Data.email', 'NO-ID'));

// retriving registered user ID.
var userID = JSON.stringify(this.props.navigation.getParam('UserProfileStep1Data.userID', 'NO-ID'));
console.log('UserProfileStep1Data user ID ===== ',UserProfileStep1Data.userID);

// fetch('http://192.168.43.152/sindhiwedapi/userProfileStep1Api.php', {
//   method: 'POST',
//   headers: {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
 
//   userID: UserProfileStep1Data.userID,   // retriving registered user Id.
//   height: this.state.height,
//   education: this.state.education,
//   employedIn: this.state.employedIn,
//   caste: this.state.caste,
//   city: this.state.city,
//   address: this.state.address,
//   gothram: this.state.gothram
//   })
 
// }).then((response) => response.json())
//     .then((responseJson) => {
 
//     // If server response message same as Data Matched
//      if(responseJson.result === 'Record Inserted')
//     {
 
 
//  var UserProfileStep2Data = {
//   userID: UserProfileStep1Data.userID,    // retriving registered user Id.
//   height: this.state.height,
//   education: this.state.education,
//   employedIn: this.state.employedIn,
//   caste: this.state.caste,
//   city: this.state.city,
//   gothram: this.state.gothram
//    }
//       //Then open Profile activity and send user email to profile activity.
//       // this.props.navigation.navigate('Second', { Email: UserEmail });
//         //Alert.alert('user Authorized');
      
//       // this.props.navigation.navigate("UserProfileStep1",{name: this.state.name,email:this.state.email});
//       // passing object as parameter .
//       //navigate to UserProfileStep2 component.
//     this.props.navigation.navigate('UserProfileStep2',{UserProfileStep1Data,UserProfileStep2Data});

//     }
//     else{
 
//       Alert.alert(responseJson+'fail');
//     }
 
//     }).catch((error) => {
//     console.error(error);
//     });
console.log('-----------------');
    
   console.log('height = ', this.state.height);
   console.log('education = ',this.state.education);
   console.log('employedIn = ', this.state.employedIn);
   console.log('city = ', this.state.city);
  console.log('gothram = ', this.state.gothram);
  console.log('caste = ', this.state.caste);
  var UserProfileStep2Data = {
  userID: userID,
  height: this.state.height,
  education: this.state.education,
  employedIn: this.state.employedIn,
  gothram: this.state.gothram,
  city: this.state.city,
  caste: this.state.caste
  }
    //navigate to UserProfileStep2 component.
    // this.props.navigation.navigate('LoginNar',{UserProfileStep1Data,UserProfileStep2Data});
    console.log('paddsed data to searchmachscreen')
    // sending serach match screen data.
    this.props.navigation.navigate('SearchMatchScreen',{UserProfileStep2Data});
    // console.log('paddsed data to searchmachscreen====')

}

render() {

    return (
         <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center'}}>
  
<View>
  <KeyboardAwareScrollView>
      <View style={styles.tile}>
                
                    <TextInput
                        style={styles.searchTextInput}
                        placeholder="Height"
          keyboardType={'numeric'}
                        placeholderTextColor={Colors.placeholderTextColor}
                        autoCorrect={false}
                        secureTextEntry={false}
                        onChangeText={(height) => this.setState({ height })}
                        value={this.state.height}
                    />
                </View>
                <View style={styles.tile}>
               
                <TextInput
                            style={styles.searchTextInput}
                            placeholder="Education"
                            placeholderTextColor= {Colors.placeholderTextColor}
                            autoCorrect= {false}
                            onChangeText={(education) => this.setState({education})}
                            value={this.state.education}
                        />
                </View>     
                <View style={styles.tile}>
                
                    <TextInput
                        style={styles.searchTextInput}
                        placeholder="Employed In"
                        placeholderTextColor={Colors.placeholderTextColor}
                        autoCorrect={false}
                        onChangeText={(employedIn) => this.setState({ employedIn })}
                        value={this.state.employedIn}
                    />
                </View>
      <View style={styles.tile}>
               
                    <TextInput
                        style={styles.searchTextInput}
                        placeholder="Caste"
                        placeholderTextColor={Colors.placeholderTextColor}
                        autoCorrect={false}
                        onChangeText={(caste) => this.setState({ caste })}
                        value={this.state.caste}
                    />
                </View>
      <View style={styles.tile}>
               
                    <TextInput
                        style={styles.searchTextInput}
                        placeholder="City"
          placeholderTextColor={Colors.placeholderTextColor}
                        autoCorrect={false}
                        onChangeText={(city) => this.setState({ city })}
                        value={this.state.city}
                    />
                </View>
      <View style={styles.tile}>
               
                    <TextInput
                        style={styles.searchTextInput}
                        placeholder="Gothram"
          placeholderTextColor={Colors.placeholderTextColor}
                        autoCorrect={false}
                        onChangeText={(gothram) => this.setState({ gothram })}
                        value={this.state.gothram}
                    />
                </View>
<TouchableOpacity activeOpacity={1}
    onPress={() => this.goToNextScreen()}>
<View style ={{width: 'auto',
        height: 40,
        marginTop: wp('12%'),
        marginHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1.0,
        borderColor: 'black', 
        backgroundColor: Colors.buttonBackgroundColor,
        borderRadius: wp('8%'),
        alignItems: 'center',
        justifyContent: 'center'}}>
  <Text style ={{color:Colors.buttonTextColor}}> SEARCH DESIRE PARTNER</Text> 
</View>
</TouchableOpacity>
</KeyboardAwareScrollView>
</View>
</View>
    );
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
},

searchTextInput: {
    height: wp('10.33%'),
    marginTop: wp('2.5%'),
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    borderColor: 'gray',
    width: '100%',
    borderRadius: 0,
    fontSize: wp('5.33%'),
    paddingBottom: 0,
    fontFamily: "CharlieDisplay-Regular"

},
tileIcon: {
    width: wp('8%'),
    height: wp('10.33%'),
    marginTop: wp('2.5%'),
    marginLeft: 10
},



orTile: {
    backgroundColor: 'transparent',
    width: 'auto',
    height: wp('8%'),
    marginTop: wp('4%'),
    marginHorizontal: wp('5.33%'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
},
touchableForgotPassword: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 0,
    height: 30


},
forgot: {
    color: '#f05798',
    fontSize: 18,
    fontFamily: "CharlieDisplay-Regular"
},
tileIcon: {
    width: 18,
    height: 40,
    marginTop: -5,
    marginLeft: 0
},
tile: {
    backgroundColor: 'transparent',
    width: 'auto',
    height: 40,
    marginTop: wp('5.33%'),
    marginHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderColor: Colors.PrimaryColor
},
searchTextInput: {
    height: 40,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    borderColor: 'gray',
    borderRadius: 0,
    fontSize: wp('4.8%'),
    fontFamily: "CharlieDisplay-Regular",
    paddingBottom: 5,

},
touchableForgotPassword: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 0,
    height: 30


},
arrowTile: {

    backgroundColor: 'transparent',
    width: 'auto',
    height: wp('16%'),
    marginTop: wp('8%'),
    marginBottom: 10,
    right: 20,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0,
    borderColor: '#818e97'
},
touchableArrow: {
    backgroundColor: '#f05798',
    position: 'absolute',
    right: 0,
    height: wp('16%'),
    width: wp('16%'),
    borderRadius: wp('8%'),
    justifyContent: 'center',
    alignItems: 'center'
},
arrowIcon: {
    width: wp('9.33%'),
    height: wp('9.33%')
},
txtAlready: {
    color: Colors.buttonTextColor,
    fontSize: 18,
    fontFamily: "CharlieDisplay-Regular"
},
txtSignIn: {
    color: Colors.buttonTextColor,
    fontSize: 18,
    fontFamily: "CharlieDisplay-Semibold"
},
});

// import React, { useState } from "react";
// import { View, Text,Picker, StyleSheet } from "react-native";

// const App = () => {
//   const [selectedValue, setSelectedValue] = useState("java1");
//   return (
//     <View style={styles.container}>
//       <Picker
//         selectedValue={selectedValue}
//         style={{ height: 50, width: 150 }}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//       >
//         <Picker.Item label="Java1" value="java1" />
//         <Picker.Item label="JavaScript1" value="js1" />
//         <Picker.Item label="Java2" value="java2" />
//         <Picker.Item label="JavaScript2" value="js2" /> 
//         <Picker.Item label="Java3" value="java3" />
//         <Picker.Item label="JavaScript3" value="js" />
//       </Picker>
//       <Text>{ selectedValue }</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     alignItems: "center"
//   }
// });

// export default App;