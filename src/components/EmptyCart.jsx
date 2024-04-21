import { MixpanelTrackerInstance } from "./mixpanel-utils.js";
function EmptyCart() { MixpanelTrackerInstance.trackEvent('Empty Cart Viewed'); return (
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import img from "../assets/images/icons/emptyCart.png";
export default function EmptyCart() {
  return (
    <Flex justify="center" align="center">
      <Image src={img} maxW="400x" maxH="400px" />
    </Flex>
  );
}