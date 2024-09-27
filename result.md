```bash

dfx identity list
    abdulsalamamtech
    amtech
    anonymous
    default
    dev-abdulsalam
    integral *
    stemlabicp
/projects/integral_education/src/integral_education_frontend$ dfx ledger --network ic balance
    0.00000000 ICP
/project/integral_education/src/integral_education_frontend$ dfx deploy --network ic
    Deploying all canisters.
    Creating canisters...
    Creating canister integral_education_backend...
    created-at-time for canister integral_education_backend is 1727433014173713237.
    integral_education_backend canister created on network ic with canister id: 7oqdv-fyaaa-aaaan-qm4hq-cai
    Creating canister integral_education_frontend...
    created-at-time for canister integral_education_frontend is 1727433031546689240.
    integral_education_frontend canister created on network ic with canister id: 5tnn5-wqaaa-aaaan-qm4ia-cai
    Building canisters...
    WARN: .did file for canister 'internet_identity' does not exist.
    WARN: /home/abdulsalam/Desktop/project/integral_education/src/integral_education_backend/main.mo:5.8-5.13: warning [M0194], unused identifier Array (delete or rename to wildcard `_` or `_Array`)
    /home/abdulsalam/Desktop/project/integral_education/src/integral_education_backend/main.mo:53.7-53.12: warning [M0194], unused identifier Users (delete or rename to wildcard `_` or `_Users`)
    /home/abdulsalam/Desktop/project/integral_education/src/integral_education_backend/main.mo:186.16-186.27: warning [M0194], unused identifier currentTime (delete or rename to wildcard `_` or `_currentTime`)

Building frontend...
WARN: Building canisters before generate for Motoko
WARN: /home/abdulsalam/Desktop/project/integral_education/src/integral_education_backend/main.mo:5.8-5.13: warning [M0194], unused identifier Array (delete or rename to wildcard `_` or `_Array`)
/home/abdulsalam/Desktop/project/integral_education/src/integral_education_backend/main.mo:53.7-53.12: warning [M0194], unused identifier Users (delete or rename to wildcard `_` or `_Users`)
/home/abdulsalam/Desktop/project/integral_education/src/integral_education_backend/main.mo:186.16-186.27: warning [M0194], unused identifier currentTime (delete or rename to wildcard `_` or `_currentTime`)

Generating type declarations for canister internet_identity:
  /home/abdulsalam/Desktop/project/integral_education/src/declarations/internet_identity/internet_identity.did.d.ts
  /home/abdulsalam/Desktop/project/integral_education/src/declarations/internet_identity/internet_identity.did.js
  /home/abdulsalam/Desktop/project/integral_education/src/declarations/internet_identity/internet_identity.did
Generating type declarations for canister integral_education_frontend:
  /home/abdulsalam/Desktop/project/integral_education/src/declarations/integral_education_frontend/integral_education_frontend.did.d.ts
  /home/abdulsalam/Desktop/project/integral_education/src/declarations/integral_education_frontend/integral_education_frontend.did.js
  /home/abdulsalam/Desktop/project/integral_education/src/declarations/integral_education_frontend/integral_education_frontend.did
Generating type declarations for canister integral_education_backend:
  /home/abdulsalam/Desktop/project/integral_education/src/declarations/integral_education_backend/integral_education_backend.did.d.ts
  /home/abdulsalam/Desktop/project/integral_education/src/declarations/integral_education_backend/integral_education_backend.did.js
  /home/abdulsalam/Desktop/project/integral_education/src/declarations/integral_education_backend/integral_education_backend.did
DEPRECATION WARNING: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.

More info: https://sass-lang.com/d/legacy-js-api


(!) Some chunks are larger than 500 kBs after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.

Installing canisters...
Installing code for canister integral_education_backend, with canister ID 7oqdv-fyaaa-aaaan-qm4hq-cai
Installing code for canister integral_education_frontend, with canister ID 5tnn5-wqaaa-aaaan-qm4ia-cai
Uploading assets to asset canister...
WARN: This project does not define a security policy for some assets.
WARN: You should define a security policy in .ic-assets.json5. For example:
WARN: [
WARN:   {
WARN:     "match": "**/*",
WARN:     "security_policy": "standard"
WARN:   }
WARN: ]
WARN: Assets without any security policy: all
WARN: To disable the policy warning, define "disable_security_policy_warning": true in .ic-assets.json5.
Fetching properties for all assets in the canister.
Done fetching properties for all assets in the canister. Took 21.741µs
Starting batch.
Staging contents of new and changed assets in batch 1:
  /assets/index-30ce4723.css 1/1 (22522 bytes) sha 30ce47234826ec9b070add0dfef5780349bae19cd2f20c10588538a7473ce718 (with 7 headers)
  /logo2.svg 1/1 (15139 bytes) sha 037eb7ae523403daa588cf4f47a34c56a3f5de08a5a2dd2364839e45f14f4b8b (with 7 headers)
  /index.html 1/1 (417 bytes) sha 8d97164bc3506734e19d7619159d3351364591fe5391721cde875b8a2e13449e (with 7 headers)
  /index.html (gzip) 1/1 (283 bytes) sha 1409d74f402bfc90ab68bcd4c6c83a6b99818984ee8c6cc9c57333eeef1e2189 (with 7 headers)
  /assets/index-30ce4723.css (gzip) 1/1 (4921 bytes) sha 11d1f3a018a282440ad69157ecc4233db30d637c0a859715ed117212efb04f18 (with 7 headers)
  /favicon.ico 1/1 (15406 bytes) sha 4e8d31b50ffb59695389d94e393d299c5693405a12f6ccd08c31bcf9b58db2d4 (with 7 headers)
  /assets/index-2ff73d00.js (gzip) 1/1 (171231 bytes) sha c6b441ea793dc6b35b279a151b237b21e2e3b5c11de3d9e446419d6bdcd7c512 (with 7 headers)
  /assets/userImage-9a7b892a.png 1/1 (39362 bytes) sha 9a7b892a0ac17f9c70d7d464ff85e12c610a0979e4b2e28e2564fbbd53d05c08 (with 7 headers)
  /assets/index-2ff73d00.js 1/1 (516034 bytes) sha b254d33e30d59256cf8e75286156d2e62177e85a6520b4d4ef701f2196c8d73c (with 7 headers)
Committing batch.
Committing batch with 15 operations.
Deployed canisters.
URLs:
  Frontend canister via browser
    integral_education_frontend: https://5tnn5-wqaaa-aaaan-qm4ia-cai.icp0.io/
  Backend canister via Candid interface:
    integral_education_backend: https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=7oqdv-fyaaa-aaaan-qm4hq-cai

```