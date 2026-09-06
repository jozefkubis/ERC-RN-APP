# ERC-RN-APP

ERC-RN-APP je pracovná a prezentačná verzia mobilnej aplikácie pre rýchle otvorenie resuscitačných algoritmov a vybraných pomôcok.

Aplikácia je pripravená v Expo / React Native a je smerovaná pre iOS aj Android.

## Aktuálny Stav

Projekt je vo fáze pracovnej a prezentačnej verzie.

Aplikácia zatiaľ nie je oficiálne schválená European Resuscitation Council (ERC) ani Slovenskou resuscitačnou radou (SRR). Pred verejným používaním je potrebná nezávislá klinická kontrola / audit celého medicínskeho obsahu.

## Prezentačný Stav

K 2026-09-06 je pripravený základný prezentačný balík:

- vlastný README namiesto Expo template
- stručná dokumentácia v priečinku `docs/`
- obrazovka "O aplikácii a zdroje" / "About and sources"
- základné screenshoty v angličtine v tmavom režime
- základné screenshoty v slovenčine vo svetlom režime

## Hlavné Funkcie

- algoritmy podľa ERC 2025
- sekcie pre dospelých, deti, novorodenca a špeciálne okolnosti
- slovenský a anglický jazyk
- svetlý a tmavý režim
- vyhľadávanie v obsahu
- história naposledy otvorených položiek
- vybrané kalkulačky

## Cieľová Skupina

Aplikácia je pripravovaná najmä pre zdravotníckych záchranárov, lekárov urgentnej medicíny a ďalších zdravotníkov, ktorí sa stretávajú s resuscitačnými situáciami.

Môže slúžiť aj ako študijná a prezentačná pomôcka pre výučbu, interné predstavenie projektu alebo odbornú diskusiu.

## Medicínske A Právne Obmedzenia

- Aplikácia zatiaľ nie je oficiálne schválená ERC ani SRR.
- Aplikácia nenahrádza odborné rozhodnutie zdravotníckeho pracovníka.
- Aplikácia nenahrádza lokálne protokoly RLP, RZP ani konkrétneho pracoviska.
- Pred verejným použitím je potrebná nezávislá klinická kontrola / audit.
- Povolenie na použitie materiálov ERC/SRR nie je odborné schválenie aplikácie.
- Používateľ musí vždy zohľadniť aktuálnu klinickú situáciu, kompetencie posádky a lokálne dostupné vybavenie.

## Zdroje

Základné zdroje a plán kontroly sú uvedené v dokumentácii:

- [Klinická kontrola](docs/clinical-review.md)
- [Zdroje](docs/sources.md)
- [Release checklist](docs/release-checklist.md)
- [Screenshoty](docs/screenshots.md)

## Lokálne Spustenie

1. Nainštaluj závislosti:

   ```bash
   npm install
   ```

2. Spusti Expo:

   ```bash
   npx expo start
   ```

3. Podľa potreby otvor aplikáciu v Expo Go, vývojovom builde, Android emulátore alebo iOS simulátore.

## Technické Informácie

- Expo SDK 54
- Expo Router
- React Native
- TypeScript
- pripravované pre iOS a Android

## Screenshoty

Základné screenshoty sú uložené v priečinku `docs/screenshots/`. Ich prehľad a plán ďalších obrazoviek je v súbore [docs/screenshots.md](docs/screenshots.md).
