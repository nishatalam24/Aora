//1. here it is

import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  //2. this are props that we're recieving from anywhere inside this component
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    //3. this is touchableopacity component see it in gpt
    //  4. now go back to index.js
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
