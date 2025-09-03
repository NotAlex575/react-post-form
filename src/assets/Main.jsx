const Main = () =>{
    return(
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form>
                            <label>Autore</label>
                            <input type="text" />
                        </form>
                    </div>
                    <div className="col-12">
                        <form>
                            <label>Titolo</label>
                            <input type="text" />
                        </form>
                    </div>
                    <div className="col-12">
                        <form>
                            <label>Testo</label>
                            <input type="text" />
                        </form>
                    </div>
                    <div className="col-12">
                        <form>
                            <label>Pubblico?</label>
                            <input type="checkbox" />
                        </form>
                    </div>
                    <div className="flex-start">
                        <button type="submit">Invia</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;