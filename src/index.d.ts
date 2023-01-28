declare module '*.png';
declare module '*.scss' {
  const content: { [key: string]: any };
  export = content;
}
