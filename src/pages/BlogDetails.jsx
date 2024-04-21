import { MixpanelTrackerInstance } from "./mixpanel-utils.js";
const handleBlogView = () => { MixpanelTrackerInstance.trackEvent('Blog Viewed'); };
import React from "react";
<BlogDetail onClick={handleBlogView} />
import BlogDetail from "../components/blogDetail/BlogDetail";
import Subscribe from "../components/Subscribe";

export default function BlogDetails() {
  return (
    <>
      <BlogDetail />
      <Subscribe />
    </>
  );
}