# TypeScript Node.js Starter

Ett enkelt startprojekt för TypeScript med Node.js, med moderna best practices och en bra utvecklingsmiljö.

## 🚀 Snabbstart

### Förutsättningar

- Node.js 20 eller senare
- npm (medföljer Node.js)

### Installation

```bash
# Klona repot
git clone https://github.com/chasacademy-sandra-larsson/typescript-node-starter.git
cd typescript-node-starter

# Installera beroenden
npm install
```

### Använd projektet

```bash
# Utvecklingsläge med hot-reload
npm run dev

# Typkontroll utan att kompilera
npm run typecheck

# Bygg för produktion
npm run build

# Kör produktionskoden
npm start
```

## 📁 Projektstruktur

```
typescript-node-starter/
├── src/
│   └── index.ts          # Huvudfil - din kod börjar här
├── dist/                 # Kompilerad JavaScript (genereras automatiskt)
├── node_modules/         # Installerade paket (genereras automatiskt)
├── .gitignore           # Filer som Git ska ignorera
├── package.json         # Projektinformation och skript
├── tsconfig.json        # TypeScript-konfiguration
└── README.md           # Du är här!
```

## ⚙️ Konfiguration

### tsconfig.json

Projektet använder strikta TypeScript-inställningar för bästa möjliga typkontroll:

- **`strict: true`** - Aktiverar alla strikta typkontroller
- **`outDir: ./dist`** - Kompilerad kod hamnar i dist-mappen
- **`sourceMap: true`** - Gör debugging enklare

### package.json scripts

- **`dev`** - Kör TypeScript direkt med automatisk omladdning vid ändringar
- **`build`** - Kompilerar TypeScript till JavaScript
- **`start`** - Kör den kompilerade koden
- **`typecheck`** - Kontrollerar typer utan att skapa filer

## 📝 Exempel

Projektet innehåller ett enkelt exempel i `src/index.ts` som visar:

- Funktioner med typade parametrar och returtyper
- Grundläggande TypeScript-typer (string, number, boolean, arrays)

```typescript
const name: string = "Sandra";
const age: number = 30;
const favoriteNumbers: number[] = [3, 7, 21];

function greet(personName: string, personAge: number): string {
  return `Hej ${personName}, du är ${personAge} år.`;
}

function doubleAll(values: number[]): number[] {
  return values.map((value) => value * 2);
}

function isAdult(personAge: number): boolean {
  return personAge >= 18;
}

console.log(greet(name, age));
console.log(`Är vuxen: ${isAdult(age)}`);
console.log(`Favoritnummer: ${favoriteNumbers.join(", ")}`);
console.log(`Dubblade nummer: ${doubleAll(favoriteNumbers).join(", ")}`);
```

## 🛠️ Verktyg som används

- **TypeScript** - Typsäkerhet för JavaScript
- **tsx** - Snabb TypeScript-körning för utveckling
- **@tsconfig/node20** - Förkonfigurerade inställningar för Node.js 20

## 📚 Lär dig mer

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [TypeScript Handbook (Svenska översättning finns)](https://www.typescriptlang.org/docs/handbook/intro.html)
# typescript-node-starter
