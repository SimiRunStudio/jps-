# Asmaron v19.07 — Quality checks

- Root project layout and required image assets are checked by `npm run verify`.
- Source-level smoke tests are run with `npm run test:smoke`.
- Expo SDK dependency compatibility is checked with `npx expo install --check`.
- GitHub Actions builds a debug APK and verifies that the APK exists and is a valid ZIP container.

These checks do not replace Android device testing. The current app is a starter build with three sample lessons; cloud AI, voice services, accounts, sync, payments and other service-dependent capabilities are not implemented in this source. Do not describe this build as fully feature-complete, lag-free or bug-free until the required integrations and real-device tests are completed.
