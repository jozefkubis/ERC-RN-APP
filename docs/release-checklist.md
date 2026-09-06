# Release Checklist

Tento checklist slúži ako jednoduchá kontrola pred odovzdaním prezentačnej alebo verejnej verzie aplikácie.

## Stav K 2026-09-06

- README je pripravený ako prvý návrh.
- Základná dokumentácia v `docs/` je pripravená.
- Expo konfigurácia obsahuje iOS aj Android.
- Obrazovka "O aplikácii a zdroje" je dostupná z Nastavení.
- Základné screenshoty sú pripravené v EN/tmavom režime a SK/svetlom režime.
- Klinická kontrola / audit medicínskeho obsahu ešte nie je uzavretá.
- iOS simulátor alebo fyzické iOS zariadenie ešte treba samostatne overiť.

## Obsah

- README je aktuálne.
- Dokumentácia v `docs/` je aktuálna.
- Obrazovka "O aplikácii a zdroje" obsahuje správne upozornenia.
- Autor je uvedený ako `Bc. Jozef Kubis`.
- Cieľová skupina aplikácie je jasne popísaná.
- Aplikácia netvrdí, že je oficiálne schválená ERC alebo SRR.
- Medicínsky obsah prešiel nezávislou klinickou kontrolou / auditom.

## Technická Kontrola

Pred odovzdaním spustiť:

```bash
cmd.exe /c npx.cmd tsc --noEmit
cmd.exe /c npm.cmd run lint
git diff --check
```

## Mobilné Testovanie

- skontrolovať Android zariadenie alebo emulátor
- skontrolovať iOS zariadenie alebo simulátor
- overiť svetlý režim
- overiť tmavý režim
- overiť slovenský jazyk
- overiť anglický jazyk
- overiť vyhľadávanie
- overiť históriu
- overiť hlavné kalkulačky

## Pred Kontaktovaním ERC/SRR

- pripraviť stručný popis projektu
- pripraviť a skontrolovať screenshoty hlavných obrazoviek
- pripraviť zoznam použitých zdrojov
- pripraviť záznam klinickej kontroly / auditu
- pripraviť jasné vyhlásenie, že ide o žiadosť o posúdenie alebo povolenie, nie o tvrdenie schválenia
