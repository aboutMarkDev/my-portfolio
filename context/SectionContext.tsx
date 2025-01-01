"use client";

import {
  createContext,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type SectionContextType = {
  sectionRefs: RefObject<null>[];
  currentSection: string;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
};

const initialState = {
  sectionRefs: [],
  currentSection: "",
  setCurrentSection: () => {},
};

const SectionContext = createContext<SectionContextType>(initialState);

export default function SectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  const value = {
    sectionRefs,
    currentSection,
    setCurrentSection,
  };

  return (
    <SectionContext.Provider value={value}>{children}</SectionContext.Provider>
  );
}

export const useSectionContext = () => useContext(SectionContext);
