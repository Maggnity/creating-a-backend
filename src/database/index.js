import { Sequelize } from "sequelize";
import database from "../config/database";
import Aluno from "../models/alunoModel";
import User from "../models/userModel";

const models = [
	Aluno,
	User
];

const connection = new Sequelize(database)

models.forEach(model => model.init(connection))