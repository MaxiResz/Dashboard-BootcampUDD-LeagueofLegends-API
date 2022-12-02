let attack = [], defense = [], magic = [], difficult = [], names = [], images = [];
function pushData (data){
    attack.pop();defense.pop();magic.pop();difficult.pop();names.pop();

    data.forEach(x => names.push(x[0]));
  
    data.forEach(x => attack.push(x[1].info.attack));
   
    data.forEach(x => defense.push(x[1].info.defense))
   
    data.forEach(x => magic.push(x[1].info.magic))
   
    data.forEach(x => difficult.push(x[1].info.difficulty))

    data.forEach(x => images.push(x[1].image.sprite))

}
export {pushData, attack, defense, magic, difficult, names}