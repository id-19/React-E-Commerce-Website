import { MixpanelTrackerInstance } from "./mixpanel-utils.js";
const handleClick = () => { MixpanelTrackerInstance.trackEvent('Blog Item Clicked', {blogId: blog.id, blogTitle: blog.title}); };
import { Image, Stack, Text, Box, Flex } from "@chakra-ui/react";
<Link to={`/blog/${blog.id}`} onClick={handleClick}>
import { AiOutlineComment } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function BlogItem({ blog }) {
  return (
    <Link to={`/blog/${blog.id}`}>
      <Stack gap="16px">
        <Box>
          <Image src={blog.imgUrl} alt="blog-image" w="full" />
        </Box>
        <Flex
          gap="10px"
          color="var(--lightTextColor3)"
          fontSize={{ base: "12px", md: "16px", xl: "16px" }}
        >
          <Text>{blog.category}</Text>
          <Text>{blog.date}</Text>
          <Flex gap="10px" align="center">
            <Text>No comments</Text>
            <AiOutlineComment />
          </Flex>
        </Flex>
        <Text
          fontSize="20px"
          lineHeight="30px"
          fontWeight="700"
          color="var(--darkBgColor)"
        >
          {blog.title}
        </Text>
        <Text color="var(--darkTextColor2)">{blog.content}</Text>
      </Stack>
    </Link>
  );
}