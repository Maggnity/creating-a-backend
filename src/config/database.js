require('dotenv').config();

module.exports =
	{
		host: process.env.DATABASE_HOST,
		dialect:'mariadb',
		database: process.env.DATABASE,
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		port: process.env.DATABASE_PORT,
		define: {
			timestamps: true,
			underscored: true,
			underscoredAll: true,
			'createdAt': 'created_at',
			'updatedAt': 'updatedAt'
		},
		dialectOptions: {
			timezone: 'America/Sao_Paulo'
		},
		timezone: 'America/Sao_Paulo',
  	}
;

