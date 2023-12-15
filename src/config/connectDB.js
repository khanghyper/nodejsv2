import { Sequelize } from "sequelize";


const sequelize = new Sequelize('db_nodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('connection has been successfully');
    } catch (error) {
        console.error('unable to connect to the database', error);
    }
}

export default connection;