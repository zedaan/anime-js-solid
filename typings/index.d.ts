declare module "solid-js" {
  namespace JSX {
    interface Actions {
      draggable: boolean;
      model: [() => any, (v: any) => any];
    }
  }
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.gif'
declare module '*.less'