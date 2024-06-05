const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <>
        <Header />
        <Main />
        <Section2 />
        <GamesContainer />
        <Fottee />
    </>
);

function handleScroll() {
    let navi = document.getElementById("navi");
    if (window.scrollY > 0) {
        navi.classList.add('bg-GrisD');
    } else {
        navi.classList.remove('bg-GrisD');
    }
}

function Header() {
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Limpieza del evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav id="navi" className="nav">
            <h1 className="nombre">HALO</h1>
            <ul className="lista1">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#games">Contacto</a></li>
            </ul>
        </nav>
    )
}

function Main() {
    return (
        <section id="inicio" className="fondo">
            <div className="container">
                <img className="perfil" src="https://b.thumbs.redditmedia.com/aEl0W9rk2ntR2NKoBkuk-F2n_iAfspGapXsHIrbi2OE.png" alt="" />
                <h1>HALO</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptatibus!</p>
            </div>
            <h1 className="bienvenidos">¡Bienvenidos!</h1>
        </section>
    )
}

function Section2() {
    return (
        <div id="nosotros" className="container2">
            <div className="div2">
                <h1 >Sobre Nosotros</h1>
                <section className="cont">
                    <article className="der">
                        <img className="perfil" src="https://preview.redd.it/mean-green-fighting-machine-my-master-chief-cosplay-v0-srv2z1a1ih0b1.jpg?width=640&crop=smart&auto=webp&s=99706156f3cd4e8fd89a76645d631790c509afe5" alt="" />
                    </article>

                    <section className="isq">
                        <p>Halo es una franquicia de videojuegos de ciencia ficción creada y desarrollada por Bungie Studios hasta Halo Reach, y gestionada ahora por 343 Industries, propiedad de Xbox Game Studios. La serie se centra en una guerra interestelar entre la humanidad y una alianza teocrática de alienígenas conocidos como Covenant.</p>
                    </section>
                </section>
            </div>
        </div>
    )
}

function GamesContainer() {
    return (
        <section id="games" className="contenido">
            <div className="targeta">
                <img src="https://upload.wikimedia.org/wikipedia/en/9/9c/HaloCEA_boxart.png" alt="" />
                <h3>Halo CE</h3>
                <p></p>
            </div>
            <div className="targeta">
                <img src="https://upload.wikimedia.org/wikipedia/en/9/92/Halo2-cover.png" alt="" />
                <h3>Halo 2</h3>
                <p></p>
            </div>
            <div className="targeta">
                <img src="https://upload.wikimedia.org/wikipedia/en/b/b4/Halo_3_final_boxshot.JPG" alt="" />
                <h3>Halo 3</h3>
                <p></p>
            </div>
            <div className="targeta">
                <img src="https://upload.wikimedia.org/wikipedia/en/9/92/Halo_4_box_artwork.png" alt="" />
                <h3>Halo 4</h3>
                <p></p>
            </div>
            <div className="targeta">
                <img src="https://upload.wikimedia.org/wikipedia/en/6/68/Halo_Guardians.png" alt="" />
                <h3>Halo 5</h3>
                <p></p>
            </div>
            <div className="targeta">
                <img src="https://upload.wikimedia.org/wikipedia/en/5/5c/Halo-_Reach_box_art.png" alt="" />
                <h3>Halo Reach</h3>
                <p></p>
            </div>
        </section>

    )
}

function Fottee() {
    return (
        <footer className="fott">
            <h1>HALO</h1>
        </footer>
    )
}