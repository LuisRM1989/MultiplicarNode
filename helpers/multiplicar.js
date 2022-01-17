const fs = require('fs');
var colors = require('colors');

const crearArchivo = (base = 5, listar = false, hasta = 10) => {
    const promesa = new Promise((resolve, reject) => {
        try {

            let salida = '';
            let consolam= '';
            for (let i = 0; i <= hasta; i++) {
                salida += `${base} x ${i} = ${base * i}\n`;
                consolam += `${base.toString().magenta} ${'x'.cyan} ${i} ${'='.yellow} ${base * i}\n`;
            }

            if (listar) {
                console.clear();
                console.log('===================================='.green);
                console.log(`Tabla del`.blue, base.red);
                console.log('===================================='.green);
                console.log(consolam);
            }
            //const data = new Uint8Array(Buffer.from(salida));
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            console.log(`tabla-${base}.txt creado`);
            resolve(`tabla-${base}.txt`);
        } catch (err) {
            reject(err);
        }
    });
    return promesa;
};

module.exports = {
    crearArchivo
}