import { createContext } from "react";

export type LanguageContextType = "GB" | "US";

export const LanguageContext = createContext<LanguageContextType>("GB");
