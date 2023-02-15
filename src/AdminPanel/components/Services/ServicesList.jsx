import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ServicesList = () => {
  const navigate = useNavigate();

  const deleteitem = (index)=> {
    data[index].splice(index,1)
    setdata([...data])
  }

  
  const [data,setdata] = React.useState([
    {
      id :' 1',
    name:"Services 1",
        Destination:"Public",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo158ik7hHEihEueJJ7Wdzf93uMv5EAGi7XV0er0YD-7cVZoqUHyS_wpJ2lSV_Y2J-xC8&usqp=CAU",
  },
    {
      id :' 22',
    name:"Services 5",
        Destination:"Public",
    image:"data:image/jpeg;base64,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",
  },
    {
      id : '34',
    name:"Services 4",
        Destination:"Public",
    image:"https://m.media-amazon.com/images/I/61V3O8CvXcL._AC_SX679_.jpg",
  },
    {
      id : '422',
    name:"Services 1",
        Destination:"Public",
    image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_2.png?v=1640628318",
  },
] )

// const [list, updateList] = useState(defaultList);
// -------------------------------test------------------------------------------

useEffect(() => {
  console.log(data);
}, []);

const handleCick = (evt, id) => {
  setdata(data.filter((elm) => elm.id !== id));
};



// -----------------------------------------------------------------------------------

const handleRemoveItem = (e) => {
 const name = e.target.getAttribute("name")
  setdata(data.filter(item => data.name !== name));
};

  return (
    <>
   
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      
      <th scope="col">Status</th>
     
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, id)=>(
      <tr>
      <td>{item.name}</td>

      <td>{item.Destination}</td>
  
      <td>
        <button type="button" className="btn btn-info" >Edit</button>
      {/* <button type="button" class="btn btn-danger" style={{margin: '0 10px'}} onClick={()=> deleteitem(index) }>Delete</button></td> */}
      {/* <button type="button" class="btn btn-danger" name={item.name} style={{margin: '0 10px'}} onClick={(evt) => handleCick(evt, id)}>Delete</button></td> */}
      <button type="button" className="btn btn-danger" name={item.name} style={{margin: '0 10px'}} onClick={handleRemoveItem}>Delete</button></td>
    </tr>
    ))}
    
  </tbody>
</table>
    </>
  )
}
export default ServicesList