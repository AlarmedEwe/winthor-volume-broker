const oracledb = require('oracledb');

class Crud
{
    connection;
    connectionData = {
        // Data to connect with Database
    };

    async constructor()
    {
        oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    }

    async LoadOrderHeader(orderNumber)
    {
        try {
            this.connection = await oracledb.getConnection(this.connectionData);

            console.log('Connected');

            let result = await this.connection.execute(
                `SELECT NUMVOLUME
                 FROM GRAMENSE.PCPEDC
                 WHERE NUMPED = :PEDIDO`,
                [orderNumber]    // bind value for Pedido
            );

            console.log('Result:');
            console.log(result.rows);
        } catch (error) {
            console.log(error);
        } finally {
            if (this.connection)
            {
                try {
                    await this.connection.close();
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }

    LoadPageData(orderNumber, pageNumber)
    {
        try {
            this.connection = await oracledb.getConnection(this.connectionData);

            console.log('Connected');

            let result = await this.connection.execute(
                `SELECT NUMVOLUME
                 FROM GRAMENSE.PCPEDC
                 WHERE NUMPED = :PEDIDO`,
                [orderNumber]    // bind value for Pedido
            );

            console.log('Result:');
            console.log(result.rows);
        } catch (error) {
            console.log(error);
        } finally {
            if (this.connection)
            {
                try {
                    await this.connection.close();
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
}

module.exports = Crud;