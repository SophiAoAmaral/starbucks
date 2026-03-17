function Conteudo(){
    return(
        <section className="max-w-7xl mx-auto font-primary">

            <div className="grid grid-cols-2">
                <div className="grid">
                    <img src="../public/img/cafe-principal.png" alt="" />
                </div>
                <div className="verde-escuro ">
                    <div className="flex flex-col text-center mt-30">
                    <h1 className="text-3xl  uppercase text-white font-bold mb-3">Cardápio</h1>
                    <p className="mb-3 text-lg text-white">Confira abaixo tudo o que a STARBUCKS® oferece:</p>
                    <a href="">
                        <button className="bg-white rounded-full py-2 px-4 w-60 mx-auto mt-2 text-green-800 font-semibold cursor-pointer">Cardápio Digital* <svg xmlns="http://www.w3.org/2000/svg" className="inline" height="19px" viewBox="0 -960 960 960" width="17px" fill="#016630"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></button>
                    </a>
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default Conteudo;