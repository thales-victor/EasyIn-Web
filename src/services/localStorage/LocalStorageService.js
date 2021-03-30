export const SaveAuthentication = (dadosAutenticacao) => {
  localStorage.setItem(
    "ls.easyIn",
    JSON.stringify(dadosAutenticacao)
  );
};

export const GetAuthentication = () => {
  let token = localStorage.getItem("ls.easyIn");
  if (token) {
    return JSON.parse(token);
  } else {
    return null;
  }
};

export const RemoveAuthentication = () => {
  localStorage.removeItem("ls.easyIn");
};