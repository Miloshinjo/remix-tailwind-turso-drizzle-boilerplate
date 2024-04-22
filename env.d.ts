/// <reference types="@remix-run/node" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Very unsafe: TODO: replace this with server-only env variables
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
