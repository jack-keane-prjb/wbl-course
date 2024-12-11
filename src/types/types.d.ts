// REC: каким-то образом автомтом читает этот файл
declare module "*.css" {
  const styles: { [key: string]: string };
  export = styles;
}

declare module "*.jpeg";
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
