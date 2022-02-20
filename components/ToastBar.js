import { Text, View , StyleSheet } from 'react-native'
import React from 'react'

const ToastBar = ({color}) => {
    return (
      <View style={styles.toast}>
        <Text
          style={{
            color: "#FFF",
          }}
        >
          Color {color} copied to your clipboard
        </Text>
      </View>
    );
}

export default ToastBar;

const styles = StyleSheet.create({
  toast: {
    backgroundColor: "#0C1226",
    shadowColor: "#A8B2C3",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 15,
    shadowOpacity: 1,
    borderRadius: 29,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});


