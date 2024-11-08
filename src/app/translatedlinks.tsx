"use client";
import { useTranslation } from "react-i18next";

export default function Translatedlinks() {
  const { t } = useTranslation();
  return (
    <div className="space-x-8 text-sm">
      <a href="#menu" className="hover:text-gray-600 transition">
        {t("MENU")}
      </a>
      <a href="#about" className="hover:text-gray-600 transition">
        {t("ABOUT")}
      </a>
      <a href="#contact" className="hover:text-gray-600 transition">
        {t("CONTACT")}
      </a>
    </div>
  )
}
