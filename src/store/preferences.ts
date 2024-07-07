import { preferences } from "@/server/db/schema";
import { create } from "zustand";

export type ColorScheme = typeof preferences.$inferSelect.colorScheme;

export type PreferencesState = {
    colorScheme: ColorScheme;
};

export type PreferencesActions = {
    setColorScheme: (colorScheme: ColorScheme) => void;
};

export const defaultInitState: PreferencesState = {
    colorScheme: "system",
};

export type PreferencesStore = PreferencesState & PreferencesActions;

export const usePreferencesStore = (
    partialInitState: Partial<PreferencesState> = defaultInitState,
) => {
    const initState: PreferencesState = {
        ...defaultInitState,
        ...partialInitState,
    };

    return create<PreferencesStore>((set) => ({
        ...initState,
        setColorScheme: (colorScheme) => set(() => ({ colorScheme })),
    }));
};
