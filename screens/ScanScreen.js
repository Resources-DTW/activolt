import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const ScanScreen = ({ navigation }) => {
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
          {/* <Image source={BleScan} resizeMode="contain" /> */}
          <LottieView
            source={require("../assets/bleScan.json")}
            autoPlay
            loop
            className="flex-1 items-center justify-center"
          />
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
