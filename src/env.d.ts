/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />


interface ImportMetaEnv {
  readonly PUBLIC_PADDLE_VENDOR_ID: string;
  readonly PUBLIC_PADDLE_PRODUCT_ID: string;
  readonly PUBLIC_PADDLE_IS_SANDBOX: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}