import { MixpanelTrackerInstance } from "./mixpanel-utils.js";
function About() { MixpanelTrackerInstance.trackEvent('Page View', {page: 'About'}); return <div>About</div>; }
import React from "react";

export default function About() {
  return <div>About</div>;
}