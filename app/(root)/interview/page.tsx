import Agent from "@/components/interview/Agent";
import React from "react";

const page = () => {
  return (
    <>
      <h2>Interview Generation</h2>
      <Agent userName="You" userId="user1" type="generate" />
    </>
  );
};

export default page;
