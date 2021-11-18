let div = document.getElementsByClassName('name-tag');
let div2 = document.getElementsByClassName('name-tag');
let newP = document.createElement('p');
newP.innerHTML = "HELLO WORLD";

for (let i in div){
    div.item(i).appendChild(newP);
}

for (let y in div2){
    div.item(y).appendChild(newP);
}










