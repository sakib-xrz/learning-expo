import { Link } from "expo-router";
import { View, Text, Pressable } from "react-native";

const Home = () => {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-center text-2xl font-semibold text-teal-700">
        Hello form home page
      </Text>
      <Link href={"/favorites"} asChild>
        <Pressable className="bg-teal-700 px-3 py-2 rounded-lg mt-4">
          <Text className="text-white text-center">Go to Favorites</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Home;
