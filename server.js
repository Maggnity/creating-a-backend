import app from './app';
import router from './src/routes/homeRoutes';

const port = 3001;

app.listen(port, ()  => {
    console.log(`Escutando na porta ${port}`);
})