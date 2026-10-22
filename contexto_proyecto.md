# Contexto Completo del Proyecto CV-CREATOR-APP


================================================
ðŸ“„ ARCHIVO: .env
================================================

EXPO_PUBLIC_API_URL=https://6ad90ceff89c5702ed9a63ff.mockapi.io/

================================================
ðŸ“„ ARCHIVO: .gitignore
================================================

# Learn more https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files

# dependencies
node_modules/

# Expo
.expo/
dist/
web-build/
expo-env.d.ts

# Native
.kotlin/
*.orig.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision

# Metro
.metro-health-check*

# debug
npm-debug.*
yarn-debug.*
yarn-error.*

# macOS
.DS_Store
*.pem

# local env files
.env*.local
.env 

# typescript
*.tsbuildinfo

example

# generated native folders
/ios
/android


================================================
ðŸ“„ ARCHIVO: AGENTS.md
================================================

This is an Expo/React Native mobile application. Prioritize mobile-first patterns, performance, and cross-platform compatibility.

## Expo has changed — do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json`.
2. Fetch the matching versioned docs: `https://docs.expo.dev/versions/v<major>.0.0/`
3. For anything else, fetch https://docs.expo.dev/llms.txt — an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Commands

Use `bunx` instead of `npx` if the project uses bun (`bun.lock` present).

```bash
npx expo install <package>  # ALWAYS use instead of npm/yarn/pnpm/bun add — resolves SDK-compatible versions
npx expo start              # start the dev server
npx expo lint               # lint
npx tsc --noEmit            # typecheck
npx expo-doctor             # diagnose dependency and config issues
npx expo install --fix      # fix incompatible package versions
```

Run lint and typecheck before declaring any task done.

## Navigation & Routing

- Use **Expo Router** for all navigation. Routes live in `src/app/` — every file there is a screen, `_layout.tsx` files define navigators. Keep non-route code (components, hooks, utils) outside `src/app/`.
- Import `Link`, `router`, and `useLocalSearchParams` from `expo-router`.
- Docs: https://docs.expo.dev/router/introduction.md

## Building with EAS

Use EAS to build, sign, and submit the app in the cloud (`eas build`, `eas submit`) and to ship over-the-air updates (`eas update`) — no local Xcode or Android Studio required. Run EAS CLI as `bunx eas-cli <command>` in Bun projects, or `npx eas-cli@latest <command>` otherwise; substitute that for bare `eas` in docs examples.
Docs: https://docs.expo.dev/eas/index.md

## Rules

- If `ios/` and `android/` directories do not exist, they are generated (Continuous Native Generation). Never create or edit them by hand — configure native behavior in `app.json` and config plugins.
- Expo Go only includes its bundled native modules. After adding a library with native code, the app needs a development build: `npx expo run:ios|android` locally, or `eas build --profile development`.
- Prefer recommended Expo modules over third-party libraries, and check your available skills before adding dependencies. Docs: https://docs.expo.dev/versions/latest/index.md


================================================
ðŸ“„ ARCHIVO: app.json
================================================

{
  "expo": {
    "name": "taller-carros",
    "slug": "taller-carros",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "tallercarros",
    "userInterfaceStyle": "automatic",
    "ios": {
      "icon": "./assets/expo.icon"
    },
    "android": {
      "adaptiveIcon": {
        "backgroundColor": "#E6F4FE",
        "foregroundImage": "./assets/images/android-icon-foreground.png",
        "backgroundImage": "./assets/images/android-icon-background.png",
        "monochromeImage": "./assets/images/android-icon-monochrome.png"
      },
      "predictiveBackGestureEnabled": false
    },
    "web": {
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "backgroundColor": "#208AEF",
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 76
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true,
      "reactCompiler": true
    }
  }
}


================================================
ðŸ“„ ARCHIVO: dist\metadata.json
================================================

{"version":0,"bundler":"metro","fileMetadata":{"android":{"bundle":"_expo/static/js/android/entry-d1a326c4527e917c16683e2d3388f4ed.hbc","assets":[{"path":"assets\\6b4f0c2d698edccb36b0f132059c0205","ext":"ttf"},{"path":"assets\\0a328cd9c1afd0afe8e3b1ec5165b1b4","ext":"png"},{"path":"assets\\778ffc9fe8773a878e9c30a6304784de","ext":"png"},{"path":"assets\\c79c3606a1cf168006ad3979763c7e0c","ext":"png"},{"path":"assets\\02bc1fa7c0313217bde2d65ccbff40c9","ext":"png"},{"path":"assets\\35ba0eaec5a4f5ed12ca16fabeae451d","ext":"png"},{"path":"assets\\3cd68ccdb8938e3711da2e8831b85493","ext":"png"},{"path":"assets\\61ca7e64b7d605716c57706cef640b9a","ext":"png"},{"path":"assets\\aff2c65b39a296d4f7e96d0f58169170","ext":"png"},{"path":"assets\\d8e7601e3df962f83c62371ac14964d8","ext":"png"},{"path":"assets\\0747a1317bbe9c6fc340b889ef8ab3ae","ext":"png"},{"path":"assets\\d84e297c3b3e49a614248143d53e40ca","ext":"png"},{"path":"assets\\1190ab078c57159f4245a328118fcd9a","ext":"png"},{"path":"assets\\78c625386b4d0690b421eb0fc78f7b9c","ext":"png"},{"path":"assets\\4403c6117ec30c859bc95d70ce4a71d3","ext":"png"},{"path":"assets\\069d99eb1fa6712c0b9034a58c6b57dd","ext":"png"},{"path":"assets\\c3273c9e5321f20d1e42c2efae2578c4","ext":"png"},{"path":"assets\\286d67d3f74808a60a78d3ebf1a5fb57","ext":"png"},{"path":"assets\\d1ea1496f9057eb392d5bbf3732a61b7","ext":"png"},{"path":"assets\\19eeb73b9593a38f8e9f418337fc7d10","ext":"png"},{"path":"assets\\ab19f4cbc543357183a20571f68380a3","ext":"png"},{"path":"assets\\d8b800c443b8972542883e0b9de2bdc6","ext":"png"},{"path":"assets\\412dd9275b6b48ad28f5e3d81bb1f626","ext":"png"},{"path":"assets\\017bc6ba3fc25503e5eb5e53826d48a8","ext":"png"},{"path":"assets\\20e71bdf79e3a97bf55fd9e164041578","ext":"png"},{"path":"assets\\98a4e3d00dbf5d65da99a69b38a7def2","ext":"xml"},{"path":"assets\\9b5cb09b4e669ed0f28f3b3f2871a0a5","ext":"xml"}]}}}

================================================
ðŸ“„ ARCHIVO: eslint.config.js
================================================

// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
  }
]);


================================================
ðŸ“„ ARCHIVO: expo-env.d.ts
================================================

/// <reference types="expo/types" />

// NOTE: This file should not be edited and should be in your git ignore

================================================
ðŸ“„ ARCHIVO: package.json
================================================

{
  "name": "taller-carros",
  "main": "expo-router/entry",
  "version": "1.0.0",
  "dependencies": {
    "@expo/ui": "~57.0.26",
    "@tanstack/react-form": "^1.33.5",
    "@tanstack/react-query": "^5.104.5",
    "axios": "^1.20.0",
    "expo": "~57.0.31",
    "expo-constants": "~57.0.22",
    "expo-device": "~57.0.2",
    "expo-font": "~57.0.4",
    "expo-glass-effect": "~57.0.4",
    "expo-image": "~57.0.5",
    "expo-linking": "~57.0.13",
    "expo-router": "~57.0.29",
    "expo-splash-screen": "~57.0.10",
    "expo-status-bar": "~57.0.1",
    "expo-symbols": "~57.0.3",
    "expo-system-ui": "~57.0.4",
    "expo-web-browser": "~57.0.3",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-native": "0.86.3",
    "react-native-gesture-handler": "~2.32.0",
    "react-native-reanimated": "4.5.1",
    "react-native-safe-area-context": "~5.7.0",
    "react-native-screens": "~4.26.0",
    "react-native-web": "~0.21.0",
    "react-native-worklets": "0.10.1"
  },
  "devDependencies": {
    "@types/react": "~19.2.2",
    "eslint": "^9.0.0",
    "eslint-config-expo": "~57.0.2",
    "typescript": "~6.0.3"
  },
  "scripts": {
    "start": "expo start",
    "reset-project": "node ./scripts/reset-project.js",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "lint": "expo lint"
  },
  "private": true
}


================================================
ðŸ“„ ARCHIVO: README.md
================================================

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


================================================
ðŸ“„ ARCHIVO: scripts\reset-project.js
================================================

#!/usr/bin/env node

/**
 * This script is used to reset the project to a blank state.
 * It deletes or moves the /src and /scripts directories to /example based on user input and creates a new /src/app directory with an index.tsx and _layout.tsx file.
 * You can remove the `reset-project` script from package.json and safely delete this file after running it.
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const root = process.cwd();
const oldDirs = ["src", "scripts"];
const exampleDir = "example";
const newAppDir = "src/app";
const exampleDirPath = path.join(root, exampleDir);

const indexContent = `import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
`;

const layoutContent = `import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}
`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const moveDirectories = async (userInput) => {
  try {
    if (userInput === "y") {
      // Create the app-example directory
      await fs.promises.mkdir(exampleDirPath, { recursive: true });
      console.log(`📁 /${exampleDir} directory created.`);
    }

    // Move old directories to new app-example directory or delete them
    for (const dir of oldDirs) {
      const oldDirPath = path.join(root, dir);
      if (fs.existsSync(oldDirPath)) {
        if (userInput === "y") {
          const newDirPath = path.join(root, exampleDir, dir);
          await fs.promises.rename(oldDirPath, newDirPath);
          console.log(`➡️ /${dir} moved to /${exampleDir}/${dir}.`);
        } else {
          await fs.promises.rm(oldDirPath, { recursive: true, force: true });
          console.log(`❌ /${dir} deleted.`);
        }
      } else {
        console.log(`➡️ /${dir} does not exist, skipping.`);
      }
    }

    // Create new /src/app directory
    const newAppDirPath = path.join(root, newAppDir);
    await fs.promises.mkdir(newAppDirPath, { recursive: true });
    console.log("\n📁 New /src/app directory created.");

    // Create index.tsx
    const indexPath = path.join(newAppDirPath, "index.tsx");
    await fs.promises.writeFile(indexPath, indexContent);
    console.log("📄 src/app/index.tsx created.");

    // Create _layout.tsx
    const layoutPath = path.join(newAppDirPath, "_layout.tsx");
    await fs.promises.writeFile(layoutPath, layoutContent);
    console.log("📄 src/app/_layout.tsx created.");

    console.log("\n✅ Project reset complete. Next steps:");
    console.log(
      `1. Run \`npx expo start\` to start a development server.\n2. Edit src/app/index.tsx to edit the main screen.\n3. Put all your application code in /src, only screens and layout files should be in /src/app.${
        userInput === "y"
          ? `\n4. Delete the /${exampleDir} directory when you're done referencing it.`
          : ""
      }`
    );
  } catch (error) {
    console.error(`❌ Error during script execution: ${error.message}`);
  }
};

rl.question(
  "Do you want to move existing files to /example instead of deleting them? (Y/n): ",
  (answer) => {
    const userInput = answer.trim().toLowerCase() || "y";
    if (userInput === "y" || userInput === "n") {
      moveDirectories(userInput).finally(() => rl.close());
    } else {
      console.log("❌ Invalid input. Please enter 'Y' or 'N'.");
      rl.close();
    }
  }
);


================================================
ðŸ“„ ARCHIVO: src\api\carros.service.ts
================================================

//importar el cliente axios y el tipo de carro
import { client } from './client'
import type { Carro, CarroInput } from '../types/carro'

//Definir un servicio llamado carroService
//el Servicio centraliza las operaciones de la entidad carro
//retorna una promesa con un arreglo de objeto 
//poner metodos asincronicos para interactuar con la API

export const carrosService ={
    //Metodo GET
    getAll: async(): Promise<Carro[]> =>{
        const {data} = await client.get<Carro[]>('patio')
        return data
    },

    //MEtodo POST: agregar un nuevo carro, retornar la promesa con el objeto creado
    add: async (carro: CarroInput): Promise<Carro> => {
        const { data } = await client.post<Carro>('patio', carro)
        return data
    },

    update: async (id: string, carro: CarroInput): Promise<Carro> => {
        const { data } = await client.put<Carro>(`patio/${id}`, carro)
        return data
    },

    remove: async (id: string): Promise<void> => {
        await client.delete(`patio/${id}`)
    }
}

================================================
ðŸ“„ ARCHIVO: src\api\client.ts
================================================

import axios from 'axios'

//Crear un cliente de axios configurado con:
//baseURL : La URL de la APIk, tomada de variables de entorno EXPO
//headers: indicar que el contenido es JSON 

export const client = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: {'Content-Type': 'application/json'},
})

================================================
ðŸ“„ ARCHIVO: src\app\explore.tsx
================================================

import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useCarros } from '../hooks/useCarros';
import { formatCarroNumber } from '../utils/carros';
import { PatiotuercaColors } from '../constants/theme';

const palette = {
  background: PatiotuercaColors.background,
  primary: PatiotuercaColors.primary,
  secondary: PatiotuercaColors.secondary,
  text: PatiotuercaColors.text,
  muted: PatiotuercaColors.muted,
  border: PatiotuercaColors.secondary,
};

export default function Explore() {
  const { data: carros = [], isLoading, error } = useCarros();

  return (
    <FlatList
      style={styles.screen}
      contentContainerStyle={styles.content}
      data={carros}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.eyebrow}>PATIO TUERCA</Text>
          <Text style={styles.title}>Explora el inventario</Text>
          <Text style={styles.subtitle}>
            Revisa los vehículos disponibles y sus características.
          </Text>
          <View style={styles.accent} />
        </View>
      }
      ListEmptyComponent={
        <View style={styles.emptyCard}>
          {isLoading ? (
            <>
              <ActivityIndicator color={palette.primary} />
              <Text style={styles.emptyText}>Cargando vehículos...</Text>
            </>
          ) : error ? (
            <Text style={styles.errorText}>No se pudo cargar el inventario: {error.message}</Text>
          ) : (
            <Text style={styles.emptyText}>No hay vehículos disponibles por el momento.</Text>
          )}
        </View>
      }
      renderItem={({ item }) => {
        const precio = formatCarroNumber(item.precio);
        const kilometraje = formatCarroNumber(item.kilometraje);

        return (
          <View style={styles.carCard}>
            <View style={styles.carIcon}>
              <Text style={styles.carIconText}>
                {(item.marca || 'C').slice(0, 1).toUpperCase()}
              </Text>
            </View>
            <View style={styles.carInfo}>
              <Text style={styles.carTitle}>
                {item.marca || 'Marca no disponible'} {item.modelo || ''}
              </Text>
              <Text style={styles.carDetails}>
                {item.anio || 'Año no disponible'} · {item.color || 'Color no disponible'}
              </Text>
              <Text style={styles.carDetails}>
                {kilometraje === null ? 'Kilometraje no disponible' : `${kilometraje} km`}
              </Text>
            </View>
            <View style={styles.priceTag}>
              <Text style={styles.priceText}>
                {precio === null ? 'Precio no disponible' : `$${precio}`}
              </Text>
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 28,
  },
  header: {
    backgroundColor: palette.primary,
    paddingHorizontal: 22,
    paddingTop: 58,
    paddingBottom: 27,
  },
  eyebrow: {
    color: palette.background,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
  },
  title: {
    color: palette.background,
    fontSize: 26,
    lineHeight: 33,
    fontWeight: '800',
    marginTop: 12,
  },
  subtitle: {
    color: palette.background,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 7,
  },
  accent: {
    width: 48,
    height: 4,
    borderRadius: 2,
    backgroundColor: palette.secondary,
    marginTop: 20,
  },
  emptyCard: {
    minHeight: 112,
    margin: 16,
    padding: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: palette.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: palette.muted,
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  errorText: {
    color: palette.primary,
    fontSize: 14,
    textAlign: 'center',
  },
  carCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginHorizontal: 16,
    marginTop: 14,
    padding: 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: palette.background,
    shadowColor: palette.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  carIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.secondary,
  },
  carIconText: {
    color: palette.primary,
    fontSize: 18,
    fontWeight: '800',
  },
  carInfo: {
    flex: 1,
  },
  carTitle: {
    color: palette.text,
    fontSize: 15,
    fontWeight: '800',
  },
  carDetails: {
    color: palette.muted,
    fontSize: 12,
    marginTop: 4,
  },
  priceTag: {
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 7,
    backgroundColor: palette.secondary,
  },
  priceText: {
    color: palette.text,
    fontSize: 12,
    fontWeight: '800',
  },
});


================================================
ðŸ“„ ARCHIVO: src\app\index.tsx
================================================

import { useRef, useState } from 'react';
import { useForm } from '@tanstack/react-form';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  useAgregarCarro,
  useCarros,
  useCarrosEliminandoIds,
  useEditarCarro,
  useEliminarCarro,
} from '../hooks/useCarros';
import type { Carro, CarroInput } from '../types/carro';
import { formatCarroNumber } from '../utils/carros';
import { PatiotuercaColors } from '../constants/theme';

interface CarroFormValues {
  marca: string;
  anio: string;
  modelo: string;
  color: string;
  kilometraje: string;
  precio: string;
}

const EMPTY_FORM: CarroFormValues = {
  marca: '',
  anio: '',
  modelo: '',
  color: '',
  kilometraje: '',
  precio: '',
};

const currentYear = new Date().getFullYear();

function validateRequired(value: string, label: string) {
  return value.trim() ? undefined : `${label} es obligatorio.`;
}

function validateYear(value: string) {
  if (!value.trim()) return 'El año es obligatorio.';
  const year = Number(value);
  return Number.isInteger(year) && year >= 1900 && year <= currentYear
    ? undefined
    : `Ingresa un año entre 1900 y ${currentYear}.`;
}

function validatePositiveNumber(value: string, label: string) {
  if (!value.trim()) return `${label} es obligatorio.`;
  const number = Number(value);
  return Number.isFinite(number) && number > 0
    ? undefined
    : `${label} debe ser mayor que 0.`;
}

function isCarroFormValid(values: CarroFormValues) {
  return [
    validateRequired(values.marca, 'La marca'),
    validateRequired(values.modelo, 'El modelo'),
    validateYear(values.anio),
    validateRequired(values.color, 'El color'),
    validatePositiveNumber(values.kilometraje, 'El kilometraje'),
    validatePositiveNumber(values.precio, 'El precio'),
  ].every((error) => error === undefined);
}

function toCarroInput(values: CarroFormValues): CarroInput {
  return {
    marca: values.marca.trim(),
    anio: Number(values.anio),
    modelo: values.modelo.trim(),
    color: values.color.trim(),
    kilometraje: Number(values.kilometraje),
    precio: Number(values.precio),
  };
}

function toFormValues(carro: Carro): CarroFormValues {
  return {
    marca: carro.marca ?? '',
    anio: String(carro.anio ?? ''),
    modelo: carro.modelo ?? '',
    color: carro.color ?? '',
    kilometraje: String(carro.kilometraje ?? ''),
    precio: String(carro.precio ?? ''),
  };
}

export default function App() {
  const [carroEditando, setCarroEditando] = useState<Carro | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const listRef = useRef<FlatList<Carro> | null>(null);
  const { data: carros = [], isLoading, error } = useCarros();
  const agregarMutation = useAgregarCarro();
  const editarMutation = useEditarCarro();
  const eliminarMutation = useEliminarCarro();
  const eliminandoIds = useCarrosEliminandoIds();
  const guardando = agregarMutation.isPending || editarMutation.isPending;

  const form = useForm({
    defaultValues: EMPTY_FORM,
    onSubmit: async ({ value }) => {
      const carro = toCarroInput(value);
      if (carroEditando) {
        await editarMutation.mutateAsync({ id: carroEditando.id, carro });
      } else {
        await agregarMutation.mutateAsync(carro);
      }
      form.reset(EMPTY_FORM);
      setCarroEditando(null);
    },
  });

  const cancelarEdicion = () => {
    form.reset(EMPTY_FORM);
    setCarroEditando(null);
    setSubmissionError(null);
  };

  const editar = (carro: Carro) => {
    const values = toFormValues(carro);
    form.reset(values);
    form.setFieldValue('marca', values.marca);
    form.setFieldValue('anio', values.anio);
    form.setFieldValue('modelo', values.modelo);
    form.setFieldValue('color', values.color);
    form.setFieldValue('kilometraje', values.kilometraje);
    form.setFieldValue('precio', values.precio);
    setCarroEditando(carro);
    setSubmissionError(null);
    listRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  const guardar = () => {
    setSubmissionError(null);
    void form.handleSubmit().catch((submitError: unknown) => {
      setSubmissionError(
        submitError instanceof Error
          ? submitError.message
          : 'Ocurrió un error inesperado al guardar el carro.',
      );
    });
  };

  const confirmarEliminacion = (carro: Carro) => {
    Alert.alert(
      'Eliminar carro',
      `¿Deseas eliminar ${carro.marca} ${carro.modelo}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => eliminarMutation.mutate(carro.id),
        },
      ],
    );
  };

  const renderInput = (
    label: string,
    value: string,
    onChangeText: (value: string) => void,
    onBlur: () => void,
    errors: readonly unknown[],
    showError: boolean,
    keyboardType: 'default' | 'number-pad' | 'decimal-pad' = 'default',
    autoCapitalize: 'none' | 'sentences' | 'words' = 'sentences',
  ) => (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        accessibilityLabel={label}
        placeholder={label}
        placeholderTextColor={colors.muted}
        value={value}
        onChangeText={(nextValue) => {
          setSubmissionError(null);
          onChangeText(nextValue);
        }}
        onBlur={onBlur}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        style={[styles.input, showError && errors.length > 0 && styles.inputError]}
      />
      {showError && errors.map((fieldError, index) => (
        <Text key={`${label}-${index}`} style={styles.fieldError}>
          {String(fieldError)}
        </Text>
      ))}
    </>
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Cargando inventario...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>No se pudieron cargar los carros: {error.message}</Text>
      </View>
    );
  }

  return (
    <FlatList
      ref={listRef}
      style={styles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
      data={carros}
      keyExtractor={(item) => item.id}
      extraData={carroEditando?.id}
      ListHeaderComponent={
        <View>
          <View style={styles.hero}>
            <Text style={styles.brandEyebrow}>PATIO TUERCA</Text>
            <Text style={styles.heroTitle}>Tu próximo carro empieza aquí</Text>
            <Text style={styles.heroSubtitle}>
              Administra tu inventario de forma simple y segura.
            </Text>
            <View style={styles.accent} />
          </View>

          <View style={styles.formCard}>
            <Text style={styles.sectionEyebrow}>
              {carroEditando ? 'ACTUALIZA LA INFORMACIÓN' : 'NUEVA PUBLICACIÓN'}
            </Text>
            <Text style={styles.sectionTitle}>
              {carroEditando ? 'Editar carro' : 'Agregar un carro'}
            </Text>
            <Text style={styles.helperText}>
              Completa los datos para mantener tu inventario al día.
            </Text>

            <form.Field
              name="marca"
              validators={{
                onMount: ({ value }) => validateRequired(value, 'La marca'),
                onChange: ({ value }) => validateRequired(value, 'La marca'),
                onBlur: ({ value }) => validateRequired(value, 'La marca'),
                onSubmit: ({ value }) => validateRequired(value, 'La marca'),
              }}
            >
              {(field) => renderInput(
                'Marca',
                field.state.value,
                field.handleChange,
                field.handleBlur,
                field.state.meta.errors,
                field.state.meta.isTouched || field.state.meta.isDirty,
              )}
            </form.Field>

            <form.Field
              name="modelo"
              validators={{
                onMount: ({ value }) => validateRequired(value, 'El modelo'),
                onChange: ({ value }) => validateRequired(value, 'El modelo'),
                onBlur: ({ value }) => validateRequired(value, 'El modelo'),
                onSubmit: ({ value }) => validateRequired(value, 'El modelo'),
              }}
            >
              {(field) => renderInput(
                'Modelo',
                field.state.value,
                field.handleChange,
                field.handleBlur,
                field.state.meta.errors,
                field.state.meta.isTouched || field.state.meta.isDirty,
              )}
            </form.Field>

            <View style={styles.fieldRow}>
              <View style={styles.fieldHalf}>
                <form.Field
                  name="anio"
                  validators={{
                    onMount: ({ value }) => validateYear(value),
                    onChange: ({ value }) => validateYear(value),
                    onBlur: ({ value }) => validateYear(value),
                    onSubmit: ({ value }) => validateYear(value),
                  }}
                >
                  {(field) => renderInput(
                    'Año',
                    field.state.value,
                    field.handleChange,
                    field.handleBlur,
                    field.state.meta.errors,
                    field.state.meta.isTouched || field.state.meta.isDirty,
                    'number-pad',
                  )}
                </form.Field>
              </View>
              <View style={styles.fieldHalf}>
                <form.Field
                  name="color"
                  validators={{
                    onMount: ({ value }) => validateRequired(value, 'El color'),
                    onChange: ({ value }) => validateRequired(value, 'El color'),
                    onBlur: ({ value }) => validateRequired(value, 'El color'),
                    onSubmit: ({ value }) => validateRequired(value, 'El color'),
                  }}
                >
                  {(field) => renderInput(
                    'Color',
                    field.state.value,
                    field.handleChange,
                    field.handleBlur,
                    field.state.meta.errors,
                    field.state.meta.isTouched || field.state.meta.isDirty,
                  )}
                </form.Field>
              </View>
            </View>

            <form.Field
              name="kilometraje"
              validators={{
                onMount: ({ value }) => validatePositiveNumber(value, 'El kilometraje'),
                onChange: ({ value }) => validatePositiveNumber(value, 'El kilometraje'),
                onBlur: ({ value }) => validatePositiveNumber(value, 'El kilometraje'),
                onSubmit: ({ value }) => validatePositiveNumber(value, 'El kilometraje'),
              }}
            >
              {(field) => renderInput(
                'Kilometraje',
                field.state.value,
                field.handleChange,
                field.handleBlur,
                field.state.meta.errors,
                field.state.meta.isTouched || field.state.meta.isDirty,
                'decimal-pad',
              )}
            </form.Field>

            <form.Field
              name="precio"
              validators={{
                onMount: ({ value }) => validatePositiveNumber(value, 'El precio'),
                onChange: ({ value }) => validatePositiveNumber(value, 'El precio'),
                onBlur: ({ value }) => validatePositiveNumber(value, 'El precio'),
                onSubmit: ({ value }) => validatePositiveNumber(value, 'El precio'),
              }}
            >
              {(field) => renderInput(
                'Precio (USD)',
                field.state.value,
                field.handleChange,
                field.handleBlur,
                field.state.meta.errors,
                field.state.meta.isTouched || field.state.meta.isDirty,
                'decimal-pad',
              )}
            </form.Field>

            {submissionError ? (
              <Text style={styles.errorText}>
                No se pudo {carroEditando ? 'actualizar' : 'agregar'} el carro: {submissionError}
              </Text>
            ) : null}
            {eliminarMutation.isError && (
              <Text style={styles.errorText}>
                No se pudo eliminar el carro: {eliminarMutation.error.message}
              </Text>
            )}

            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting, state.values] as const}
            >
              {([canSubmit, isSubmitting, values]) => {
                const disabled =
                  !canSubmit || !isCarroFormValid(values) || isSubmitting || guardando;
                return (
                  <View style={styles.formActions}>
                    <Pressable
                      accessibilityRole="button"
                      onPress={guardar}
                      disabled={disabled}
                      style={[styles.primaryButton, disabled && styles.buttonDisabled]}
                    >
                      {isSubmitting || guardando ? (
                        <ActivityIndicator color={colors.background} />
                      ) : (
                        <Text style={styles.primaryButtonText}>
                          {carroEditando ? 'Guardar cambios' : 'Publicar carro'}
                        </Text>
                      )}
                    </Pressable>
                    {carroEditando && (
                      <Pressable
                        accessibilityRole="button"
                        onPress={cancelarEdicion}
                        disabled={guardando}
                        style={styles.secondaryButton}
                      >
                        <Text style={styles.secondaryButtonText}>Cancelar edición</Text>
                      </Pressable>
                    )}
                  </View>
                );
              }}
            </form.Subscribe>
          </View>

          <View style={styles.inventoryHeading}>
            <View>
              <Text style={styles.sectionEyebrow}>ENCUENTRA TU OPCIÓN</Text>
              <Text style={styles.sectionTitle}>Carros disponibles</Text>
            </View>
            <Text style={styles.countBadge}>{carros.length}</Text>
          </View>
        </View>
      }
      ListEmptyComponent={
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>Aún no hay carros publicados</Text>
          <Text style={styles.helperText}>Agrega el primero desde el formulario.</Text>
        </View>
      }
      renderItem={({ item }) => {
        const precio = formatCarroNumber(item.precio);
        const kilometraje = formatCarroNumber(item.kilometraje);
        const eliminando = eliminandoIds.includes(item.id);

        return (
          <View style={styles.carCard}>
            <View style={styles.carCardHeader}>
              <View style={styles.carIcon}>
                <Text style={styles.carIconText}>
                  {(item.marca || 'C').slice(0, 1).toUpperCase()}
                </Text>
              </View>
              <View style={styles.carHeading}>
                <Text style={styles.carTitle}>
                  {item.marca || 'Marca no disponible'} {item.modelo || ''}
                </Text>
                <Text style={styles.carSubtitle}>
                  {item.anio ? `Año ${item.anio}` : 'Año no disponible'} · {item.color || 'Color no disponible'}
                </Text>
              </View>
              <View style={styles.priceTag}>
                <Text style={styles.priceText}>
                  {precio === null ? 'Precio no disponible' : `$${precio}`}
                </Text>
              </View>
            </View>
            <View style={styles.cardDivider} />
            <View style={styles.cardFooter}>
              <Text style={styles.mileageText}>
                {kilometraje === null ? 'Kilometraje no disponible' : `${kilometraje} km`}
              </Text>
              <View style={styles.cardActions}>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => editar(item)}
                  disabled={guardando || eliminarMutation.isPending}
                  style={styles.editButton}
                >
                  <Text style={styles.editButtonText}>Editar</Text>
                </Pressable>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => confirmarEliminacion(item)}
                  disabled={eliminandoIds.length > 0}
                  style={[styles.deleteButton, eliminando && styles.buttonDisabled]}
                >
                  <Text style={styles.deleteButtonText}>
                    {eliminando ? 'Eliminando...' : 'Eliminar'}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
}

const colors = {
  background: PatiotuercaColors.background,
  primary: PatiotuercaColors.primary,
  secondary: PatiotuercaColors.secondary,
  text: PatiotuercaColors.text,
  muted: PatiotuercaColors.muted,
  error: PatiotuercaColors.primary,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: 36,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.background,
  },
  loadingText: {
    color: colors.muted,
    marginTop: 12,
    fontSize: 15,
  },
  hero: {
    backgroundColor: colors.primary,
    paddingHorizontal: 22,
    paddingTop: 58,
    paddingBottom: 27,
  },
  brandEyebrow: {
    color: colors.background,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
  },
  heroTitle: {
    color: colors.background,
    fontSize: 27,
    lineHeight: 34,
    fontWeight: '800',
    marginTop: 12,
  },
  heroSubtitle: {
    color: colors.background,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 7,
  },
  accent: {
    width: 48,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.secondary,
    marginTop: 20,
  },
  formCard: {
    backgroundColor: colors.background,
    marginHorizontal: 16,
    marginTop: 18,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.secondary,
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 3,
  },
  sectionEyebrow: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 21,
    fontWeight: '800',
    marginTop: 5,
  },
  helperText: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 4,
    marginBottom: 14,
  },
  label: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 11,
    marginBottom: 6,
  },
  input: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 9,
    backgroundColor: colors.background,
    color: colors.text,
    paddingHorizontal: 13,
    fontSize: 15,
  },
  inputError: {
    borderColor: colors.error,
  },
  fieldError: {
    color: colors.error,
    fontSize: 12,
    marginTop: 4,
  },
  fieldRow: {
    flexDirection: 'row',
    gap: 12,
  },
  fieldHalf: {
    flex: 1,
  },
  errorText: {
    color: colors.error,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 12,
  },
  formActions: {
    marginTop: 20,
    gap: 9,
  },
  primaryButton: {
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  primaryButtonText: {
    color: colors.background,
    fontSize: 15,
    fontWeight: '800',
  },
  buttonDisabled: {
    opacity: 0.55,
  },
  secondaryButton: {
    minHeight: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
  inventoryHeading: {
    marginHorizontal: 18,
    marginTop: 27,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countBadge: {
    minWidth: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.secondary,
    color: colors.text,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    fontWeight: '800',
    paddingTop: 6,
  },
  emptyCard: {
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 14,
    backgroundColor: colors.background,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  carCard: {
    backgroundColor: colors.background,
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.secondary,
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  carCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  carIcon: {
    height: 42,
    width: 42,
    borderRadius: 12,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carIconText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '800',
  },
  carHeading: {
    flex: 1,
  },
  carTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  carSubtitle: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 4,
  },
  priceTag: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 7,
  },
  priceText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '800',
  },
  cardDivider: {
    height: 1,
    backgroundColor: colors.secondary,
    marginVertical: 13,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  mileageText: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '600',
  },
  cardActions: {
    flexDirection: 'row',
    gap: 8,
  },
  editButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  editButtonText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700',
  },
  deleteButton: {
    borderRadius: 8,
    backgroundColor: colors.secondary,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  deleteButtonText: {
    color: colors.error,
    fontSize: 13,
    fontWeight: '700',
  },
});


================================================
ðŸ“„ ARCHIVO: src\app\_layout.tsx
================================================

//Tab desde expo-router, define la navegacion de tipo Stack
//Importamos QueryClient y QuerClientProvider desde tanstack
//Estos se usan para configurar y proveer el cliente desde queries en toda la app
import {Tabs} from 'expo-router'
import{QueryClient, QueryClientProvider} from '@tanstack/react-query'

//Creamos una instancia QueryClient
//Este objeto administra la cache y el ciclo de vida de las querys/mutations
const qc = new QueryClient()

//componente layour, para envolver la navegacion dentro del QueryClientProvider
//con esto, todos los componentes hijos pueden usar useQuery y useMutation
//Este es el punto de integracion entra TanStack Query y la navegacion de Expo

export default function Layout(){
  return(
    <QueryClientProvider client= {qc}>
      <Tabs>
        <Tabs.Screen name= "index" options = {{title: 'Home'}}/>
        <Tabs.Screen name= "explore" options = {{title: 'Explore'}}/>
      </Tabs>
    </QueryClientProvider>
  )
}

================================================
ðŸ“„ ARCHIVO: src\components\animated-icon.tsx
================================================

import { Image } from 'expo-image';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, { Easing, Keyframe } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

const INITIAL_SCALE_FACTOR = Dimensions.get('screen').height / 90;
const DURATION = 600;

export function AnimatedSplashOverlay() {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const splashKeyframe = new Keyframe({
    0: {
      transform: [{ scale: 1 }],
      opacity: 1,
    },
    20: {
      opacity: 1,
    },
    70: {
      opacity: 0,
      easing: Easing.elastic(0.7),
    },
    100: {
      opacity: 0,
      transform: [{ scale: 1 }],
      easing: Easing.elastic(0.7),
    },
  });

  const image = <Image style={styles.image} source={require('@/assets/images/expo-logo.png')} />;

  return animate ? (
    <Animated.View
      entering={splashKeyframe.duration(DURATION).withCallback((finished) => {
        'worklet';
        if (finished) {
          scheduleOnRN(setVisible, false);
        }
      })}
      style={styles.splashOverlay}>
      {image}
    </Animated.View>
  ) : (
    <View
      onLayout={() => {
        SplashScreen.hideAsync().finally(() => {
          setAnimate(true);
        });
      }}
      style={styles.splashOverlay}>
      {image}
    </View>
  );
}

const keyframe = new Keyframe({
  0: {
    transform: [{ scale: INITIAL_SCALE_FACTOR }],
  },
  100: {
    transform: [{ scale: 1 }],
    easing: Easing.elastic(0.7),
  },
});

const logoKeyframe = new Keyframe({
  0: {
    transform: [{ scale: 1.3 }],
    opacity: 0,
  },
  40: {
    transform: [{ scale: 1.3 }],
    opacity: 0,
    easing: Easing.elastic(0.7),
  },
  100: {
    opacity: 1,
    transform: [{ scale: 1 }],
    easing: Easing.elastic(0.7),
  },
});

const glowKeyframe = new Keyframe({
  0: {
    transform: [{ rotateZ: '0deg' }],
  },
  100: {
    transform: [{ rotateZ: '7200deg' }],
  },
});

export function AnimatedIcon() {
  return (
    <View style={styles.iconContainer}>
      <Animated.View entering={glowKeyframe.duration(60 * 1000 * 4)} style={styles.glow}>
        <Image style={styles.glow} source={require('@/assets/images/logo-glow.png')} />
      </Animated.View>

      <Animated.View entering={keyframe.duration(DURATION)} style={styles.background} />
      <Animated.View style={styles.imageContainer} entering={logoKeyframe.duration(DURATION)}>
        <Image style={styles.image} source={require('@/assets/images/expo-logo.png')} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  glow: {
    width: 201,
    height: 201,
    position: 'absolute',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 128,
    height: 128,
    zIndex: 100,
  },
  image: {
    width: 76,
    height: 71,
  },
  background: {
    borderRadius: 40,
    experimental_backgroundImage: `linear-gradient(180deg, #3C9FFE, #0274DF)`,
    width: 128,
    height: 128,
    position: 'absolute',
  },
  splashOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#208AEF',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
});


================================================
ðŸ“„ ARCHIVO: src\components\animated-icon.web.tsx
================================================

import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import Animated, { Keyframe, Easing } from 'react-native-reanimated';

import classes from './animated-icon.module.css';
const DURATION = 300;

export function AnimatedSplashOverlay() {
  return null;
}

const keyframe = new Keyframe({
  0: {
    transform: [{ scale: 0 }],
  },
  60: {
    transform: [{ scale: 1.2 }],
    easing: Easing.elastic(1.2),
  },
  100: {
    transform: [{ scale: 1 }],
    easing: Easing.elastic(1.2),
  },
});

const logoKeyframe = new Keyframe({
  0: {
    opacity: 0,
  },
  60: {
    transform: [{ scale: 1.2 }],
    opacity: 0,
    easing: Easing.elastic(1.2),
  },
  100: {
    transform: [{ scale: 1 }],
    opacity: 1,
    easing: Easing.elastic(1.2),
  },
});

const glowKeyframe = new Keyframe({
  0: {
    transform: [{ rotateZ: '-180deg' }, { scale: 0.8 }],
    opacity: 0,
  },
  [DURATION / 1000]: {
    transform: [{ rotateZ: '0deg' }, { scale: 1 }],
    opacity: 1,
    easing: Easing.elastic(0.7),
  },
  100: {
    transform: [{ rotateZ: '7200deg' }],
  },
});

export function AnimatedIcon() {
  return (
    <View style={styles.iconContainer}>
      <Animated.View entering={glowKeyframe.duration(60 * 1000 * 4)} style={styles.glow}>
        <Image style={styles.glow} source={require('@/assets/images/logo-glow.png')} />
      </Animated.View>

      <Animated.View style={styles.background} entering={keyframe.duration(DURATION)}>
        <div className={classes.expoLogoBackground} />
      </Animated.View>

      <Animated.View style={styles.imageContainer} entering={logoKeyframe.duration(DURATION)}>
        <Image style={styles.image} source={require('@/assets/images/expo-logo.png')} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    zIndex: 1000,
    position: 'absolute',
    top: 128 / 2 + 138,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  glow: {
    width: 201,
    height: 201,
    position: 'absolute',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 128,
    height: 128,
  },
  image: {
    position: 'absolute',
    width: 76,
    height: 71,
  },
  background: {
    width: 128,
    height: 128,
    position: 'absolute',
  },
});


================================================
ðŸ“„ ARCHIVO: src\components\app-tabs.tsx
================================================

import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      labelStyle={{ selected: { color: colors.text } }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/home.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}


================================================
ðŸ“„ ARCHIVO: src\components\app-tabs.web.tsx
================================================

import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  TabTriggerSlotProps,
  TabListProps,
} from 'expo-router/ui';
import { SymbolView } from 'expo-symbols';
import { Pressable, useColorScheme, View, StyleSheet } from 'react-native';

import { ExternalLink } from './external-link';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>
          <TabTrigger name="explore" href="/explore" asChild>
            <TabButton>Explore</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

export function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  return (
    <Pressable {...props} style={({ pressed }) => pressed && styles.pressed}>
      <ThemedView
        type={isFocused ? 'backgroundSelected' : 'backgroundElement'}
        style={styles.tabButtonView}>
        <ThemedText type="small" themeColor={isFocused ? 'text' : 'textSecondary'}>
          {children}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}

export function CustomTabList(props: TabListProps) {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <View {...props} style={styles.tabListContainer}>
      <ThemedView type="backgroundElement" style={styles.innerContainer}>
        <ThemedText type="smallBold" style={styles.brandText}>
          Expo Starter
        </ThemedText>

        {props.children}

        <ExternalLink href="https://docs.expo.dev" asChild>
          <Pressable style={styles.externalPressable}>
            <ThemedText type="link">Docs</ThemedText>
            <SymbolView
              tintColor={colors.text}
              name={{ ios: 'arrow.up.right.square', web: 'link' }}
              size={12}
            />
          </Pressable>
        </ExternalLink>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabListContainer: {
    position: 'absolute',
    width: '100%',
    padding: Spacing.three,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  innerContainer: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.five,
    borderRadius: Spacing.five,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    gap: Spacing.two,
    maxWidth: MaxContentWidth,
  },
  brandText: {
    marginRight: 'auto',
  },
  pressed: {
    opacity: 0.7,
  },
  tabButtonView: {
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.three,
  },
  externalPressable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.one,
    marginLeft: Spacing.three,
  },
});


================================================
ðŸ“„ ARCHIVO: src\components\external-link.tsx
================================================

import { Href, Link } from 'expo-router';
import { openBrowserAsync, WebBrowserPresentationStyle } from 'expo-web-browser';
import { type ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: Href & string };

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Link
      target="_blank"
      {...rest}
      href={href}
      onPress={async (event) => {
        if (process.env.EXPO_OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href, {
            presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
          });
        }
      }}
    />
  );
}


================================================
ðŸ“„ ARCHIVO: src\components\hint-row.tsx
================================================

import type { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Spacing } from '@/constants/theme';

type HintRowProps = {
  title?: string;
  hint?: ReactNode;
};

export function HintRow({ title = 'Try editing', hint = 'app/index.tsx' }: HintRowProps) {
  return (
    <View style={styles.stepRow}>
      <ThemedText type="small">{title}</ThemedText>
      <ThemedView type="backgroundSelected" style={styles.codeSnippet}>
        <ThemedText themeColor="textSecondary">{hint}</ThemedText>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  stepRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codeSnippet: {
    borderRadius: Spacing.two,
    paddingVertical: Spacing.half,
    paddingHorizontal: Spacing.two,
  },
});


================================================
ðŸ“„ ARCHIVO: src\components\themed-text.tsx
================================================

import { Platform, StyleSheet, Text, type TextProps } from 'react-native';

import { Fonts, ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'small' | 'smallBold' | 'subtitle' | 'link' | 'linkPrimary' | 'code';
  themeColor?: ThemeColor;
};

export function ThemedText({ style, type = 'default', themeColor, ...rest }: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        { color: theme[themeColor ?? 'text'] },
        type === 'default' && styles.default,
        type === 'title' && styles.title,
        type === 'small' && styles.small,
        type === 'smallBold' && styles.smallBold,
        type === 'subtitle' && styles.subtitle,
        type === 'link' && styles.link,
        type === 'linkPrimary' && styles.linkPrimary,
        type === 'code' && styles.code,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  small: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500,
  },
  smallBold: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 700,
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500,
  },
  title: {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: 52,
  },
  subtitle: {
    fontSize: 32,
    lineHeight: 44,
    fontWeight: 600,
  },
  link: {
    lineHeight: 30,
    fontSize: 14,
  },
  linkPrimary: {
    lineHeight: 30,
    fontSize: 14,
    color: '#3c87f7',
  },
  code: {
    fontFamily: Fonts.mono,
    fontWeight: Platform.select({ android: 700 }) ?? 500,
    fontSize: 12,
  },
});


================================================
ðŸ“„ ARCHIVO: src\components\themed-view.tsx
================================================

import { View, type ViewProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: ThemeColor;
};

export function ThemedView({ style, lightColor, darkColor, type, ...otherProps }: ThemedViewProps) {
  const theme = useTheme();

  return <View style={[{ backgroundColor: theme[type ?? 'background'] }, style]} {...otherProps} />;
}


================================================
ðŸ“„ ARCHIVO: src\components\ui\collapsible.tsx
================================================

import { SymbolView } from 'expo-symbols';
import { PropsWithChildren, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <ThemedView>
      <Pressable
        style={({ pressed }) => [styles.heading, pressed && styles.pressedHeading]}
        onPress={() => setIsOpen((value) => !value)}>
        <ThemedView type="backgroundElement" style={styles.button}>
          <SymbolView
            name={{ ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' }}
            size={14}
            weight="bold"
            tintColor={theme.text}
            style={{ transform: [{ rotate: isOpen ? '-90deg' : '90deg' }] }}
          />
        </ThemedView>

        <ThemedText type="small">{title}</ThemedText>
      </Pressable>
      {isOpen && (
        <Animated.View entering={FadeIn.duration(200)}>
          <ThemedView type="backgroundElement" style={styles.content}>
            {children}
          </ThemedView>
        </Animated.View>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  pressedHeading: {
    opacity: 0.7,
  },
  button: {
    width: Spacing.four,
    height: Spacing.four,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginTop: Spacing.three,
    borderRadius: Spacing.three,
    marginLeft: Spacing.four,
    padding: Spacing.four,
  },
});


================================================
ðŸ“„ ARCHIVO: src\components\web-badge.tsx
================================================

import { version } from 'expo/package.json';
import { Image } from 'expo-image';
import { useColorScheme, StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Spacing } from '@/constants/theme';

export function WebBadge() {
  const scheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="code" themeColor="textSecondary" style={styles.versionText}>
        v{version}
      </ThemedText>
      <Image
        source={
          scheme === 'dark'
            ? require('@/assets/images/expo-badge-white.png')
            : require('@/assets/images/expo-badge.png')
        }
        style={styles.badgeImage}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.five,
    alignItems: 'center',
    gap: Spacing.two,
  },
  versionText: {
    textAlign: 'center',
  },
  badgeImage: {
    width: 123,
    aspectRatio: 123 / 24,
  },
});


================================================
ðŸ“„ ARCHIVO: src\constants\theme.ts
================================================

/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const PatiotuercaColors = {
  primary: '#E72927',
  background: '#FCEEF2',
  secondary: '#EDCABF',
  text: '#201B17',
  muted: '#756665',
} as const;

export const Colors = {
  light: {
    text: PatiotuercaColors.text,
    background: PatiotuercaColors.background,
    backgroundElement: PatiotuercaColors.secondary,
    backgroundSelected: PatiotuercaColors.primary,
    textSecondary: PatiotuercaColors.muted,
  },
  dark: {
    text: PatiotuercaColors.text,
    background: PatiotuercaColors.background,
    backgroundElement: PatiotuercaColors.secondary,
    backgroundSelected: PatiotuercaColors.primary,
    textSecondary: PatiotuercaColors.muted,
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;


================================================
ðŸ“„ ARCHIVO: src\hooks\use-color-scheme.ts
================================================

export { useColorScheme } from 'react-native';


================================================
ðŸ“„ ARCHIVO: src\hooks\use-color-scheme.web.ts
================================================

import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const colorScheme = useRNColorScheme();

  if (hasHydrated) {
    return colorScheme;
  }

  return 'light';
}


================================================
ðŸ“„ ARCHIVO: src\hooks\use-theme.ts
================================================

/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function useTheme() {
  const scheme = useColorScheme();
  const theme = scheme === 'unspecified' ? 'light' : scheme;

  return Colors[theme];
}


================================================
ðŸ“„ ARCHIVO: src\hooks\useCarros.ts
================================================

//Importamos los hooks de tancstack query
// -UseQuery: para consultas get
//useMutation: para operaciones POST(PUT/DELETE)
//useQueryClient: para interactuar con la cache(invalidar, refrecar)
import { useQuery, useMutation, useQueryClient, useMutationState } from '@tanstack/react-query'
import { carrosService } from '../api/carros.service'
import type { Carro, CarroInput } from '../types/carro'

//Definir una constante key que servira como identificador unico 
//para las queries relacionadas con carros
const KEY = ['carros'] as const
const DELETE_KEY = [...KEY, 'eliminar'] as const

export function useCarrosEliminandoIds() {
    const variables = useMutationState({
        filters: { mutationKey: DELETE_KEY, status: 'pending' },
        select: (mutation) => mutation.state.variables,
    })

    return variables.filter((id): id is string => typeof id === 'string')
}

export function useCarros(){
    return useQuery({
        queryKey: KEY,
        queryFn: ()=>{
            console.log("GET ejecutado con tancstack")
            return carrosService.getAll()
    },
    staleTime: 1000*60*5
})  
}

export function useAgregarCarro(){
    const qc = useQueryClient()
    return useMutation({
        mutationFn: (carro: CarroInput) => carrosService.add(carro),
        onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
    })
}

export function useEditarCarro(){
    const qc = useQueryClient()
    return useMutation({
        mutationFn: ({ id, carro }: { id: string; carro: CarroInput }) =>
            carrosService.update(id, carro),
        onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
    })
}

export function useEliminarCarro(){
    const qc = useQueryClient()
    return useMutation({
        mutationKey: DELETE_KEY,
        mutationFn: (id: string) => carrosService.remove(id),
        onMutate: async (id) => {
            await qc.cancelQueries({ queryKey: KEY })
            const previousCarros = qc.getQueryData<Carro[]>(KEY)
            qc.setQueryData<Carro[]>(KEY, (carros) =>
                carros?.filter((carro) => carro.id !== id),
            )
            return { previousCarros }
        },
        onError: (_error, _id, context) => {
            if (context?.previousCarros !== undefined) {
                qc.setQueryData(KEY, context.previousCarros)
            }
        },
        onSettled: () => qc.invalidateQueries({ queryKey: KEY }),
    })
}

================================================
ðŸ“„ ARCHIVO: src\types\carro.ts
================================================

export interface Carro {
    id: string;
    marca: string;
    anio: number;
    modelo: string;
    color: string;
    kilometraje: number;
    precio: number;
}

export type CarroInput = Omit<Carro, 'id'>;

================================================
ðŸ“„ ARCHIVO: src\utils\carros.ts
================================================

export function formatCarroNumber(value: unknown): string | null {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  const number = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(number) ? number.toLocaleString('es-EC') : null;
}


================================================
ðŸ“„ ARCHIVO: tsconfig.json
================================================

{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": [
        "./src/*"
      ],
      "@/assets/*": [
        "./assets/*"
      ]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts"
  ]
}
