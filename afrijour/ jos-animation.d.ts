// jos-animation.d.ts

declare module "jos-animation" {
  namespace JOS {
    interface JOSOptions {
      debugMode?: boolean;
      animation?: string;
      duration?: number;
      rootMargin?: string;
      // Add other options as needed
    }

    function init(options: JOSOptions): void;
    function refresh(): void;
  }

  export = JOS;
}
