// declare interface Fn<T = any, R = T> {
//   (...arg: T[]): R;
// }

// declare interface PromiseFn<T = any, R = T> {
//   (...arg: T[]): Promise<R>;
// }

// declare type RefType<T> = T | null;

// declare type LabelValueOptions = {
//   label: string;
//   value: any;
// }[];

// declare type EmitType = (event: string, ...args: any[]) => void;

// declare type TargetContext = '_self' | '_blank';

// declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
//   $el: T;
// }

// declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;

// declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;

// declare module '*.vue' {
//   import { defineComponent } from 'vue';
//   const Component: ReturnType<typeof defineComponent>;
//   export default Component;
// }

// declare module '*.vue' {
//   import { App, defineComponent } from 'vue'
//   const component: ReturnType<typeof defineComponent> & {
//     install(app: App): void
//   }
//   export default component
// }

// declare module '*.vue' {
//   import { defineComponent } from 'vue';
//   const Component: ReturnType<typeof defineComponent>;
//   export default Component;
// }


// declare module '*.vue' {
//   import Vue from 'vue';
//   export default Vue;
// }

// declare module '*.vue' {
//   import { App, defineComponent } from 'vue';
//   const component: ReturnType<typeof defineComponent> & {
//     install(app: App): void;
//   };
//   export default component;
// }


// declare module '*.vue' {
//   import { DefineComponent } from 'vue';
//   const Component: DefineComponent<{}, {}, any>;
//   export default Component;
// }


declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module 'element-plus';

