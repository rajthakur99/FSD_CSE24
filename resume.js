const container=document.getElementById('container');
const button=document.getElementById('btn');

const h2=document.createElement('h2');
h2.innerText='Project Details'

function resume(){
    container.innerHTML='<h1 style=color:red>Rajkumar Thakur</h1> <h2>3rd Year btech Student</h2> <h3>Technical Skills</h3> <p>c++, python, HTML, CSS,JS,React</p>'
    container.appendChild(h2);
}


button.addEventListener('click',resume);