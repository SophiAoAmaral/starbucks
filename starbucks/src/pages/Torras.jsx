function Torras(){
    const torras = [
        {id:1, titulo:"Torra Clara", descricao:"Delicados e pouco encorpados, os cafés de Torra Clara despertam gentilmente os sentidos e proporcionam uma xícara acessível e saborosa com leves traços de torrefação."},
        {id:2, titulo:"Torra Média", descricao:"Aveludados e balanceados, nossos cafés de Torra Média são perfeitos a qualquer hora para a pausa do cafezinho."},
        {id:3, titulo:"Torra Escura", descricao:"Ousados e mais encorpados, estes cafés apresentam sabores robustos e a essência característica de uma torra intensa."},
        


    ]
    return(
        <section className="max-w-7xl mx-auto font-primary pt-28">
            <div className="grid md:grid-cols-2 mb-10">
                <div>
                    <img src="../public/img/pao.png" alt="" />
                </div>
                <div className="bg-gray flex flex-col justify-center text-center p-6 ">
                    <nav className="">
                        <img src="../public/icons/graos.png" alt="" className="w-19 m-auto mb-5 "/>
                        <h1 className="uppercase text-4xl font-bold mb-5">Como descobrir a torra perfeita para você?</h1>
                        <p className="text-xl">Se você ainda não provou dos suaves e amenos sabores de uma Torra Clara Starbucks® até a profunda intensidade da Torra Escura, talvez não saiba que exista um mundo imenso de cafés para experimentar.</p>
                    </nav>
                </div>
                </div>

                <div className="grid md:grid-cols-2">
                    <div>
                        <img src="../public/img/torras.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-7 px-8 md:px-0 ">
                        <p className="font-extralight text-xl  text-neutral-600">Antes de o café ser torrado, os grãos de café verdes têm cheiro de legumes frescos e grãos doces. É através do processo de torrefação que o aroma, a acidez, o corpo e o sabor únicos de um café são cultivados. Na Starbucks, passamos 45 anos refinando nosso processo de torrefação, para que os bebedores de café possam ter uma qualidade consistente em cada xícara, com cada café que assamos.</p>
                        <p className="font-extralight text-xl  text-neutral-600">Por exemplo, o Starbucks® Veranda Blend® é um café torrado Blonde - fica no extremo claro do espectro - e mostra um sabor suave e suave com notas de cacau macio e nozes tostadas levemente. O Starbucks® Pike Place® Roast é um café torrado médio, com notas de cacau e nozes tostadas. E o Starbucks® Italian Roast é um café torrado escuro, com sabor profundo e notas de açúcar caramelizado.</p>
                        <p className="font-extralight text-xl text-neutral-600">Mesmo dentro de uma determinada torrefação, os cafés podem ter um sabor muito diferente: cada café terá seu próprio caráter, determinado por sua torrefação, sua origem, método de processamento e como foi fabricado e servido. Portanto, a melhor maneira de encontrar o que você ama pode muito bem ser provar todos eles. Peça orientação a qualquer barista da Starbucks.</p>
                    </div>
                </div>

                <div>
                    <h1>Espectro de torra</h1>
                    <div className="flex ">
                        {
                            torras.map((torra)=>(
                            <nav key={torra.id}>
                                <div>
                                    <img src="../public/icons/coffe-icon-white.png" alt="" />
                                    <p>{torra.titulo}</p>
                                </div>
                                <div>
                                    <p>{torra.descricao}</p>
                                </div>
                            </nav>
                            ))
                        }
                    </div>
              </div>
            

        </section>
    )
}
export default Torras;