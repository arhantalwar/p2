import { useEffect, useState } from "react";
import VMcard from "./activevm_comp/VMcard";
      

const ActiveVM = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getVMdata')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(data => {
           setData(data);
        })
        .catch(error => {
            console.error(error);
        })

    }, [])


    return (
        <>
        {data && (
            data.map((data) => {
                return (
                    <VMcard hostname={data.hostname} port_no={data.port_no} username={data.username} passwd={data.passwd} />
                )
            })
        )}
        </>
    )
}

export default ActiveVM;
