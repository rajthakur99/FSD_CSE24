const container=document.getElementById('root');
console.log(container);
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:"red", backgroundColor:"pink"}},"Welcome to React App Development");
const h1=React.createElement('h1',{style:{color:'brown'}},'ABES Engineering College');
const img=React.createElement('img',{src:'https://tse4.mm.bing.net/th/id/OIP.rO-GgQK-HFNNt3xMs7VkEwHaEK?r=0&pid=Api&P=0&h=180',style:{height:'200px', width:'200px'}});

const div=React.createElement('div',{style:{border:'2px solid red'}},img,h1,h2);

const h21=<h2>Hello World!</h2>;  //JSX
root.render(h21);