import { Pool } from 'pg';
import pool from '../config/database';
import { Book } from '../models/bookModel';

export class BookRepository {
  private pool: Pool = pool;

  async getAllBooks() {
    try {
      const { rows } = await pool.query("SELECT * FROM books");
      return rows;
    } catch (error) {
      console.error("Erro ao buscar livros", error);
      throw new Error("Erro ao buscar livros");
    }
  }

  async addBook(title: string, author: string, price: number) {
    try {
      const query =
        "INSERT INTO books (title, author, price) VALUES ($1, $2, $3) RETURNING *";
      const { rows } = await pool.query(query, [title, author, price]);
      return rows[0];
    } catch (error) {
      console.error("Erro ao adicionar livro", error);
      throw new Error("Erro ao adicionar livro");
    }
  }
}