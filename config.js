var config = {

    cookieSecret : "fzhizu",
    database : {
        client : 'mongodb',
        connection : {
            host : 'localhost',
            port: '27017',
            database : 'fzhizu'
        }
    },
    dbConnectString: 'mongodb://localhost:27017/fzhizu' 

};

module.exports = config;