"use client";
import { createContext, useState, useEffect, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }: { children: React.ReactNode }) {
	let [state, setState] = useState("Hello");
	return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {}
