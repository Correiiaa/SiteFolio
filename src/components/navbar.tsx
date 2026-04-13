"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import i18n, { applyClientLocale } from "@/i18n";

export const Navbar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<string>(i18n.language || "en-US");
  const [version, setVersion] = useState(0);

  useEffect(() => {
    // aplicar locale armazenado / navigator após a hidratação
    applyClientLocale();

    const handle = (lng: string) => {
      setLang(lng || "en-US");
      setVersion((v) => v + 1);
    };

    i18n.on("languageChanged", handle);
    return () => {
      i18n.off("languageChanged", handle);
    };
  }, []);
  const items = [
    { href: "/projects", label: t("nav.Projects") },
    { href: "/skills", label: t("nav.Skills") },
    { href: "/contact", label: t("nav.Contact") },
    { href: "/about", label: t("nav.About") },
  ];

  return (
    <header className="w-full h-16 bg-black text-white relative">
      <div className="max-w-5xl w-full mx-auto px-6 flex items-center justify-between h-16">
        <div
          className="text-lg font-bold cursor-pointer flex flex-row items-center gap-4"
          onClick={() => router.push("/")}
        >
          Toni Correia
          <div className="LanguageSelector">
            <select
              className="bg-transparent border border-white/20 rounded-md px-2 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary"
              value={lang}
              onChange={async (e) => {
                const next = e.target.value;
                try {
                  await i18n.changeLanguage(next);
                } catch (err) {
                  // ignore
                }
                try {
                  window.localStorage.setItem("i18nextLng", next);
                  // set cookie so server can read it on next request
                  document.cookie = `i18nextLng=${next}; path=/; max-age=${60 * 60 * 24 * 365}`;
                } catch (err) {
                  /* ignore */
                }
                // setLang will also be updated via languageChanged handler, but set immediately to keep UI responsive
                setLang(next);
              }}
            >
              <option value="en-US">EN</option>
              <option value="pt-PT">PT</option>
            </select>
          </div>
        </div>

        {/* desktop links */}
        <nav id="primary-nav" className="hidden sm:flex">
          <ul className="flex flex-row gap-6">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-gray-400">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* mobile menu button (visible only below `sm`) */}
        <button
          className="p-2 sm:hidden relative z-50"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <FontAwesomeIcon
            icon={open ? faXmark : faGripLines}
            className="text-xl"
          />
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
        </button>
      </div>

      {/* mobile menu (only on small screens) */}
      <nav
        id="mobile-nav"
        className={`sm:hidden fixed inset-0 bg-black text-white transition-all duration-300 ease-out z-40 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-6 px-6">
          {items.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block w-full max-w-md text-center rounded-md border border-white/20 bg-neutral-900 py-4 mx-auto transform transition-all duration-300 ease-out"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(8px)",
                transitionDelay: `${open ? i * 60 : 0}ms`,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
