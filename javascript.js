const gridContainer = document.querySelector("#grid_container");
const clear=document.querySelector('#clear_btn');
let hue=0;
function gridMaker(gridNo) {
  let gridSize = gridNo * gridNo;
  let grid = '';
  let itemWidthHeight = (((100 / gridNo) * 5) - 1) / 5;
  for (i = 1; i <= gridSize; i++) {
    grid += `<div class="grid_item" style="width:${itemWidthHeight}%; height:${itemWidthHeight}%;"></div>`;
  }
  gridContainer.innerHTML = grid;
}

function makeGrid() {
  let gridNo = parseInt(prompt("enter grid NO!"));
  if (isNaN(gridNo)) {
    alert("please enter a vlid number between 16 and 100");
    makeGrid();
  } else {
    //call function gridMaker
    if (gridNo > 100 || gridNo < 16) {
      alert("please enter a vlid number between 16 and 100");
      makeGrid();
    } else {
      gridMaker(gridNo);
    }
  }
}
makeGrid();
console.log('makeGrid End');
let draw=false;
const gridItem = document.querySelectorAll('.grid_item');
gridItem.forEach(item=>{
  
  item.addEventListener('mousedown',()=>{
    draw=true;
    if(hue<350){
    hue+=10;
  }else{
    hue=0;
    }
      item.style.backgroundColor =`hsl(${hue}, 100%, 50%)`;
      console.log(`mouse enter  ${draw}  ${hue}`);
    console.log('mousedown');
  });

  item.addEventListener('mouseenter',()=>{
    if(draw){
      // if(hue<350){
      //   hue+=10;
      // }else{
      //   hue=0;
      //   }
      hue=Math.random()*350;
      item.style.backgroundColor =`hsl(${hue}, 100%, 50%)`;
      console.log(`mouse enter  ${draw}  ${hue} `+ Math.random());
    }
  });

  item.addEventListener('mouseup',()=>{
    draw=false;
    console.log(`mouse up `);
  });
  
});

clear.addEventListener('click',()=>{
  gridItem.forEach(item=>{
    // item.classList.remove('selected');
    item.style.backgroundColor ='#ffffff';
    console.log('cleared');
  });
});