const container = document.querySelector('.container')
const btn = document.querySelector('button');

function createColumn(len){
    
      const columnDiv = document.createElement('div');
      columnDiv.classList.add('column');
      columnDiv.setAttribute('style','flex: 1; display:flex; flex-direction: column');
      columnDiv.style.border = '2px solid gray';
      
      container.appendChild(columnDiv);
      createRow(columnDiv, len);

}

function createRow(columnDiv, len){
    
  for(let i=0; i<len; i++){
      
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.setAttribute('style','flex: 1;');
    rowDiv.style.border = '2px solid gray';
    columnDiv.appendChild(rowDiv);

    let brightness = 100;
    
    rowDiv.addEventListener('mouseover', () =>{
      rowDiv.style.backgroundColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
      if(brightness>0) brightness-= 10;
      rowDiv.style.filter = `brightness(${brightness}%)`;
    });
  }

}

function createGrid(len){
  for(let i =0; i<len; i++) {
    createColumn(len);
  }
}

function getRandomNumber(){
  return Math.floor(Math.random() * 255);
}

function deleteGrid() {
  const colDiv = document.querySelectorAll('.column');
  colDiv.forEach(element => {
    element.remove();
  });

}
let len = 16;
createGrid(len);

btn.addEventListener('click', () => {
   
  len = prompt('Enter the grid dimension: ', 'Choose a number between 1-100');

  if(len <= 100 && len >= 1){
    deleteGrid();
    createGrid(len);
  } 
  else if(len == "" || len == null) alert('Invalid syntax. Try again!');
  else alert('The number must be between 1 and 100!');

  
});



