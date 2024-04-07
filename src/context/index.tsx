"use client";
import { createContext, useState, useEffect, useContext } from "react";

const AppContext = createContext({ hello: "word" });

export function AppWrapper({ children }: { children: React.ReactNode }) {
	let [state, setState] = useState({ hello: "word" });
	return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
	return useContext(AppContext);
}
