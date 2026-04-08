function Home(){
    return(
        <section className="max-w-7xl mx-auto font-primary pt-28">


            <div className="grid md:grid-cols-2  ">
                <div className="grid md:mb-16 order-2 md:order-1">
                    <img src="../public/img/refil.png" alt="" />
                </div>
                <div className="verde-escuro md:mb-16 ">
                    <div className="flex flex-col text-center p-10 md:p-0 md:mt-30 m-7">
                    <h1 className=" text-2xl md:text-4xl  uppercase text-white font-bold mb-3">Seu café, sem pressa: Refil à vontade em loja.</h1>
                    <p className="mb-5 md:mb-3 md:text-lg text-white">Na compra de café coado ou chá quente, aproveite refil à vontade enquanto estiver na loja. Sem limite. Válido apenas no local - exceto delivery e aeroportos.</p>

                    </div>
                </div>
            </div>


            <div className="grid grid-cols-2 ">
                <div className="grid mb-16 bg-green-10 order-2 ">
                    <div className="flex flex-col text-center mt-40">
                    <h1 className="text-4xl  uppercase text-black font-bold mb-3">Novo Espresso Starbucks ®</h1>
                    <p className="mb-3 text-lg text-black">Pensado para o paladar brasileiro - mais equilibrado em sabor e acidez.</p>
                    </div>
                </div>
                <div className="mb-16 order-1">
                    <img src="../public/img/expresso.png" alt="" />
                </div>
            </div>

             <div className="grid grid-cols-2 ">
                <div className="mb-16 order-2">
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
                </div>
                
             <div className="grid grid-cols-2 ">
                <div className="grid bg-orange-100/50 mb-16 py-5 order-2">
                    <div className="flex flex-col text-center mt-20 ">
                        <h1 className="text-4xl  uppercase font-bold mb-3">Histórias e Notícias Starbucks ®</h1>
                        <p className="mb-2 text-lg px-6 py-4 ">Fique por dentro das novidades e conheça mais sobre nossas iniciativas.</p>
                        <div>
                            <button className="mb-9 rounded-full py-2 px-5 bg-green-700 text-white font-medium hover:bg-green-900 transition-all duration-300">Saiba mais <svg xmlns="http://www.w3.org/2000/svg" className="inline" height="19px" viewBox="0 -960 960 960" width="17px" fill="#ffff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></button>
                        </div>
                    </div>
                </div>
                <div className="order-1">
                    <img src="../public/img/funcionarios.png" alt="" />
                </div>
                
            </div>
            
        </section>
    )
}

export default Home