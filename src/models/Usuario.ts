import Postagem from "./Postagem";

export default interface Usuario {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto?: string; // Deixei opcional para corresponder à classe Spring
    postagem?: Postagem[]; // Se necessário, ajuste para corresponder à classe Spring
}
