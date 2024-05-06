import {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {useThemeStore} from '../store/theme_store';
import {ThemeDark, ThemeLight} from '../../config/theme/ThemeApp';
import {getMaterial3Theme} from '@pchmn/expo-material3-theme';

export const useConfig = () => {
  const colorScheme = useColorScheme();
  const mode = useThemeStore(store => store.mode);
  const theme = useThemeStore(store => store.theme);
  const color = useThemeStore(store => store.color);
  const updateTheme = useThemeStore(store => store.updateTheme);

  useEffect(() => {
    const {dark, light} = getMaterial3Theme(color);

    if (mode === 'system') {
      colorScheme === 'light'
        ? updateTheme({
            ...ThemeLight,
            colors: color
              ? {...ThemeLight.colors, ...light}
              : ThemeLight.colors,
          })
        : updateTheme({
            ...ThemeDark,
            colors: color ? {...ThemeDark.colors, ...dark} : ThemeDark.colors,
          });
    } else {
      mode === 'light'
        ? updateTheme({
            ...ThemeLight,
            colors: color
              ? {...ThemeLight.colors, ...light}
              : ThemeLight.colors,
          })
        : updateTheme({
            ...ThemeDark,
            colors: color ? {...ThemeDark.colors, ...dark} : ThemeDark.colors,
          });
    }
  }, [colorScheme, mode, updateTheme, color]);

  return {theme};
};
