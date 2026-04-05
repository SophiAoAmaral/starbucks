import { Link } from "react-router";

function Menu(){
    return(
        <section className="max-w-7xl mx-auto font-primary pt-28">

            <div className="grid md:grid-cols-2  ">
                <div className="grid md:mb-16 order-2 md:order-1">
                    <img src="../public/img/cafe-principal.png" alt="" />
                </div>
                <div className="verde-escuro md:mb-16">
                    <div className="flex flex-col text-center p-10 md:p-0 md:mt-30">
                    <h1 className=" text-2xl md:text-4xl  uppercase text-white font-bold mb-3">Cardápio</h1>
                    <p className="mb-5 md:mb-3 md:text-lg text-white">Confira abaixo tudo o que a STARBUCKS® oferece:</p>

                    
                        <a href="">
                            <a href="https://cdn-cms-stbx.zamp.com.br//cardapio_starbucks_brasil_e8e9988561/cardapio_starbucks_brasil_e8e9988561.pdf" target="_blank" className="bg-white rounded-full py-2 px-4 w-60 mx-auto mt-2 text-green-800 font-semibold cursor-pointer" >Cardápio Digital*
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline" height="19px" viewBox="0 -960 960 960" width="17px" fill="#016630"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                            </a>
                        </a>

                    </div>
                </div>
            </div>
                <div className="grid md:grid-cols-2 bg-green-10 ">
                    <div className="flex flex-col text-center p-10 md:p-0 md:mt-30">
                        <h1 className="font-black text-2xl md:text-4xl uppercase mb-3">Tabela Nutricional</h1>
                        <p className="mb-3 md:text-lg ">Veja todas as informações dos nossos produtos</p>
                        <div className="mt-2">
                            <a className="mr-4 rounded-full py-2 px-5 bg-green-700 text-white font-semibold hover:bg-green-900 transition-all duration-300" href="https://cdn-cms-stbx.zamp.com.br//tabela_nutricional_bebidas_starbucks_brasil_66c0904bd0/tabela_nutricional_bebidas_starbucks_brasil_66c0904bd0.pdf" target="_blank">Bebidas <svg  xmlns="http://www.w3.org/2000/svg" className="inline" height="19px" viewBox="0 -960 960 960" width="17px" fill="#ffff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></a>
                            <a href="https://cdn-cms-stbx.zamp.com.br//tabela_nutricional_comidas_starbucks_brasil_d2d083cb69/tabela_nutricional_comidas_starbucks_brasil_d2d083cb69.pdf" className="mr-4 rounded-full py-2 px-5 bg-green-700 text-white font-semibold hover:bg-green-900 transition-all duration-300" target="_blank">Comidas <svg xmlns="http://www.w3.org/2000/svg" className="inline" height="19px" viewBox="0 -960 960 960" width="17px" fill="#ffff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></a>
                        </div>
                    </div>
                    <div className="order-1">
                    <img src="../public/img/doce-pp.png" alt="" />
                </div>
                </div>
                
                

                
           
            
        </section>
    )
}

export default Menu;