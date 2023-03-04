import {useEffect,useState} from 'react';
export default function Services()
{

    useEffect(()=>{
        fetch("http://localhost:8080/services")
        .then(resp=>{
            if(resp.ok)
                return resp.text();
            else
                throw new Error("Server error");
        })
        .then(text=>text.length ? JSON.parse(text):{})
        .then(obj=>{
            if(Object.keys(obj).length===0)
            {
               setMessage("No Services Available");
            }
            else{
                setData(obj);
                console.log("object saved in state");
            }
        })
        .catch((error)=>{alert("Server error, try after some time")});
},[])

    const [Data,setData]=useState([]);
    const [message,setMessage]=useState("");

    return(
        <div>
        <table border="1">
        <thead>
            <tr>
                <th  width="200" hight="400">Sp_Id</th>
                <th  width="200" hight="400">Name</th>
                <th  width="200" hight="400">Description</th>
                <th  width="200" hight="400">Duration</th>
                <th  width="200" hight="400">Cost</th>
                <th  width="200" hight="400">Sp_id</th>
            </tr>
        </thead>
        <tbody>
        {
            Data.map(s => {return <tr>
                <td>{s.s_id}</td>
                <td>{s.s_name}</td>
                <td>{s.description}</td>
                <td>{s.duration}</td>
                <td>{s.cost}</td>
                <td>{s.sp_id.name}</td>
                 

            </tr>})
        }
        </tbody>
        </table>
    </div>)
}