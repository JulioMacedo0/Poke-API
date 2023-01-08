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
      return `${defaultTheme.dark_green}`;
      break;
    case "normal":
      return `${defaultTheme.normal}`;
      break;
    case "electric":
      return `${defaultTheme.yellow}`;
      break;
    case "poison":
      return `${defaultTheme.purple}`;
      break;
    case "ground":
      return `${defaultTheme.brown}`;
      break;
    case "fairy":
      return `${defaultTheme.pink}`;
      break;

    default:
      return `${defaultTheme.black}`;
      break;
  }
};
