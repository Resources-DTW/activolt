import { View, Text, TouchableOpacity, Animated, Easing } from "react-native";
import React, { useEffect, useState } from "react";
// import LottieView from "lottie-react-native";
import Svg, { Circle, Line } from "react-native-svg";

const ScanScreen = ({ navigation }) => {
  const [rotation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotation]);

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View className="items-center justify-center flex-1 pl-[20%] pr-[20%]">
      <View className="absolute top-[15%]">
        <Text
          style={{ fontFamily: "DMSans_400Regular" }}
          className="capitalize text-[20px] text-center"
        >
          Find your Bluetooth devices
        </Text>
        <View className="flex-1 items-center justify-center">
          {/* <LottieView
            source={require("../assets/bleScan.json")}
            autoPlay
            loop
          /> */}
          <Svg height="100%" width="100%" viewBox="0 0 100 100">
            <Circle
              cx={50}
              cy={50}
              r={45}
              stroke="black"
              strokeWidth={2}
              fill="white"
            />
            <Line
              x1={50}
              y1={5}
              x2={50}
              y2={15}
              stroke="black"
              strokeWidth={2}
              transform={`rotate(${rotate} 50 50)`}
            />
          </Svg>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {}}
        className="bg-[#00A66E] px-8 py-3 rounded-3xl absolute bottom-10"
      >
        <Text style={{ fontFamily: "DMSans_500Medium" }} className="text-white">
          Scan Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScanScreen;
