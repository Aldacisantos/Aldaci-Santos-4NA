import { isValidTitle, isValidPrice } from '../helpers/validationHelper';
import { BookRepository } from '../repositories/bookRepository';


export class BookService {
  private bookRepository: BookRepository;

  constructor() {
    this.bookRepository = new BookRepository();
  }

  async createBook(titulo: string, descricao: string, preco: number) {
    if (!isValidTitle(titulo)) {
      throw new Error('Título inválido');
    }

    if (!isValidPrice(preco)) {
      throw new Error('Valor inválido');
    }

    return await this.bookRepository.addBook(titulo, descricao, preco);
  }

  async listBooks() {
    return await this.bookRepository.getAllBooks();
  }
}