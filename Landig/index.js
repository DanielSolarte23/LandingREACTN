const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <>
        <Header />
        <Main />
        <Section2 />
    </>
);

function Header() {
    return (
        <nav className="nav">
            <h1 className="nombre">Daniel</h1>
            <ul className="lista1">
                <li className=''>Inicio</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
        </nav>
    )
}

function Main() {
    return (
        <section className="fondo">
            <div className="container">
                <img className="perfil" src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG.png" alt="" />
                <h1>Daniel Solarte</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptatibus!</p>
            </div>
            <h1 className="bienvenidos">¡Bienvenidos!</h1>
        </section>
    )
}

function Section2() {
    return (
        <div className="container2">
            <div className="div2">
                <h1 >Sobre Nosotros</h1>
                <section className="cont">
                    <article className="der">
                        <img className="perfil" src="https://cdn.atomix.vg/wp-content/uploads/2010/04/316.jpg" alt="" />
                    </article>

                    <section className="isq">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cumque voluptatem enim sint? Porro omnis reiciendis temporibus ullam laboriosam in at voluptate delectus nostrum obcaecati! Impedit ratione velit perferendis obcaecati?</p>
                    </section>
                </section>
            </div>
        </div>
    )
}