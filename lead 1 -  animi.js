 const  leftValue =  useState(new Animated.Value(6))[0]
  const movelBall  =  () =>  {
   Animated.spring(leftValue , {
    toValue  : 300 ,
    // duration :  3000 ,
    useNativeDriver : false
   }).start()
   console.log(leftValue,"====================");
  }


  return (
   <View style={{flex : 1  , justifyContent :'center' , alignItems :'center'}}>
      <Animated.View
       style ={[{
        width  : 100 ,
        height : 100,
        marginLeft : leftValue ,
        borderRadius : 100/2,
        backgroundColor :'red'
       }]}
     />
       <TouchableOpacity
        onPress={movelBall}
      >

        <Text>
          Click  you
        </Text>
      </TouchableOpacity>
   </View>
    
  );
};


export default App;
