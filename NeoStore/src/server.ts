import app from './app';
import * as dotenv from 'dotenv';

dotenv.config();
// console.log(process.env.DATA_BASE);

const portNumber:number = Number(process.env.SERVER_PORT);

const PORT = portNumber || 3000;

app.listen(PORT, () => {
    console.log('Express server listening on port check ' + PORT);
});
