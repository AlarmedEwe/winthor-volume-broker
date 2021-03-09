const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function run() {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user            : 'cesardec',
            password        : 'D3cV01Broker',
            connectString   : '10.10.0.8:1521/WINT'
        });

        let result = await connection.execute(
            `SELECT NUMVOLUME
             FROM GRAMENSE.PCPEDC
             WHERE NUMPED = :PEDIDO`,
             [361191919]    // bind value for Pedido
        );

        console.log('RESULT:');
        console.log(result.rows);
    } catch (err) {
        console.log(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.log(err);
            }
        }
    }
}

setTimeout(() => {
        console.clear();
        run();
    }, 1000
);