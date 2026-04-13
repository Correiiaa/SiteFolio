"use client";
import { useEffect, useRef, useState } from "react";
import { BioComponent } from "./bioComponent";

type Props = {
  strings: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
  loop?: boolean;
};

export default function TextType({
  strings,
  speed = 70,
  deleteSpeed = 40,
  pause = 1200,
  loop = true,
}: Props) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!mounted.current) return;
    const full = strings[idx % strings.length];
    const t = window.setTimeout(
      () => {
        if (isDeleting) setText(full.slice(0, text.length - 1));
        else setText(full.slice(0, text.length + 1));

        if (!isDeleting && text === full) {
          window.clearTimeout(t);
          setTimeout(() => {
            if (mounted.current) setIsDeleting(true);
          }, pause);
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setIdx((i) => i + 1);
        }
      },
      isDeleting ? deleteSpeed : speed,
    );
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, idx, strings, speed, deleteSpeed, pause]);

  useEffect(() => {
    if (!loop && idx >= strings.length) {
      setText(strings[strings.length - 1]);
      setIsDeleting(false);
    }
  }, [idx, loop, strings]);

  return (
    <main>
      <span
        style={{ fontFamily: "Consolas, Monaco, monospace" }}
        aria-live="polite"
        className="text-type inline-flex items-center font-console text-2xl"
      >
        <span>{text}</span>
        <span className="text-type-caret ml-1">|</span>
      </span>
      <BioComponent />
    </main>
  );
}
