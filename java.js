const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }
    
    createDiv(itemName){
        var input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";
        
        var itemBox = document.createElement('div');
        itemBox.classList.add('item');
        
        var editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerHTML = "Edit";
        
        editButton.addEventListener('click', () => this.edit(input, name));
        
        var removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.innerHTML = "Remove";
       
        removeButton.addEventListener('click', () => this.remove(itemBox));
        
        container.appendChild(itemBox);
        
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
    
      
    }
    edit(input){
        input.disabled = !input.disabled;
    }
    
    remove(item){
        container.removeChild(item);
    }
}
    
        //new item("Sport")

function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click',check)
window.addEventListener('keydown',(e) => {
    if(e.wich == 13){
        check();
    }
})