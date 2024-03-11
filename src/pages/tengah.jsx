import { useState } from "react";

const Tengah = () => {

    const [nama, setNama] = useState("");
    const [noTelp, setNoTel] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [id, setId] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://9690-182-253-54-116.ngrok-free.app/pembeli", {
            mode: "cors",
            method: "POST",
            headers: {
                "ngrok-skip-browser-warning": "true",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nama: nama,
                email: email,
                password: password,
                noTelp: noTelp,
            })
        })
            .then((res) => res.json())
            .then((dataApi) => console.log("Berhasil ditambahkan!"+dataApi))
    }

    const handleClick = () => {
        fetch(`https://9690-182-253-54-116.ngrok-free.app/pembeli/${id}`, {
            mode: "cors",
            method: "DELETE",
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }

    return(
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <h3>Add</h3>
                    <br /><hr />
                    <label htmlFor="title">Nama</label>
                    <br />
                    <input id="nama" placeholder="ex: jackson" type="text" value={nama} onChange={(e) => setNama(e.target.value)}/>
                </div>
                <br />
                <div>
                    <label htmlFor="price">No telp</label>
                    <br />
                    <input id="notelp" placeholder="ex: 081234678" type="text" value={noTelp} onChange={(e) => setNoTel(e.target.value)}/>
                </div>
                <br />
                <div>
                    <label htmlFor="title">Password</label>
                    <br />
                    <input id="pesanan" placeholder="ex: abangku ganteng" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <br />
                <div>
                    <label htmlFor="price">Email</label>
                    <br />
                    <input id="total" placeholder="ex: nasi@gmail.com" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <br />
                <br />

                <button className="baten" >Submit!</button>
            </form>

            <div className="deletingCard">
                <h3>Delete</h3>
                <br/><hr/>
                <label htmlFor="title">Input #Id</label>
                <br/>
                <input type="text" placeholder="ex: 3" id="deleting" value={id} onChange={(e) => setId(e.target.value)}/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                <button onClick={handleClick} className="baten">Submit!</button>
            </div>
        </>
    )
}

export default Tengah;