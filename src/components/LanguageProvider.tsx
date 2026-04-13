"use client";

import React, { useEffect } from "react";
import "../i18n";
import { useTranslation } from "react-i18next";

export default function LanguageProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale?: string;
}) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (initialLocale) {
      i18n.changeLanguage(initialLocale);
      return;
    }

    const navLang =
      typeof navigator !== "undefined"
        ? navigator.language || (navigator as any).userLanguage
        : null;

    if (!navLang) {
      i18n.changeLanguage("en-US");
      return;
    }

    if (navLang.startsWith("pt")) i18n.changeLanguage("pt-PT");
    else i18n.changeLanguage("en-US");
  }, [i18n, initialLocale]);

  return <>{children}</>;
}
