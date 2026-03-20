function Footer(){
    const links = [
        {titulo:'Sobre nós', textos:['Nossa empresa', 'Nosso café','Atendimento ao cliente','Canal de Denúncias', 'Código de Conduta Zamp']},
        {titulo:'Carreira', textos:['Trabalhe Conosco']},
        {titulo:'Impacto Social', textos:['Comunidade','Meio Ambiente','Fornecimento ético','História Starbucks ®']},
    ];

    const politicas =['Diretrizes de privacidade de dados','Política de troca de produto', 'Termos de uso', 'Opção de privacidade'];
    return(
        <footer className="">
            
            <div className= "px-80 flex font-primary border-t-1 mx-auto gap-30 mt-20 p-10 border-gray-300 mb-8 border-b">
            {
            links.map((link) =>(
                <div>
                <h1 href="/" className="text-2xl mb-2.5">{link.titulo}</h1>
                <ul>
                    {
                        link.textos.map((texto)=>(
                            <li className="mb-4 text-black/95 font-light hover:text-green-950 hover:font-semibold text-sm"><a className="underline" href="">{texto}</a></li>
                        ))
                    }
                </ul>
                </div>
            ))
            
        }
        <img src="../public/img/history.png" alt=""  className="mr-4 w-40 h-25  cursor-pointer"/>
        </div>
     

        <div className="flex flex-col items-center ">
            <img src="../public/img/starbucks.svg" className="mb-9 mt-5" alt="" />
            <div className="flex gap-4 mb-7">
            <div className="bg-black w-10 h-10 rounded-full relative cursor-pointer hover:bg-green-900">
                <img src="../public/icons/spotify.png" alt=""  className="w-7 h-7 absolute top-1.5 left-1.5 "/>
            </div>
            <div className="bg-black w-10 h-10 rounded-full relative cursor-pointer hover:bg-green-900">
                <img src="../public/icons/instagram.png" alt=""  className="w-7 h-7 absolute top-1.5 left-1.5 "/>
            </div>
            <div className="bg-black w-10 h-10 rounded-full relative cursor-pointer hover:bg-green-900">
                <img src="../public/icons/facebook.png" alt=""  className="w-7 h-7 absolute top-1.5 left-1.5 "/>
            </div>
            <div className="bg-black w-10 h-10 rounded-full relative cursor-pointer hover:bg-green-900">
                <img src="../public/icons/linkedin.png" alt=""  className="w-7 h-7 absolute top-1.5 left-1.5 "/>
            </div>
            <div className="bg-black w-10 h-10 rounded-full relative cursor-pointer hover:bg-green-900">
                <img src="../public/icons/youtube.png" alt=""  className="w-6 h-6 absolute top-2 left-2 "/>
            </div>
            <div className="bg-black w-10 h-10 rounded-full relative cursor-pointer hover:bg-green-900">
                <img src="../public/icons/twitter.webp" alt=""  className="w-7 h-7 absolute top-1.5 left-1.5 "/>
            </div>
        </div>
        <div className="divide-x divide-neutral-500 flex mt-4 mb-9 ">
            <a href="" className="px-3 font-light text-lg underline hover:text-green-900 hover:font-semibold transition duration-300 ">Diretrizes de privacidade de dados </a>
            <a href="" className="px-3 font-light text-lg underline hover:text-green-900 hover:font-semibold transition duration-300 ">Política de troca de produto</a>
            <a href="" className="px-3 font-light text-lg underline hover:text-green-900 hover:font-semibold transition duration-300 ">Termos de uso</a>
            <a href="" className="px-3 font-light text-lg underline hover:text-green-900 hover:font-semibold transition duration-300 ">Opção de privacidade</a>
        </div>


        <p className="text-sm text-gray-400 mb-10 font-light">© 2026 Starbucks Coffee Company. Todos os direitos reservados.</p>
        </div>
        
        </footer>
    )
}
export default Footer