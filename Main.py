import pandas as pd
from sqlalchemy import create_engine

# 1. Conexão com o banco de dados PostgreSQL
# Substitua 'user', 'password' e 'database' pelos valores que você configurou no Docker
engine = create_engine('postgresql://postgres:senha123@localhost:5432/postgres')

# 2. Ler o arquivo CSV
# Certifique-se de que o arquivo CSV está na mesma pasta do script ou forneça o caminho completo
df = pd.read_csv('temperature_readings.csv')

# 3. Inserir dados no banco de dados
# 'temperature_readings' é o nome da tabela que será criada no PostgreSQL
df.to_sql('temperature_readings', engine, if_exists='replace', index=False)

print("Dados inseridos no banco de dados com sucesso!")