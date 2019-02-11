import { Pessoal } from "./pessoal";

export interface Usuario{
    id:string;
    nome:string;
    email:string;
    telefone?:string;
    rg?:string;
    cpf?:string;
    perfilPessoal?:Pessoal;
    //perfilProfissional?:Profissional;
    //perfisInstituicoes?:Institucional[];
}