function Footer(){
    const links = [
        {titulo:'Sobre nós', textos:['Nossa empresa', 'Nosso café','Atendimento ao cliente','Canal de Denúncias', 'Código de Conduta Zamp']},
        {titulo:'Carreira', textos:['Trabalhe Conosco']},
        {titulo:'Impacto Social', textos:['Comunidade','Meio Ambiente','Fornecimento ético','História Starbucks ®']},
    ];

    const politicas =['Diretrizes de privacidade de dados','Política de troca de produto', 'Termos de uso', 'Opção de privacidade'];
    return(
        <footer className= " flex justify-center font-primary border-t-1 mx-auto gap-30 mt-20 p-10 border-gray-300">
            {
            links.map((link) =>(
                <div>
                <h1 href="/" className="text-2xl mb-2.5">{link.titulo}</h1>
                <ul>
                    {
                        link.textos.map((texto)=>(
                            <li className="mb-4 text-black/95 font-light hover:text-green-950 hover:font-semibold text-base"><a className="underline" href="">{texto}</a></li>
                        ))
                    }
                </ul>
                </div>
            ))
            
        }
        <img src="../public/img/history.png" alt=""  className="mr-4 w-40 h-25  cursor-pointer"/>
        
        </footer>
    )
}
export default Footer