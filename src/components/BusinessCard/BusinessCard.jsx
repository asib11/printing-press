import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BusinessCard = () => {
    const {id} = useParams();
    const imageData = useLoaderData();
    const {img} = imageData;
    // useEffect(()=>{
    //     fetch('services.json')
    //     .then(res => res.json())
    //     .then(data =>console.log(data))
    // }
    // ,[])
    return (
        <div>
            <p>this is business card {img.length}</p>
        </div>
    );
};

export default BusinessCard;