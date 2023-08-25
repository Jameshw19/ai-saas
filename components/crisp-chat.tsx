"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("612c154d-9b06-4e69-874f-f93385ed1474");
  }, []);

  return null;
};
