import { useState } from "react";
import axios from "axios";

const Main = () =>{



    return(
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form>
                            <label>Autore</label>
                            <input className="input-text" type="text" />
                        </form>
                    </div>
                    <div className="col-12">
                        <form>
                            <label>Titolo</label>
                            <input className="input-text" type="text" />
                        </form>
                    </div>
                    <div className="col-12">
                        <form>
                            <label>Testo</label>
                            <input className="input-text" type="text" />
                        </form>
                    </div>
                    <div className="col-12">
                        <form>
                            <label>Pubblico?</label>
                            <input className="input-checkbox" type="checkbox" />
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