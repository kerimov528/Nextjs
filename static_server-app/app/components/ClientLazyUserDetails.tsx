"use client";
import dynamic from "next/dynamic";
import React from "react";

const ClientLazyUserDetails = dynamic(() => import("./LazyUserDetails"), {
  ssr: false,
  loading: () => <p>Loading user details...</p>,
});

export default ClientLazyUserDetails;
