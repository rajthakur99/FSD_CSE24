import React, { useEffect, useState } from 'react'

function FetchProducts() {
const [data,setData]=useState([]);
    useEffect(()=>{

    async    function fetchData(){
        try{
            const res=await fetch('https://dummyjson.com/products');
            const jsonData = await res.json();
                    console.log(jsonData);
                    setData(jsonData.products);

            // fetch('https://dummyjson.com/products')
            // .then(res => res.json())
            // .then((data)=>{
            //     console.log(data);
            // })
           
        }catch(error){
            console.log(error);
        }
        finally{
            console.log("fetch Products");
        }
        }

        fetchData();
    },[])

  return (
    <div>FetchProducts
        {/* <h2>{JSON.stringify(data)}</h2> */}

        {
            data.map((ele)=>(
                <div style={{border:'1px solid black', margin: '10px', padding:'10px'}}>
                    < img src={ele.images} width="100px" height="100px"/>
                    <h2>{ele.id}</h2>
                    <h2>{ele.title}</h2>
                    <p>{ele.description}</p>
                    <h3>Price : {ele.price}</h3>
                    <h3>Rating : {ele.rating}</h3>
                    <h3>Category : {ele.category}</h3>
                    <div>
                        <button>Add to Cart</button>
                        <button>Buy now</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default FetchProducts