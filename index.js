/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {PackageSubmit} from './src/package_submit';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => PackageSubmit);
