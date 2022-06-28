/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect , useRef } from 'react';
 import {SafeAreaView, StyleSheet,View , Animated , Text, Easing} from 'react-native';
 const App = () => {
   const animtedValue  = useRef(new Animated.Value(-700)).current;
   // console.log(animtedValue.x._value , "animtedValue" );
   useEffect(() => {
           Animated.timing(animtedValue,{
             toValue : 0,
             duration : 2000,
             useNativeDriver : false,
             easing : Easing.bounce
           }).start()
   },[animtedValue])
 
   return (
     <SafeAreaView style={{flex : 1}}>
      <Animated.View
       style={{
         width : 100 ,
         height : 100 ,
         // marginTop : 100 ,
         marginLeft : animtedValue ,
         backgroundColor :'#19b5fe'
       }}
      
      />
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 