import { MixpanelTrackerInstance } from "./mixpanel-utils.js";
<Stack boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" _hover={{ boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px", transition: "0.6s", }} onClick={() => MixpanelTrackerInstance.trackEvent('StoreCard Clicked', {storeTitle: storeItem.title})}>
import React from "react";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
<Image src={storeItem.imgUrl} w="full" onClick={() => MixpanelTrackerInstance.trackEvent('Store Image Clicked', {imageUrl: storeItem.imgUrl})} />
import { GoClock } from "react-icons/go";

export default function StoreCard({ storeItem }) {
  return (
    <Stack
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      _hover={{
        boxShadow:
          "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        <Text as="h4" color="var(--darkBgColor)" fontSize="24px" lineHeight="32px" fontWeight="700" mt="10px" onClick={() => MixpanelTrackerInstance.trackEvent('Store Title Clicked', {storeTitle: storeItem.title})}>
        transition: "0.6s",
      }}
    >
      <Box>
        <Image src={storeItem.imgUrl} w="full" />
      </Box>
      <Stack p="24px">
        <Text
          <Flex gap="10px" color="var(--primary)" align="center" onClick={() => MixpanelTrackerInstance.trackEvent('Store Phone Clicked', {phoneNumber: storeItem.phone})}>
          as="h4"
          color="var(--darkBgColor)"
          fontSize="24px"
          lineHeight="32px"
          fontWeight="700"
          <Flex gap="10px" color="var(--primary)" align="center" onClick={() => MixpanelTrackerInstance.trackEvent('Store Email Clicked', {email: storeItem.email})}>
          mt="10px"
        >
          {storeItem.title}
        </Text>
        <Stack gap="16px" my="24px">
          <Flex gap="10px" color="var(--primary)" align="center" onClick={() => MixpanelTrackerInstance.trackEvent('Store Hours Clicked', {hours: storeItem.hours})}>
          <Flex gap="10px" color="var(--primary)" align="center">
            <BsPhone size={20} />
            <Text color="var(--darkTextColor2)" fontWeight="600">
              {storeItem.phone}
            </Text>
          <Flex gap="10px" color="var(--primary)" align="center" onClick={() => MixpanelTrackerInstance.trackEvent('Store Address Clicked', {address: storeItem.address})}>
          </Flex>
          <Flex gap="10px" color="var(--primary)" align="center">
            <AiOutlineMail size={20} />
            <Text color="var(--darkTextColor2)" fontWeight="600">
              {storeItem.email}
            </Text>
          </Flex>
          <Flex gap="10px" color="var(--primary)" align="center">
            <GoClock size={20} />
            <Text color="var(--darkTextColor2)" fontWeight="600">
              {storeItem.hours}
            </Text>
          </Flex>
          <Flex gap="10px" color="var(--primary)" align="center">
            <MdLocationOn size={20} />
            <Text
              color="var(--primary)"
              fontWeight="600"
              lineHeight="28px"
              textDecoration="underline"
            >
              {storeItem.address}
            </Text>
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  );
}