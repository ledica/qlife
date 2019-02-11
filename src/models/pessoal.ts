import { Localidade } from "./localidade";

export interface Pessoal{
    id:string;
    nome:string;
    imageUrl?:string;
    telefone:string;
    rg:string;
    cpf:string;
    residencia:Localidade;
    trabalho:Localidade;
    nascimento:string;
    sexo:string;
    praticaEsporte:string;
    doadorOrgao:string;
    doadorSangue:string;
    tipoSangue:string;
    altura:number;
    peso:number;
   // dependentes?:Dependente;
}