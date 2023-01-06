import { defaultTheme } from "../styles/themes/default";
export const GetColor = (type: string) => {
  switch (type) {
    case "grass":
      return `${defaultTheme.green}`;
      break;
    case "fire":
      return `${defaultTheme.red}`;
      break;
    case "water":
      return `${defaultTheme.blue}`;
      break;
    case "bug":
      return `${defaultTheme.brown}`;
      break;
    case "normal":
      return `${defaultTheme.skin_pink}`;
      break;

    default:
      return `${defaultTheme.black}`;
      break;
  }
};
