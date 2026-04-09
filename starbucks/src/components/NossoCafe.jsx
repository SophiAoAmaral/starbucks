import { Link } from "react-router";

function NossoCafe(){
    return(
        <section className="max-w-7xl mx-auto font-primary pt-28">
            <div className="grid md:grid-cols-2 mb-5 md:mb-16">
                <div>
                    <img src="../public/img/graos.png" alt="" />
                </div>
                <div className="verde-escuro">
                    <div className="flex text-center flex-col mt-10 md:mt-30 px-8">
                        <h1 className="uppercase text-white text-2xl md:text-4xl font-bold mb-3">EXPLORE NOSSOS CAFÉS</h1>
                        <p className="text-white py-3 font-medium md:text-lg px-3">Independente do seu gosto ou paladar, encontrará um café Starbucks® perfeito para você.</p>
                        <Link to="/produtos" >
                        <button className="bg-white rounded-full py-2 px-4 w-40 mx-auto mt-2 font-semibold text-green-800 mb-5 md:mb-0">Saiba Mais</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-green-10 w-full h-80 mb-5 md:mb-16 flex flex-col mx-auto">
                        <div className="flex self-center items-center p-3 ">
                        <img src="../public/icons/coffe-icon.png" className="w-20 mx-auto" alt="" />
                        <h1 className="text-3xl font-bold mt-9">TORRA</h1>
                        </div>
                    
                    <div className="flex  self-center gap-6">
                        <div className="bg-white text-center rounded-2xl p-4">
                            <img src="../public/icons/coffe-icon-green.png" className="w-25" alt="" />
                            <p className="text-lg">Torra Clara</p>
                        </div>
                        <div className="bg-white text-center rounded-2xl p-4">
                            <img src="../public/icons/coffe-icon-green.png" className="w-25" alt="" />
                            <p className="text-lg">Torra Média</p>
                        </div>
                        <div className="bg-white text-center rounded-2xl p-4">
                            <img src="../public/icons/coffe-icon-green.png" className="w-25" alt="" />
                            <p className="text-lg">Torra Escura</p>
                        </div>
                    </div>
            </div>

            <div className="grid md:grid-cols-2 mb-16">
                <div className="">
                    <img src="../public/img/cafe-passado.png" alt="" />
                </div>

                <div className="bg-orange-100/50 ">
                    <div className="flex flex-col md:mt-10 text-center px-8">
                      <img src="../public/icons/prensa.png" className="w-25 m-auto" alt="" />
                      <h1 className="font-bold text-2xl md:text-4xl mb-3 px-5">COMO PREPARAR O CAFÉ EM CASA</h1>
                      <p className="md:text-lg  mb-2">Do estudo básico de preparo ao aperfeiçoamento dos detalhes, aprenda como ser um barista de casa.</p>

                      
                      
                      <a className="bg-green-900 rounded-full w-40 m-auto py-2 px-4 cursor-pointer text-white font-semibold hover:bg-green-950 mb-5 md:mb-0">Saiba mais</a>
                      
                     
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 mb-16">
                <div className="bg-gray ">
                    <div className="flex flex-col md:mt-15 text-center px-8 ">
                        <img src="../public/icons/graos.png" className="w-25 m-auto" alt="" />
                        <h1 className="text-2xl md:text-4xl font-bold mb-5 uppercase mt-3 px-5">Como descobrir a torra perfeita para você</h1>
                        <Link to="/torras">
                        <a className="bg-green-900 rounded-full w-35 m-auto py-2 px-4 text-white font-semibold hover:bg-green-950 mb-5 md:mb-0 ">Saiba mais</a>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="../public/img/pao.png" alt="" />
                    
                </div>
            </div>
        </section>
    )
}

export default NossoCafe;