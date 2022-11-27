export interface Funcionario {
  nome: string;
  cpf: string;
  email: string;
  senha: string
}

export const FuncionariosColumns = [
  {
    key: "nome",
    type: "text",
    label: "Full Name"
},
{
    key: "cpf",
    type: "text",
    label: "cpf"
},
{
    key: "email",
    type: "text",
    label: "email"
},
{
  key: "senha",
  type: "text",
  label: "senha"
},
{
key: "Edit",
type: "isEdit",
label: "Edit"
}
];
