function Produtos(){
    return(
        <section className="max-w-7xl mx-auto font-primary pt-28">
            <section className="grid md:grid-cols-2 mb-10">
                <div>
                    <img src="../public/img/xicara-cafe.jpeg" alt="" />
                </div>
                <div className="verde-escuro flex flex-col p-6 md:p-0">
                    <div className="flex flex-col m-auto text-center">
                        <h1 className=" text-2xl md:text-4xl mt-4 md:mt-0  uppercase text-white font-bold mb-2 md:mb-5">Para todos os gostos</h1>
                        <p className="text-white text-lg font-medium">Leve o sabor de café que você tanto gosta para a sua casa</p>
                    </div>
                </div>
            </section>

            <div className="flex  justify-center items-center mb-10 gap-5">
                    <img src="../public/icons/graos.png" alt="" className="w-20" />
                    <h1 className=" text-2xl md:text-4xl font-bold uppercase">Cafés Starbucks®</h1>
                </div>

            <section className="grid md:grid-cols-3 gap-3 ">

                <div className="flex flex-col text-center bg-gray rounded-xl shadow-xs">
                    <img src="../public/cafes/brasil-blend.png" alt="" className="rounded-t-xl" />
                    <p className="marrom w-full uppercase text-white font-medium p-1">Torra media</p>
                    <h2 className="text-2xl uppercase font-bold mt-3 mb-1">Brasil Blend</h2>
                    <span className="uppercase text-sm font-bold text-green-900 mb-4">Suave & Encorpado</span>
                </div>

                <div className="flex flex-col text-center bg-gray rounded-xl shadow-xs">
                    <img src="../public/cafes/colombia.png" alt="" className="rounded-t-xl" />
                    <p className="marrom w-full uppercase text-white font-medium p-1">Torra media</p>
                    <h2 className="text-2xl uppercase font-bold mt-3 mb-1">Colombia</h2>
                    <span className="uppercase text-sm font-bold text-green-900 mb-4">Suave & Encorpado</span>
                </div>

                <div className="flex flex-col text-center bg-gray rounded-xl shadow-xs">
                    <img src="../public/cafes/pike-place.png" alt="cafe pike-place" className="rounded-t-xl" />
                    <p className="marrom w-full uppercase text-white font-medium p-1">Torra media</p>
                    <h2 className="text-2xl uppercase font-bold mt-3 mb-1">Brasil Blend</h2>
                    <span className="uppercase text-sm font-bold text-green-900 mb-4">Suave & Encorpado</span>
                </div>

                <div className="flex flex-col text-center bg-gray rounded-xl shadow-xs">
                    <img src="../public/cafes/espresso-roast.png" alt="espresso-roast" className="rounded-t-xl" />
                    <p className="marrom w-full uppercase text-white font-medium p-1">Torra media</p>
                    <h2 className="text-2xl uppercase font-bold mt-3 mb-1">Brasil Blend</h2>
                    <span className="uppercase text-sm font-bold text-green-900 mb-4">Suave & Encorpado</span>
                </div>

                <div className="flex flex-col text-center bg-gray rounded-xl shadow-xs">
                    <img src="../public/cafes/sumatra.png" alt="sumatra" className="rounded-t-xl" />
                    <p className="marrom w-full uppercase text-white font-medium p-1">Torra media</p>
                    <h2 className="text-2xl uppercase font-bold mt-3 mb-1">Brasil Blend</h2>
                    <span className="uppercase text-sm font-bold text-green-900 mb-4">Suave & Encorpado</span>
                </div>

                <div className="flex flex-col text-center bg-gray rounded-xl shadow-xs">
                    <img src="../public/cafes/caffe-verona.png" alt="" className="rounded-t-xl" />
                    <p className="marrom w-full uppercase text-white font-medium p-1">Torra media</p>
                    <h2 className="text-2xl uppercase font-bold mt-3 mb-1">Brasil Blend</h2>
                    <span className="uppercase text-sm font-bold text-green-900 mb-4">Suave & Encorpado</span>
                </div>


            </section>
        
        
        </section>
    )
}
export default Produtos