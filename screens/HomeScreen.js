import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <View className="flex-row items-center justify-between w-[100%]">
        <Text
          style={{ fontFamily: "DMSans_500Medium" }}
          className="text-[20px] text-[#333333]"
        >
          Dashboard
        </Text>
        <TouchableOpacity
          className="bg-[#00A66E] px-6 py-2 rounded-3xl items-center justify-center"
          onPress={() => {}}
        >
          <Text
            style={{ fontFamily: "DMSans_400Regular" }}
            className="text-white"
          >
            Disconnect
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
