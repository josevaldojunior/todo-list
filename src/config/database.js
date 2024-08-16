import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres' // especificando o banco PostgreSQL
});

export default sequelize;