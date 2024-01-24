const container = document.querySelector('.container')

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

    rowDiv.addEventListener('mouseover', () =>{
      rowDiv.style.backgroundColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
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
let len = 16;
createGrid(len);



