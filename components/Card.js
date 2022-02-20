import React , { useState , useLayoutEffect } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { usePrevious } from "react-use-previous";
import { Animated } from "react-native-web";


const Card = ({color , onPress}) => {
 const [animation] = useState(new Animated.Value(0));
 const prevColor = usePrevious(color)?.current || color;

 useLayoutEffect(() => {
   animation.setValue(0);
   Animated.timing(animation, {
     toValue: 1,
     duration: 1000,
     useNativeDriver: false,
   }).start();
 }, [color]);

 return (
   <TouchableOpacity
     style={{
       width: "50%",
       height: 180,
       padding: 5,
     }}
     onPress={onPress}
   >
     <View
       style={{
         padding: 5,
         backgroundColor: "#FFF",
         borderRadius: 15,
         height: "100%",
       }}
     >
       <Animated.View
         style={{
           backgroundColor: animation.interpolate({
             inputRange: [0, 1],
             outputRange: [getHSLString(prevColor), getHSLString(color)],
           }),
           padding: 10,
           borderRadius: 10,
           flex: 1,
         }}
       />
       <View
         style={{
           paddingVertical: 5,
           alignItems: "center",
           justifyContent: "center",
         }}
       >
         <Text
           style={{
             fontSize: 16,
           }}
         >
           {color}
         </Text>
       </View>
     </View>
   </TouchableOpacity>
 );
}

export default Card;

const styles = StyleSheet.create({
  cardWrapper: {
    width: "50%",
    height: 180,
    padding: 5,
  },
  container: {
    padding: 5,
    backgroundColor: "#FFF",
    borderRadius: 15,
    height: "100%",
  },
  card: {
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});