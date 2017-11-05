console.log("Hei det funker!!");


var removeSVG="<button ><svg id='remove' enable-background='new 0 0 512 512' height='25px'version='1.1' viewBox='0 0 512 512' width='25px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'xmlns:xlink='http://www.w3.org/1999/xlink'><g><path class='fill' d='M444.852,66.908h-99.339V47.04c0-21.943-17.792-39.736-39.736-39.736h-99.339   c-21.944,0-39.736,17.793-39.736,39.736v19.868H67.363v19.868h20.47l19.887,377.489c0,21.944,17.792,39.736,39.736,39.736h218.546   c21.944,0,39.736-17.792,39.736-39.736l19.538-377.489h19.577V66.908z M186.57,47.04c0-10.962,8.926-19.868,19.868-19.868h99.339   c10.962,0,19.868,8.906,19.868,19.868v19.868H186.57V47.04z M385.908,463.236l-0.039,0.505v0.524   c0,10.943-8.906,19.868-19.868,19.868H147.455c-10.942,0-19.868-8.925-19.868-19.868v-0.524l-0.019-0.523L107.72,86.776h297.669   L385.908,463.236z' /><rect/><polygon  points='206.884,443.757 186.551,126.493 166.722,127.753 187.056,445.017  '/><polygon  points='345.649,127.132 325.82,125.891 305.777,443.776325.606,445.017'/></g></svg></button>";








//var  removeSVG="<button><svg  id='remove' enable-background='new 0 0 512 512'height='25px'version='1.1' viewBox='0 0 512 512' width='25px'xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><path class='fill' d='M444.852,66.908h-99.339V47.04c0-21.943-17.792-39.736-39.736-39.736h-99.339   c-21.944,0-39.736,17.793-39.736,39.736v19.868H67.363v19.868h20.47l19.887,377.489c0,21.944,17.792,39.736,39.736,39.736h218.546   c21.944,0,39.736-17.792,39.736-39.736l19.538-377.489h19.577V66.908z M186.57,47.04c0-10.962,8.926-19.868,19.868-19.868h99.339   c10.962,0,19.868,8.906,19.868,19.868v19.868H186.57V47.04z M385.908,463.236l-0.039,0.505v0.524   c0,10.943-8.906,19.868-19.868,19.868H147.455c-10.942,0-19.868-8.925-19.868-19.868v-0.524l-0.019-0.523L107.72,86.776h297.669   L385.908,463.236z' /><rect    /><polygon  points='206.884,443.757 186.551,126.493 166.722,127.753 187.056,445.017  '/><polygon  points='345.649,127.132 325.82,125.891 305.777,443.776 325.606,445.017  '/></g></svg></button>";
//var completedSvg ="<svg version='1.1'id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'width='12px' height='512px'viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'><g id='Icon_7_'><g><path class='fill' d='M416,277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416V277.333z '/></g></g></svg>" ;
var completedSvg ="<svg version='1.1' id='Layer_1 'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512'enable-background='new 0 0 512 512' height='25px' xml:space='preserve'><path style='fill:#6AC259;' d='M213.333,0C95.518,0,0,95.514,0,213.333s95.518,213.333,213.333,213.333c117.828,0,213.333-95.514,213.333-213.333S331.157,0,213.333,0z M174.199,322.918l-93.935-93.931l31.309-31.309l62.626,62.622l140.894-140.898l31.309,31.309L174.199,322.918z'/>" 
//Brukeren klikker på knappen
document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) {
   addItemTodo(value)
  }
});

function addItemTodo(text){

var list =document.getElementById('todo');

	var item= document.createElement('li');
	item.innerText=text;

	var buttons = document.createElement('div');
	buttons.classList.add('buttons');

	var remove= document.createElement('button');
	remove.classList.add('remove');
	remove.innerHTML=removeSVG;

	var complete= document.createElement('button');
	complete.classList.add('complete');
	complete.innerHTML=completedSvg;



buttons.appendChild(remove);
buttons.appendChild(complete);
item.appendChild(buttons);

list.appendChild(item);


}