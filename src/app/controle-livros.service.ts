import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Livro A',
      resumo: 'Resumo do Livro A',
      autores: ['Autor A1', 'Autor A2']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Livro B',
      resumo: 'Resumo do Livro B',
      autores: ['Autor B1']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Livro C',
      resumo: 'Resumo do Livro C',
      autores: ['Autor C1', 'Autor C2', 'Autor C3']
    }
  ];

  constructor() { }

  // Retorna a lista de livros
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  // Inclui um novo livro na lista
  incluir(livro: Livro): void {
    const maxCodigo = Math.max(...this.livros.map(l => l.codigo));
    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);
  }

  // Exclui um livro da lista dado o código
  excluir(codigo: number): void {
    const indice = this.livros.findIndex(l => l.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
