import { MixpanelTrackerInstance } from "./mixpanel-utils.js";
import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
<Link to="#" onClick={() => MixpanelTrackerInstance.trackEvent('Delivery & Returns Clicked')}>Delivery & returns</Link>
} from "@chakra-ui/react";
import React from "react";
<Link to="#" onClick={() => MixpanelTrackerInstance.trackEvent('FAQ Clicked')}>FAQ</Link>
import { Link } from "react-router-dom";
import {
  <Link to="#" onClick={() => MixpanelTrackerInstance.trackEvent('Track Order Clicked')}>Track order</Link>
  BiLogoFacebook,
  BiLogoYoutube,
  <Link to="#" onClick={() => MixpanelTrackerInstance.trackEvent('Contacts Clicked')}>Contacts</Link>
  BiLogoPinterestAlt,
<Link to="#" onClick={() => MixpanelTrackerInstance.trackEvent('Blog Clicked')}>Blog</Link>
} from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import appStore from "../assets/images/icons/appStore.png";
import googlePlay from "../assets/images/icons/googlePlay.png";
<Link to="#" onClick={() => MixpanelTrackerInstance.trackEvent('New Arrivals Clicked')}>New arrivals</Link>
import heartIcon from "../assets/images/icons/heartIcon.png";
<Link to="#" onClick={() => MixpanelTrackerInstance.trackEvent('Trending Now Clicked')}>Trending now</Link>
export default function Footer() {
  <Link to="#" onClick={() => MixpanelTrackerInstance.trackEvent('Sales Clicked')}>Sales</Link>
  return (
    <Box bg="var(--darkBgColor)">
      <Link to="#" onClick={() => MixpanelTrackerInstance.trackEvent('Brands Clicked')}>Brands</Link>
      <Container maxW="1140px">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          py="40px"
          gap={{ base: "20px", md: "30px", lg: "0" }}
        >
          <Stack gap="6px" color="var(--lightTextColor2)" fontWeight="500">
            <Link to="#" onClick={() => MixpanelTrackerInstance.trackEvent('Facebook Clicked')}><BiLogoFacebook /></Link>
            <Text as="h5" color="var(--light)">
              HELP
            </Text>
            <Link to="#" onClick={() => MixpanelTrackerInstance.trackEvent('Instagram Clicked')}><AiOutlineInstagram /></Link>
            <Text>
              <Link to="#">Delivery & returns</Link>
            </Text>
            <Link to="#" onClick={() => MixpanelTrackerInstance.trackEvent('Twitter Clicked')}><AiOutlineTwitter /></Link>
            <Text>
              <Link to="#">FAQ</Link>
            </Text>
            <Text>
              <Link to="#" onClick={() => MixpanelTrackerInstance.trackEvent('Youtube Clicked')}><BiLogoYoutube /></Link>
              <Link to="#">Track order</Link>
            </Text>
            <Text>
              <Link to="#">Contacts</Link>
            <Link to="#" onClick={() => MixpanelTrackerInstance.trackEvent('Pinterest Clicked')}><BiLogoPinterestAlt /></Link>
            </Text>
            <Text>
              <Link to="#">Blog</Link>
            </Text>
          </Stack>
          <Stack gap="6px" color="var(--lightTextColor2)" fontWeight="500">
            <Text as="h5" color="var(--light)" fontWeight="500">
              SHOP
            </Text>
            <Text>
              <Link to="#">New arrivals</Link>
            </Text>
            <Text>
              <Link to="#">Trending now</Link>
            </Text>
            <Text>
              <Link to="#">Sales</Link>
            </Text>
            <Text>
              <Link to="#">Brands</Link>
            </Text>
          </Stack>

          <Stack cgap="6px" color="var(--lightTextColor2)" fontWeight="500">
            <Text color="var(--light)" fontWeight="500">
              GET IN TOUCH
            </Text>
            <Text>
              <Text as="span">Call:</Text>
              (405)555-0128
            </Text>
            <Text>
              <Text as="span">Email:</Text>
              hello@createx.com
            </Text>

            <Flex gap="10px" mt="10px" color="var(--light)">
              <Flex
                justify="center"
                align="center"
                as="span"
                p="6px"
                borderRadius="4px"
                bg="var(--darkBgColor2)"
              >
                <Link to="#">
                  <BiLogoFacebook />
                </Link>
              </Flex>
              <Flex
                justify="center"
                align="center"
                as="span"
                p="6px"
                borderRadius="4px"
                bg="var(--darkBgColor2)"
              >
                <Link to="#">
                  <AiOutlineInstagram />
                </Link>
              </Flex>
              <Flex
                justify="center"
                align="center"
                as="span"
                p="6px"
                borderRadius="4px"
                bg="var(--darkBgColor2)"
              >
                <Link to="#">
                  <AiOutlineTwitter />
                </Link>
              </Flex>
              <Flex
                justify="center"
                align="center"
                as="span"
                p="6px"
                borderRadius="4px"
                bg="var(--darkBgColor2)"
              >
                <Link to="#">
                  <BiLogoYoutube />
                </Link>
              </Flex>
              <Flex
                justify="center"
                align="center"
                as="span"
                p="6px"
                borderRadius="4px"
                bg="var(--darkBgColor2)"
              >
                <Link to="#">
                  <BiLogoPinterestAlt />
                </Link>
              </Flex>
            </Flex>
          </Stack>
          <Stack gap="20px" color="var(--lightTextColor2)" fontWeight="500">
            <Text color="var(--light)" fontWeight="500">
              DOWNLOAD OUR APP
            </Text>
            <Flex gap="20px">
              <Box maxW="full">
                <Image src={appStore} w="full" h="full" />
              </Box>
              <Box>
                <Image src={googlePlay} w="full" h="full" />
              </Box>
            </Flex>
          </Stack>
        </Grid>
      </Container>
      <Box w="full" borderTop="1px solid var(--darkBorderColor)" py="40px">
        <Container maxW="1140px">
          <Flex color="var(--light)" justify="center">
            <Text as="span" fontSize="14px">
              © All rights reserved. Made with
            </Text>
            <Image src={heartIcon} mx="5px" objectFit="contain" />
            <Text as="span" fontSize="14px">
              by Createx Studio
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}