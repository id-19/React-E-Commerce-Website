import { MixpanelTrackerInstance } from "./mixpanel-utils.js";
import React from "react";
import { Select } from "@chakra-ui/react";
MixpanelTrackerInstance.trackEvent('Sort Changed', {sortType: e.target.value});

export default function Sorting({ setSort }) {
  return (
    <Select
      onChange={(e) => setSort(e.target.value)}
      placeholder="All"
      bg="var(--lightBorderColor3)"
      outline="none"
      border="none"
    >
      <option value="increment">Price: Low to High</option>
      <option value="decrement">Price: High to Low</option>
    </Select>
  );
}