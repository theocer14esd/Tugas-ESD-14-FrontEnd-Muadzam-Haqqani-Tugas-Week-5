import { useEffect, useState } from "react";

const CardProduct = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://9690-182-253-54-116.ngrok-free.app/pembeli",{
            mode: "cors",
            headers: {
                "ngrok-skip-browser-warning": "true",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((dataApi) => {
                setData(dataApi)
                console.log(dataApi)
            })
    }, []);
    
    return(
        <>
            {data.map((item) => (
                <div key={item.id} className="dalem">
                    <h4 className="namaKastemer">{item.nama}</h4>
                    <h6 className="email">{item.email}</h6>
                    <h6 className="password">{item.password}</h6>
                    <div className="info">
                        <h5 className="noTelpKastemer" >{item.noTelp}</h5>
                        <h5 className="idKastemer">#{item.id}</h5>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CardProduct;