import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BusinessCard = () => {
    const {id} = useParams()
    // useEffect(()=>{
    //     fetch('services.json')
    //     .then(res => res.json())
    //     .then(data =>console.log(data))
    // }
    // ,[])
    return (
        <div>
            <p>this is business card {id}</p>
        </div>
    );
};

export default BusinessCard;