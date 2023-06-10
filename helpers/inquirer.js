const inquirer = require('inquirer');

const questions=[{
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
        {
            value: '1',
            name: '1. Create task'
        },{
            value: '2',
            name: '2. List tasks'
        },
        {
            value: '3',
            name: '3. List tasks completed'
        },{
            value: '4',
            name: '4. List tasks pending'
        },
        {
            value: '5',
            name: '5. Complete task(s)'
        },{
            value: '6',
            name: '6. Delete task'
        },{
            value: '0',
            name: '0. Exit'
        }
    ]
}]

const inquirerMenu = async () => {
    console.clear()
    console.log('==========================='.green);
    console.log('   Select a option   '.green);
    console.log('===========================\n'.green);

    const { option } = await inquirer.prompt(questions)
    
    return option
}

const pause = async () => {
    const question = {
        type: 'input',
        name: 'enter',
        message: `Press ${'ENTER'.green} to continue`
    }
    console.log('\n')
    const { enter } = await inquirer.prompt(question);
    return enter
}

const readInput = async (message) =>{
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value){
            if(value.length === 0){
                return 'Please enter a value'
            }else{
                return true
            }
        }
    }];

    const { desc } = await inquirer.prompt(question);
    return desc
}

module.exports = {
    inquirerMenu,
    pause,
    readInput
}