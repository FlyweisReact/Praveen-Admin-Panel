import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AddTocartList = () => {
  const navigate = useNavigate();

  const deleteitem = (index)=> {
    data[index].splice(index,1)
    setdata([...data])
  }

  
  const [data,setdata] = React.useState([
    {
      id :' 1',
    name:"User 1",
    prices:"$ 899",
    totalproduct:"3",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo158ik7hHEihEueJJ7Wdzf93uMv5EAGi7XV0er0YD-7cVZoqUHyS_wpJ2lSV_Y2J-xC8&usqp=CAU",
  },
    {
      id :' 1',
    name:"User 2",
    prices:"$ 899",
    totalproduct:"3",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo158ik7hHEihEueJJ7Wdzf93uMv5EAGi7XV0er0YD-7cVZoqUHyS_wpJ2lSV_Y2J-xC8&usqp=CAU",
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
      <th scope="col">UserName</th>
      <th scope="col">Price</th>
      <th scope="col">Total Product </th>
  
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, id)=>(
      <tr>
      <td>{item.name}</td>
      <td>{item.prices}</td>
      <td>{item.totalproduct}</td>

      <td>
        <button type="button" className="btn btn-info" onClick={()=> navigate("/singleuserCart",{
            state: item,
            })} >View</button>
      <button type="button" className="btn btn-danger" name={item.name} style={{margin: '0 10px'}} onClick={handleRemoveItem}>Delete</button></td>
    </tr>
    ))}
    
  </tbody>
</table>
    </>
  )
}
export default AddTocartList