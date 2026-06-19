import { registerRootComponent } from "expo";

import App from "./App";

// registerRootComponent volá AppRegistry.registerComponent('main', () => App);
// Zároveň zabezpečí, že či appku spustíš v Expo Go alebo v natívnom builde,
// prostredie bude správne nastavené.
registerRootComponent(App);
