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

    const newDataForm = (event) => {
        const { name, value, type, checked } = event.target;

       setDataForm({
        ...dataForm, [name]: type === "checkbox" ? checked : value,
       })
    }

    return(
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form>
                            <label>Autore</label>
                            <input className="input-text"
                             type="text" 
                             name="author"
                             onChange={newDataForm}/>
                        </form>
                    </div>
                    <div className="col-12">
                        <form>
                            <label>Titolo</label>
                            <input className="input-text"
                             type="text" 
                             name="title"
                             onChange={newDataForm}/>
                        </form>
                    </div>
                    <div className="col-12">
                        <form>
                            <label>Testo</label>
                            <input className="input-text"
                             type="text" 
                             name="body"
                             onChange={newDataForm}/>
                        </form>
                    </div>
                    <div className="col-12">
                        <form>
                            <label>Pubblico?</label>
                            <input className="input-text"
                             type="checkbox" 
                             name="public"
                             onChange={newDataForm}/>
                        </form>
                    </div>
                    <div className="col-12">
                        <div className="flex-start">
                            <button type="submit">Invia</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;