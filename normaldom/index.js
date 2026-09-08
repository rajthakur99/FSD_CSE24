const root = document.getElementById("container");
const btn = document.getElementById("btn");
const h2 = document.createElement("h2");
const img = document.createElement("img");
const div= document.createElement("div");

function showData(){
    try{
h2.innerText="Hello";
h2.style.color='blue';
h2.style.backgroundColor='yellow';
div.appendChild(h2);
img.src='https://tse3.mm.bing.net/th/id/OIP.MInViflWTn0CIsOU3esbLwHaE5?r=0&pid=Api&P=0&h=180';
img.setAttribute('height',200);
img.setAttribute('width',250);
div.appendChild(img);

div.style.backgroundColor='blue';
root.appendChild(div);

    }
    catch(e){
    console.log("Error is something like " + e);
    }
    finally{
root.appendChild(btn);
root.removeChild(btn);
    }
}

btn.addEventListener('click',showData);

root.appendChild(btn);
function remove(){
root.removeChild(btn);
}