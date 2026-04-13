import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../public/language/en-US.json";
import pt from "../public/language/pt-PT.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      "en-US": { translation: en },
      "pt-PT": { translation: pt },
    },
    fallbackLng: "en-US",
    supportedLngs: ["en-US", "pt-PT"],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

/**
 * Detecta o idioma no cliente (localStorage / navigator) e aplica após hidratação.
 * Chame `applyClientLocale()` dentro de um `useEffect` em um componente cliente.
 */
export function applyClientLocale(): void {
  if (typeof window === "undefined") return;
  try {
    const stored = window.localStorage.getItem("i18nextLng");
    const nav = (
      window.navigator.language ||
      (window.navigator as any).userLanguage ||
      ""
    ).toString();
    let candidate = stored || nav || "en-US";
    candidate = candidate.startsWith("pt") ? "pt-PT" : "en-US";
    if (i18n.language !== candidate) {
      i18n.changeLanguage(candidate);
    }
  } catch (e) {
    // ignore
  }
}

export default i18n;
