// onclick="change_liste()"

let list = document.getElementsByTagName('ul');
let item = document.getElementsByTagName('li');

console.log(list);


for (let i = 0 ; i < list.length ; i++){
    list[i].style.listStyleType = "circle";
}

for (let i = 0 ; i < item.length ; i++){
    item[i].innerHTML = "blabla";
}
