function ImpactoSocial(){
    return(
         <section className="max-w-7xl mx-auto font-primary pt-28 ">
        <div className="grid lg:grid-cols-2 verde-escuro">
            <nav className="flex justify-center items-center ">
                <img src="../public/img/image.png" alt="" className="w-30 mt-5 md:w-50"/>
            </nav>
            <nav className="flex flex-col w-full md:p-6 min-h-160 gap-6 justify-center items-center">
                
                    <h1 className="uppercase text-2xl md:font-title font-bold text-white text-center leading-10">Uma empresa que trabalha com responsabilidade social</h1>
                    <p className=" text-xl md:font-p text-white  text-center">Acreditamos que podemos e devemos gerar um impacto positivo nas comunidades em que atuamos.</p>
                    <p className="text-lg text-white font-light text-center">Desde que abrimos nossa primeira loja em 1971, buscamos a confiança e o respeito de nossos clientes, partners (como chamamos os nossos colaboradores) e vizinhos. Como? Tendo responsabilidade e fazendo coisas boas para o planeta e para as pessoas.</p>
                
            </nav>
        </div>

        <div className="grid lg:grid-cols-2 bg-green-10  mt-10 lg:mt-20">
            <nav className="flex flex-col text-center m-auto px-4 py-5 order-1 md:order-2">
                <h1 className="uppercase text-2xl md:text-4xl font-bold text-black mb-4">Comunidade</h1>
                <p className="md:text-xl mb-2">Como bons vizinhos, sempre que podemos, nos envolvemos em esforços locais para unir as pessoas e criar uma mudança positiva.</p>
                <button className="bg-green-800 rounded-full py-1 md:py-2  px-3 md:px-4 w-40 mx-auto mt-2 font-semibold text-white">Saiba Mais</button>
            </nav> 
            <nav className="md:order-2">
                <img src="../public/img/funcionarios2.png" alt="" />
            </nav>
                
        </div>

        <div className="grid md:grid-cols-2  bg-gray2 lg:mt-10">
            <nav> 
                <img src="../public/img/plantacao.png" alt=""  />
            </nav>
             <nav className="flex flex-col text-center m-auto px-4 py-5 ">
                <h1 className="uppercase text-2xl md:text-4xl font-bold text-black mb-4">Meio ambiente</h1>
                <p className="md:text-xl mb-2">Estamos buscando formas de minimizar o impacto ambiental de nossos produtos, lidar com as mudanças ambientais e inspirar outros a fazerem o mesmo.</p>
                <button className="bg-green-800 rounded-full py-2 px-4 w-40 mx-auto mt-2 font-semibold text-white">Saiba Mais</button>
            </nav>
        </div>
        <div className="grid lg:grid-cols-2 bg-gray lg:mt-10">
            <nav className="flex flex-col text-center m-auto px-4 py-5 order-1 md:order-2">
                <h1 className="uppercase text-2xl md:text-4xl font-bold text-black mb-4">Fornecimento ético</h1>
                <p className="md:text-xl mb-2 text-center">Estamos comprometidos em comprar e servir o café da mais alta qualidade, cultivado de forma responsável e comercializado com ética para ajudar a criar um futuro melhor para os produtores.</p>
                <button className="bg-green-800 rounded-full py-2 px-4 w-40 mx-auto mt-2 font-semibold text-white">Saiba Mais</button>
            </nav>
            <nav className="md:order-2"> 
                <img src="../public/img/trator.png" alt="" />
            </nav>
                
        </div>


 </section>
    )
}
export default ImpactoSocial