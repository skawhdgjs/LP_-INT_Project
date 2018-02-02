var sequelize = require('sequelize');
const readline = require('readline');
const models = require('./models');
const mytable = models.MyTable;

console.log("1. Search test");
console.log("2. Insert test");
console.log("3. Delete test");
console.log("4. Update test");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.setPrompt('>> ');
rl.prompt();
rl.on('line', (line)=>{
  if(line == 'exit')
  {
    rl.close();
  }
  var temp = line.split(",", 2)
  var num = parseInt(temp[0])
  if(temp[1] != null)
    var param = temp[1]
  switch(num)
  {
    case 1:
    //검색
    mytable.findAll(
      {
        attributes: ['testatt']
      }
    ).then((data) => {
      console.log("=========================");
      data.forEach(dat =>{
        console.log(dat.testatt);
      })
      console.log("=========================");
      //models.sequelize.close()
    });
    break;
    case 2:
    //입력
    mytable.create({testatt: param}).then((data)=>
    {
      console.log(param + " is inserted!");
      //models.sequelize.close()
    })

    break;
    case 3:
    break;
    case 4:
    break;
  }
  rl.prompt();
})

/*
rl.question('select value: ', (answer) =>
{
    switch(answer)
    {

    }
  console.log('Break! done.')
  rl.close();
})*/
