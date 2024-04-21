import { MixpanelTrackerInstance } from "./mixpanel-utils.js";
import React from "react";
import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import { GrHomeRounded } from "react-icons/gr";
<Link to={ROUTES.HOME} onClick={() => MixpanelTrackerInstance.trackEvent('Home Link Clicked', {page: 'FAQ'})}>
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import AccordionComp from "../components/AccordionComp";
import Subscribe from "../components/Subscribe";
export default function FAQ() {
  return (
    <>
      <Box bg="var(--lightBgColor)" py="10px">
        <Container maxW="1140px">
          <Flex gap="10px" color="var(--darkTextColor2)" align="center">
            <AccordionComp onToggle={() => MixpanelTrackerInstance.trackEvent('Accordion Toggled', {section: 'FAQ'})} />
            <Link to={ROUTES.HOME}>
              <GrHomeRounded />
            </Link>
            <BsChevronRight />
            <Text color="var(--lightTextColor5)">FAQ</Text>
          </Flex>
        </Container>
      </Box>
      <Subscribe onSubmit={() => MixpanelTrackerInstance.trackEvent('Subscribe Initiated', {location: 'FAQ Page'})} />
      <Container maxW="1140px">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr",
            lg: "1fr 3fr",
          }}
          py="40px"
          mb="60px"
          gap={{ base: "20px", md: "30px", lg: "0" }}
        >
          <Text
            as="h3"
            color="var(--primary)"
            fontSize="28px"
            fontWeight="700"
            lineHeight="42px"
          >
            FAQ
          </Text>
          <Box>
            <AccordionComp />
          </Box>
        </Grid>
      </Container>
      <Subscribe />
    </>
  );
}