import { Sequelize } from "sequelize";
import database from "../config/database";
import Aluno from "../models/alunoModel";
import Foto from "../models/fotoModel";
import User from "../models/userModel";

const models = [
	Aluno,
	User,
	Foto
];

const connection = new Sequelize(database)

models.forEach(model => model.init(connection))
models.forEach(model => model.associate && model.associate(connection.models))