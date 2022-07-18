import React from "react";
import { Spinner, HStack } from "native-base";

export default LoadingSpinner = () => {
  return (
    <HStack width={"full"} height={"full"} justifyContent={"center"}>
      <Spinner accessibilityLabel="Loading posts" />
    </HStack>
  );
};
