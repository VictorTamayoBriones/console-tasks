require('colors');

const { inquirerMenu, pause, readInput, listTasksDelete, confirm, listTasksToComplete } = require('./helpers/inquirer');
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
                tasks.listTasks();
                break;
            case '3':
                tasks.listTasks('completed');
                break;
            case '4':
                tasks.listTasks('pending');
                break;
            case '5':
                const ids = await listTasksToComplete(tasks.listArr);
                tasks.toggleTasksCompleted(ids);
                break;
            case '6':
                const task = await listTasksDelete(tasks.listArr);
            
                if(task !== 0){
                    
                    const ok = await confirm(`Are you sure to delete task ${task.description}?`)
                    
                    if (ok) {
                        tasks.deleteTask(task.id);
                        console.log('Task deleted');
                    }else{
                        console.log('Task not deleted');
                    }
                    
                }

                break;
        }

        saveDB(tasks.listArr);

        await pause();
        // opt !== '0' && await pausa();
    } while (opt !== '0')

}

main()