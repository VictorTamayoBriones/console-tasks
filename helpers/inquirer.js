const inquirer = require('inquirer');

const questions=[{
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
        {
            value: '1',
            name: `${'1.'.green} Create task`
        },{
            value: '2',
            name: `${'2.'.green} List tasks`
        },
        {
            value: '3',
            name: `${'3.'.green} List tasks completed`
        },{
            value: '4',
            name: `${'4.'.green} List tasks pending`
        },
        {
            value: '5',
            name: `${'5.'.green} Complete task(s)`
        },{
            value: '6',
            name: `${'6.'.green} Delete task`
        },{
            value: '0',
            name: `${'0.'.green} Exit`
        }
    ]
}]

const inquirerMenu = async () => {
    console.clear()
    console.log('==========================='.green);
    console.log('   Select a option   '.white);
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