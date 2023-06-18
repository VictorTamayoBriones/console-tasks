const Task = require("./task");

class Tasks{
    
    _list = {};

    constructor(){
        this._list = {};
    }

    createTask( desc = '' ){
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    loadArrData = (tasks = []) => {
        tasks.forEach( task => {
            this._list[task.id] = task;
        })
    }

    get listArr(){
        const list = [];
        Object.keys(this._list).forEach( key =>{
            const task = this._list[key];
            list.push(task);
        })
        return list;
    }

    deleteTask(id = ''){
        if(this._list[id]){
            delete this._list[id];
        }
    }

    listTasks(type = 'all'){
        console.log('\n')
        this.listArr.forEach( (task, i) =>{
            
            const NumberList = task.completedAt ? `${i+1}.`.green : `${i+1}.`.red;
            const Desc = task.description;
            const Status = task.completedAt ? `Completed at ${task.completedAt}`.green : 'Pending'.red

            if(type === 'completed'){

                if(task.completedAt){
                    console.log(`${NumberList} ${Desc} :: ${Status}`)
                }

            }else if(type === 'pending'){

                if(!task.completedAt){
                    console.log(`${NumberList} ${Desc} :: ${Status}`.red)
                }

            }else{
                console.log(`${NumberList} ${Desc} :: ${Status}`)
            }

        })
    }


    toggleTasksCompleted(ids=[]){
        const tasks = this.listArr;
        tasks.forEach(task => {
            if( ids.some( id => id === task.id ) ){
                tasks[tasks.indexOf(task)].completedAt = new Date().toString();
            }else{
                tasks[tasks.indexOf(task)].completedAt = null;
            }
        });
    }
}


module.exports = Tasks;