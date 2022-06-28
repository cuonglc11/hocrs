import React , {useRef} from "react"
import  {SafeAreaView , StyleSheet ,View , Animated , Text , PanResponder} from 'react-native'

const PanView =  () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          pan.setOffset({
            x: pan.x._value,
            y: pan.y._value
          });
        },
        onPanResponderMove: Animated.event(
          [
            null,
            { dx: pan.x, dy: pan.y }
          ]
        ),
        onPanResponderRelease: () => {
          pan.flattenOffset();
        //   alert(pan.x)
        console.log(pan);
        }
      })
    ).current;
  
    return (
        <View style={styles.container}>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }]
          }}
          {...panResponder.panHandlers}
        >
          <View style={styles.box} />
        </Animated.View>
      </View>
    )   
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   alignItems: "center",
    //   justifyContent: "center"
    },
    titleText: {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: "bold"
    },
    box: {
      height: 50,
      width: 50,
      backgroundColor: "blue",
      borderRadius: 100
    }
  });
export default  PanView