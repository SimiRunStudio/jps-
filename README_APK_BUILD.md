# Asmaron Learn Languages v19.07 — Android APK build

This package is arranged so the project files sit at the repository root. Upload the *contents* of this folder (not the containing folder) to the root of your GitHub repository. Keep hidden folders enabled so `.github/workflows/build-apk.yml` is included.

## Local preflight

```bash
npm run verify
```

The preflight checks the root project files, required PNG signatures, app.json image paths, Android application ID, and workflow file.

## GitHub APK build

Open **Actions → Build Asmaron Android APK → Run workflow**. The workflow installs dependencies, aligns Expo SDK packages, validates Expo config, generates Android native files, builds `assembleDebug`, verifies the APK archive, and uploads it as `Asmaron-Learn-Languages-v19-06-debug-APK`.

## Important

A successful source preflight is not proof of a successful Android build or real-device performance. Install and test the APK on target Android devices before release. This starter app includes local lesson/flashcard flows; cloud AI, voice, account sync, payments, multiplayer and other services require separate backend/provider integrations.
