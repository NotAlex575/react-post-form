import { useState } from "react";
import axios from "axios";

const Main = () =>{

    const dataFormStarter = {
        author: "",
        title: "",
        body: "",
        public: false
    };

    const [dataForm, setDataForm] = useState(dataFormStarter);


    //INPUT
    const newDataForm = (event) => {
        const { name, value, type, checked } = event.target;

       setDataForm({
        ...dataForm, [name]: type === "checkbox" ? checked : value,
       })
    }

    //SUBMIT
    const submitDataForm = (event) =>{
        event.preventDefault();

        axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", dataForm).then((resp) =>{
            console.log("Dati inviati con successo! ", resp.data);
            setDataForm(dataFormStarter)
        })
        .catch((err) =>{
            console.error("Dati non inviati con successo, errore: ", err)
        })
    }

    return(
        <main>
            <div className="container">
                <div className="row">
                    <form onSubmit={submitDataForm}>
                        <div className="col-12">
                            <label>Autore</label>
                            <input className="input-text"
                             type="text" 
                             name="author"
                             value={dataForm.author}
                             onChange={newDataForm}/>
                        </div>
                        <div className="col-12">
                            <label>Titolo</label>
                            <input className="input-text"
                             type="text" 
                             name="title"
                             value={dataForm.title}
                             onChange={newDataForm}/>
                        </div>
                        <div className="col-12">
                            <label>Testo</label>
                            <input className="input-text"
                             type="text" 
                             name="body"
                            value={dataForm.body}
                             onChange={newDataForm}/>
                        </div>
                        <div className="col-12">
                            <label>Pubblico?</label>
                            <input className="input-checkbox"
                             type="checkbox" 
                             name="public"
                             checked={dataForm.public}
                             onChange={newDataForm}/>
                        </div>
                        <div className="col-12">
                            <div className="flex-start">
                                <button type="submit">Invia</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Main;