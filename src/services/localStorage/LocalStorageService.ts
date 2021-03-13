import { DadosAutenticacao } from "../../interfaces/autenticacao/DadosAutenticacao";

export const SaveAuthentication = (DadosAutenticacao: DadosAutenticacao) => {
  localStorage.setItem(
    "ls.easyIn",
    JSON.stringify(DadosAutenticacao)
  );
};

export const GetAuthentication = (): DadosAutenticacao | null => {
  let token: string | null = localStorage.getItem("ls.easyIn");
  if (token) {
    return JSON.parse(token);
  } else {
    return null;
  }
};

export const RemoveAuthentication = () => {
  localStorage.removeItem("ls.easyIn");
};