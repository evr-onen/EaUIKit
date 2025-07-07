/// <reference types="vite/client" />

declare interface ImportMeta {
  glob: (pattern: string, options?: {
    query?: string;
    import?: string;
    eager?: boolean;
    as?: string
  }) => Record<string, () => Promise<any>>;
}
