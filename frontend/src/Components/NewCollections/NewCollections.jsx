import {useState,React,useEffect} from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
// import new_collection from '../Assets/new_collections'
const NewCollections = () => {
  const [new_collection,setNew_collection]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/newcollection')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data))
  },[])
  return (
    <div className='new-collections animate_slide'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections
