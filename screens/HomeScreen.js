import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
      <SafeAreaView>
        <View className="flex-row pb-3 mx-4 space-x-2">
          <Image source={{
            uri: "https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=600"
          }} 
          className="h-7 w-7 rounded-full bg-gray"
          />
          <View>
            <Text>Deliver Now!</Text>
            <Text>Current Location</Text>
          </View>
        </View>
      </SafeAreaView>
  );
}
