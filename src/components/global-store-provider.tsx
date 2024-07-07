"use client";
import { createGlobalStore, GlobalStore } from "@/store";
import { createContext, useContext, useRef, type ReactNode } from "react";
import { ColorScheme } from "@/store/preferences";
import { useStore } from "zustand";

export type GlobalStoreApi = ReturnType<typeof createGlobalStore>;

export interface GlobalStoreProviderProps {
    children: ReactNode;
    // session: Awaited<ReturnType<typeof getServerAuthSession>>;
}

export const CounterStoreContext = createContext<GlobalStoreApi | undefined>(
    undefined,
);

export default function GlobalStoreProvider({
    children,
}: GlobalStoreProviderProps) {
    const storeRef = useRef<GlobalStoreApi>();

    let colorScheme: ColorScheme = "system";

    if (!storeRef.current) {
        storeRef.current = createGlobalStore({
            partialInitialPreferencesState: {
                colorScheme,
            },
        });
    }

    return (
        <CounterStoreContext.Provider value={storeRef.current}>
            {children}
        </CounterStoreContext.Provider>
    );
}

type TODO = any;

export function useGlobalStore<T>(selector: (store: GlobalStore) => T): T {
    const counterStoreContext = useContext(CounterStoreContext);

    if (!counterStoreContext) {
        throw new Error(
            `useGlobalStore must be used within CounterStoreProvider`,
        );
    }

    return useStore(counterStoreContext, selector);
}
