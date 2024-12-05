import pool from '../config/database';

const createBooksTable = async () => {
  const book = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2) NOT NULL     

      );
    `;
    await book.query(queryText);
    console.log('Livro cadastrado com sucesso!');
  } catch (err) {
    console.error('Erro ao cadastrar livro:', err);
  } finally {
      book.release();
  }
};

createBooksTable().then(() => process.exit(0));