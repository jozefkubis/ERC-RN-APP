# Vysvetlenie konfigurácie ResusFlow

Aktualizované: 14. 9. 2026

Tento dokument jednoducho vysvetľuje aktuálne nastavenia v súboroch `app.json` a `eas.json`.

Komentáre nie sú vložené priamo do JSON súborov, pretože štandardný JSON komentáre nepodporuje. Zdrojom skutočnej konfigurácie preto zostávajú `app.json` a `eas.json`. Ak sa ich obsah neskôr zmení, treba aktualizovať aj tento dokument.

## 1. Súbor app.json

Súbor `app.json` opisuje samotnú aplikáciu. Expo z neho číta názov, ikony, podporované platformy, identifikátory aplikácie a natívne nastavenia pre Android a iOS.

### Základné nastavenia

#### `expo`

Hlavný objekt, do ktorého patria všetky nastavenia aplikácie Expo.

#### `name: "ResusFlow"`

Verejný názov aplikácie. Tento názov sa zobrazuje používateľovi pod ikonou nainštalovanej aplikácie.

#### `slug: "ERC-RN-APP"`

Technický názov projektu v službách Expo. Slug nie je verejný názov aplikácie a nemá sa meniť bez dôvodu, pretože projekt je už prepojený s EAS.

#### `version: "1.0.0"`

Verejná verzia aplikácie, ktorú uvidí používateľ v obchode alebo v informáciách o aplikácii.

Príklad budúcej zmeny:

- `1.0.0` – prvé vydanie,
- `1.0.1` – malá oprava,
- `1.1.0` – väčšie doplnenie funkcií.

Verzia sa nemá meniť iba kvôli opakovanému vytvoreniu rovnakého buildu.

#### `icon: "./assets/icon-final.png"`

Hlavná ikona aplikácie. Používa sa najmä pre iOS a ako všeobecná ikona. Súbor má rozmer 1024 × 1024 px.

#### `orientation: "portrait"`

Aplikácia je uzamknutá na zobrazenie na výšku. Otočenie telefónu ju neprepne do režimu na šírku.

#### `platforms: ["ios", "android"]`

Projekt oficiálne podporuje iba iOS a Android. Web momentálne nie je cieľovou platformou aplikácie.

#### `scheme: "ercrnapp"`

Vlastná URL schéma aplikácie. Umožňuje otvoriť aplikáciu pomocou odkazu, ktorý začína napríklad `ercrnapp://`.

Schému netreba meniť bez dôvodu, pretože môže byť použitá v odkazoch alebo Expo Routeri.

#### `userInterfaceStyle: "automatic"`

Aplikácia rešpektuje svetlý alebo tmavý režim nastavený v telefóne. Na Androide toto nastavenie vyžaduje balík a config plugin `expo-system-ui`.

#### `newArchEnabled: true`

Zapína novú architektúru React Native. V Expo SDK 54 je nová architektúra predvolená a toto pole ju ponecháva výslovne zapnutú.

### Nastavenia iOS

#### `bundleIdentifier: "com.jozefkubis.resusflow"`

Jedinečný technický identifikátor iOS aplikácie. Apple podľa neho rozpoznáva aplikáciu v App Store Connect.

Po vytvorení aplikácie v App Store Connect sa tento identifikátor nemá meniť. Zmena by bola považovaná za inú aplikáciu.

#### `supportsTablet: false`

Aplikácia nedeklaruje podporu iPadu. Cieľom je iPhone, takže nie je potrebné pripravovať a testovať samostatné iPad rozloženie.

#### `buildNumber: "1.0.0"`

Interné číslo iOS buildu. Používateľ ho bežne nevidí. App Store vyžaduje nové build číslo pri každom novom nahranom builde rovnakej verejnej verzie.

Projekt používa vzdialenú správu verzií cez EAS, preto bude pri produkčnom builde rozhodujúce číslo uložené na EAS serveri.

### Nastavenia Androidu

#### `versionCode: 1`

Interné celé číslo Android buildu. Google Play vyžaduje, aby bolo každé nové nahrané AAB vyššie než predchádzajúce.

Aj toto číslo spravuje pri produkčných buildoch EAS vzdialene.

#### `edgeToEdgeEnabled: true`

Obsah aplikácie môže siahať až k okrajom obrazovky a pod systémové lišty. Obrazovky preto musia správne používať bezpečné okraje, napríklad `SafeAreaView`.

V SDK 54 je hodnota `true` správna. Správanie treba definitívne overiť na reálnom zariadení v preview APK.

#### `predictiveBackGestureEnabled: false`

Vypína nový animovaný náhľad návratu gestom na podporovaných verziách Androidu. Aplikácia používa klasické správanie tlačidla alebo gesta späť.

#### `package: "com.jozefkubis.ERCRNAPP"`

Jedinečný identifikátor Android aplikácie. Google Play a Android podľa neho rozpoznávajú aplikáciu.

Po vytvorení aplikácie v Google Play Console sa tento identifikátor nesmie meniť, inak by vznikla iná aplikácia.

#### `adaptiveIcon.foregroundImage`

Predná vrstva adaptívnej Android ikony. Používa súbor `assets/adaptive-icon-final.png` s rozmerom 1024 × 1024 px.

Android môže túto vrstvu orezať do kruhu, štvorca alebo iného tvaru podľa výrobcu telefónu.

#### `adaptiveIcon.backgroundColor: "#071A2D"`

Tmavomodré pozadie za prednou vrstvou adaptívnej Android ikony.

### Nastavenie webu

#### `web.output: "static"`

Ak by sa niekedy vytváral webový export, Expo Router by pripravil statické HTML stránky.

Web však nie je uvedený v `platforms`, takže aktuálnymi podporovanými cieľmi zostávajú iba Android a iOS. Toto nastavenie je neškodné a môže zostať pripravené do budúcnosti.

### Config pluginy

Config plugin upravuje natívne nastavenia počas vytvárania Android alebo iOS buildu.

#### `expo-router`

Pripravuje natívnu konfiguráciu pre navigáciu a routy projektu Expo Router.

#### `expo-system-ui`

Pripravuje natívnu podporu systémového vzhľadu. V tomto projekte pomáha správne použiť `userInterfaceStyle: "automatic"`.

#### `expo-splash-screen`

Nastavuje úvodnú obrazovku zobrazovanú počas spúšťania aplikácie.

- `backgroundColor: "#F7EED6"` – svetlé pozadie splash screenu,
- `image` – obrázok z `assets/adaptive-icon-final.png`,
- `dark.backgroundColor: "#071A2D"` – tmavé pozadie splash screenu,
- `dark.image` – obrázok použitý v tmavom režime.

Expo Go nemusí splash screen zobraziť rovnako ako samostatná aplikácia. Treba ho overiť v preview alebo produkčnom builde.

### Prepojenie s Expo a EAS

#### `extra.router: {}`

Miesto pre doplnkové nastavenia Expo Routera. Momentálne neobsahuje vlastné hodnoty.

#### `extra.eas.projectId`

Jedinečné ID projektu na serveroch Expo EAS:

`9f745607-4511-4c71-ae10-b65e2d208d3d`

Prepája lokálny projekt so správnym projektom na Expo účte. Nemá sa meniť ani kopírovať z iného projektu.

#### `runtimeVersion.policy: "appVersion"`

EAS Update použije verejnú verziu aplikácie ako verziu natívneho prostredia. Build verzie `1.0.0` prijme iba OTA aktualizáciu určenú pre runtime `1.0.0`.

Ak sa zmení natívny balík alebo iná natívna časť aplikácie, treba vytvoriť nový build a zvýšiť verejnú verziu. Tým sa zabráni poslaniu nekompatibilnej OTA aktualizácie do starého buildu.

#### `updates.url`

Adresa, z ktorej aplikácia sťahuje EAS Update aktualizácie. Obsahuje rovnaké EAS project ID ako `extra.eas.projectId`, čo je správne.

## 2. Súbor eas.json

Súbor `eas.json` určuje, aký typ buildu má služba EAS vytvoriť. Aktuálne obsahuje profil `preview` na testovanie a profil `production` pre obchody.

### Nastavenia EAS CLI

#### `cli.version: ">= 20.5.1"`

Na prácu s týmto projektom je vyžadovaná EAS CLI vo verzii 20.5.1 alebo novšej. Staršia EAS CLI môže odmietnuť pokračovať.

#### `cli.appVersionSource: "remote"`

Interné čísla Android a iOS buildov spravuje EAS na svojom serveri. Výhodou je, že produkčný build môže číslo automaticky zvýšiť a nehrozí jednoduché zabudnutie rovnakého čísla.

Lokálne hodnoty `android.versionCode` a `ios.buildNumber` preto po inicializácii vzdialených čísel nie sú hlavným zdrojom pravdy.

### Profil preview

Profil `preview` slúži na praktické testovanie aplikácie pred publikovaním.

#### `distribution: "internal"`

Build je určený na interné zdieľanie a testovanie, nie na priame odoslanie do obchodu.

#### `android.buildType: "apk"`

Android výstup bude APK. APK sa dá stiahnuť a priamo nainštalovať do Android telefónu alebo emulátora.

Tento profil použijeme na spoločnú kontrolu názvu, ikony, navigácie, jazykov, tém, splash screenu a systémových líšt.

#### `channel: "preview"`

Preview build prijíma iba kompatibilné EAS Update aktualizácie priradené ku kanálu `preview`.

### Profil production

Profil `production` je určený pre finálne buildy do obchodov.

#### `autoIncrement: true`

EAS pri každom produkčnom builde automaticky zvýši interné build číslo:

- Android `versionCode`,
- iOS `buildNumber`.

Verejnú verziu `version: "1.0.0"` toto nastavenie automaticky nemení.

#### `channel: "production"`

Produkčný build prijíma iba kompatibilné EAS Update aktualizácie z kanála `production`.

#### Predvolený formát produkčného buildu

Keďže nie je zadaný vlastný `buildType`, EAS použije vhodný produkčný formát:

- Android AAB pre Google Play,
- iOS IPA pre App Store Connect alebo TestFlight.

### Odosielanie do obchodov

#### `submit.production: {}`

Existuje pripravený produkčný profil na odoslanie buildu. Je zatiaľ prázdny, takže potrebné prihlasovacie údaje a cieľ obchodu sa vyberú interaktívne alebo sa doplnia neskôr.

Prázdny objekt je platný. Sám o sebe nič neodošle ani nepublikuje.

### Prečo tu nie je development profil

Development profil bol odstránený, pretože používal `developmentClient: true`, ale projekt nemá a momentálne nepotrebuje balík `expo-dev-client`.

Na plánovanú kontrolu aplikácie stačí produkčne podobný preview APK. Development profil sa môže v budúcnosti vrátiť, ak vedome prejdeme na development client.

## 3. Rozdiel medzi verziami

| Hodnota | Príklad | Na čo slúži |
| --- | --- | --- |
| `expo.version` | `1.0.0` | Verejná verzia pre používateľa a runtime EAS Update. |
| `android.versionCode` | `1`, `2`, `3` | Interné poradie Android buildov. Každý nový upload musí mať vyššie číslo. |
| `ios.buildNumber` | `1.0.0`, `1.0.1` | Interné poradie iOS buildov. Každý nový upload rovnakej verzie potrebuje nové číslo. |
| `runtimeVersion` | odvodené z `1.0.0` | Určuje, ktoré OTA aktualizácie sú kompatibilné s nainštalovaným buildom. |

## 4. Bezpečné kontrolné príkazy

Tieto príkazy nič nepublikujú:

```powershell
npx expo config --type public
npx expo-doctor
npx expo install --check
npx tsc --noEmit
npm run lint
git diff --check
git status --short
```

Čo robia:

- `expo config` zobrazí výslednú konfiguráciu, ktorú Expo načítalo,
- `expo-doctor` kontroluje kompatibilitu projektu s Expo SDK,
- `expo install --check` kontroluje odporúčané verzie závislostí,
- `tsc` kontroluje TypeScript bez vytvárania súborov,
- `lint` kontroluje štýl a časté chyby v kóde,
- `git diff --check` hľadá problémy s medzerami a koncami riadkov,
- `git status` ukáže zmenené súbory.

## 5. Dôležité pravidlá pred buildom

- Bez výslovného potvrdenia nevytvárať preview ani produkčný build.
- Bez výslovného potvrdenia nerobiť commit, upload alebo publikovanie.
- Pred prvým iOS buildom potvrdiť, že `com.jozefkubis.resusflow` je požadovaný finálny identifikátor.
- Android package `com.jozefkubis.ERCRNAPP` nemeníme.
- EAS project ID nemeníme.
- Splash screen a systémové lišty treba overiť v reálnom preview APK.
- Nespúšťať `npm audit fix --force`, pretože môže zmeniť Expo SDK alebo ďalšie hlavné balíky na nekompatibilné verzie.

## 6. Použitá dokumentácia

- Expo SDK 54 app config: https://docs.expo.dev/versions/v54.0.0/config/app/
- Expo SDK 54 SystemUI: https://docs.expo.dev/versions/v54.0.0/sdk/system-ui/
- EAS build profily: https://docs.expo.dev/build/eas-json/
- Správa verzií EAS Build: https://docs.expo.dev/build-reference/app-versions/

