import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://aldaci4na_user:xBtvS7STEk2JCBUgGh5zeZBESodG5mga@dpg-crh2o2t6l47c73c1s3sg-a.oregon-postgres.render.com/aldaci4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;