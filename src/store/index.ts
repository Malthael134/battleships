import { create } from "zustand";
import {
    usePreferencesStore,
    PreferencesState,
    PreferencesStore,
} from "./preferences";

export type GlobalStore = {} & GlobalStoreSubstores;

export type GlobalStoreSubstores = {
    preferences: ReturnType<typeof usePreferencesStore>;
};

export interface CreateGlobalStoreParams {
    partialInitialPreferencesState?: Partial<PreferencesState>;
}

export const createGlobalStore = ({
    partialInitialPreferencesState,
}: CreateGlobalStoreParams = {}) =>
    create(() => ({
        preferences: usePreferencesStore(partialInitialPreferencesState),
    }));
