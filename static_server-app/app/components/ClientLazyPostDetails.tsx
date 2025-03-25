"use client";
import dynamic from "next/dynamic";
import React from "react";

const ClientLazyPostDetails = dynamic(() => import("./LazyPostDetails"), {
  ssr: false,
  loading: () => <p>Loading post details...</p>,
});

export default ClientLazyPostDetails;
