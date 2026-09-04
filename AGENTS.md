# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v54.0.0/ before writing any code.

# Style pisania kodu

Kod pis co najjednoduchsie, priamociaro a citatelne. Prednost ma kod, ktory vie rychlo pochopit zaciatocnik alebo mierne pokrocily programator.

Neprekombinuj riesenia. Nepouzivaj zbytocne abstrakcie, genericke pomocne typy, zlozite utility typy, magicke helpery ani vrstvy navyse, ak to realne nezlepsi citatelnost.

Nepridavaj zbytocne vela bezpecnostnych, overovacich a ochrannych funkcii. Zakladne rozumne kontroly su v poriadku, ale neobaluj jednoduchy kod do mnohych validacii, guardov, fallbackov a helperov, ak to nie je naozaj potrebne.

Ak je vstup jednoduchy a riziko male, preferuj priamy citatelny kod pred prehnanou obranou. Kod ma byt prakticky a udrziavatelny, nie zahlteny poistkami.

Typy pis prehladne na zaciatku suboru, hned pod importmi. Nedavaj typy do stredu kodu ani dovnutra jednotlivych funkcii, ak to nie je naozaj nutne.

Typovanie ma byt jednoduche a citatelne, napriklad:

```ts
type PageText = {
  title: string;
  description: string;
  closeButton: string;
};
```

Uprednostni jasne polia typu `text: string`, `value: number`, `items: string[]`. Nepouzivaj prekombinovane typovanie tam, kde staci jednoduchy objektovy typ.

Komponenty a funkcie maju byt kratke a zrozumitelne. Ak sa nieco opakuje, vytiahni to iba vtedy, ked to kod naozaj zjednodusi. Spolocny komponent ma byt jednoduchy a lahko citatelny.

Medicínske hodnoty, davky, rozsahy a odporucania nemen bez jasneho zadania. Pri upratovani kodu upravuj formu zapisu, nie klinicky obsah.

Pri React Native / Expo kodovani dodrzuj existujuci styl projektu a nepremiestnuj subory alebo logiku zbytocne.

# Prompty na buduce seansy

Ak Jožko požiada o prompt na buducu seansu, najprv sa ho opytaj, ako ho chce ulozit do `assets/poznamky.txt`.

Ponukni dve jednoduche moznosti:

1. Pridat prompt pod posledny prompt. Oddel ho viditelnym oddelovacom a hore uveď aktualny datum.
2. Vymazat obsah `assets/poznamky.txt` a vlozit tam iba novy prompt.

Bez jasneho potvrdenia od Jožka `assets/poznamky.txt` neupravuj.
