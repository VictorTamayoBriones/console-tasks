require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { saveDB, readDb } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

console.clear()

const main = async () => {

    let opt = '';
    const tasks = new Tasks();

    const tareasDb = readDb();

    if (tareasDb) {
        tasks.loadArrData(tareasDb);
    }

    do {
        opt = await inquirerMenu(); // imprime el menu

        switch (opt) {
            case '1':
                // Create option
                const desc = await readInput('Task Description:');
                tasks.createTask(desc);
                break;

            case '2':
                console.log(tasks._list);
                console.log(tasks.listArr);
                break;
        }

        // saveDB(tasks.listArr);

        await pause();
        // opt !== '0' && await pausa();
    } while (opt !== '0')

}

main()