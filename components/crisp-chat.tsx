"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e1eb1d98-8084-4b1b-b0cc-f6f82ef61d8b");
  }, []);

  return null;
};
