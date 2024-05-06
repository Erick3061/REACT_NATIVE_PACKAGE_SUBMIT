import AsyncStorage from '@react-native-async-storage/async-storage';
import {StateCreator, create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {ThemeApp, ThemeLight} from '../../config/theme/ThemeApp';
export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeState extends ThemeActions {
  mode: ThemeMode;
  theme: ThemeApp;
  color?: string;
}

interface ThemeActions {
  updateMode: (mode: ThemeMode) => void;
  updateTheme: (theme: ThemeApp) => void;
  updateColor: (color: string) => void;
}

const storeApi: StateCreator<ThemeState> = set => ({
  mode: 'system',
  theme: ThemeLight,

  updateMode: (mode: ThemeMode) => set({mode}),
  updateTheme: (theme: ThemeApp) => set({theme}),
  updateColor: (color: string) => set({color}),
});

export const useThemeStore = create<ThemeState>()(
  persist(storeApi, {
    name: 'ThemeStorage',
    storage: createJSONStorage(() => AsyncStorage),
  }),
);
