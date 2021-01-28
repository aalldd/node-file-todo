const { Command } = require('commander');
const api =require('./index.js')

const program = new Command();
program
    .option('-x, --xxx', 'what the x')
program
    .command('add <taskNames...>')
    .description('add a task')
    .action((...args)=>{
        const words=args.slice(0,args.length-2).join(' ')
        api.create(words).then(() => {
            console.log('添加成功')
        }).catch(()=>{
            console.log('添加失败')})
    })
program
    .command('clear')
    .description('clear all tasks')
    .action(()=>{
        api.clear().then(() => {
            console.log('清除成功')
        }).catch(()=>{
            console.log('清除失败')})
    })

program.command('showAll')
    .description('show all tasks')
    .action(()=>{
        void api.showAll()
    })
if(process.argv.length===2){
    program.action(()=>{
        void api.showAll()
    })
}
program.parse(process.argv);
