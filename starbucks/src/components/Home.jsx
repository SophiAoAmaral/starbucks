function Home(){
    return(
        <section className="max-w-7xl mx-auto font-primary pt-28">

            <div className="grid grid-cols-2 ">

                <div className="grid mb-16 verde-escuro">
                    <div className="flex flex-col text-center mt-30">
                    <h1 className="text-4xl  uppercase text-white font-bold mb-3">Novo Espresso Starbucks ®</h1>
                    <p className="mb-3 text-lg text-white">Pensado para o paladar brasileiro - mais equilibrado em sabor e acidez.</p>
                    <a href="">
                        <button className="bg-white rounded-full py-2 px-4 w-40 mx-auto mt-2 text-green-800 font-semibold cursor-pointer">Saiba mais <svg xmlns="http://www.w3.org/2000/svg" className="inline" height="19px" viewBox="0 -960 960 960" width="17px" fill="#016630"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></button>
                    </a>
                    </div>
                </div>
                <div className="mb-16">
                    <img src="../public/img/expresso.png" alt="" />
                </div>

                <div className="mb-16">
                    <img src="../public/img/colheita.png" alt="" />
                </div>
                
                <div className="grid bg-green-50/65 mb-16">
                    <div className="flex flex-col text-center mt-20">
                        <h1 className="font-black text-4xl uppercase mb-3">Coisas boas estão acontecendo</h1>
                        <p className="mb-3 text-lg px-6 py-3 ">Acreditamos que podemos e devemos gerar um impacto positivo nas comunidades em que atuamos.</p>
                        <div>
                            <button className="mr-4 rounded-full py-2 px-5 bg-green-700 text-white font-medium hover:bg-green-900 transition-all duration-300">Bebidas <svg  xmlns="http://www.w3.org/2000/svg" className="inline" height="19px" viewBox="0 -960 960 960" width="17px" fill="#ffff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></button>
                        </div>
                    </div>
                </div>
                
                <div className="grid bg-orange-100/50 mb-16 py-5">
                    <div className="flex flex-col text-center mt-20">
                        <h1 className="text-4xl  uppercase font-bold mb-3">Histórias e Notícias Starbucks ®</h1>
                        <p className="mb-2 text-lg px-6 py-4 ">Fique por dentro das novidades e conheça mais sobre nossas iniciativas.</p>
                        <div>
                            <button className="mb-9 rounded-full py-2 px-5 bg-green-700 text-white font-medium hover:bg-green-900 transition-all duration-300">Saiba mais <svg xmlns="http://www.w3.org/2000/svg" className="inline" height="19px" viewBox="0 -960 960 960" width="17px" fill="#ffff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../public/img/funcionarios.png" alt="" />
                </div>
                
            </div>
            
        </section>
    )
}

export default Home