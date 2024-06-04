const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <>
    <Encabezado />
    <Cuerpo />
  </>
);

function Encabezado() {
  return <h1 className="color">Soy el Encabezado</h1>;
}

function Cuerpo() {
  return <h2>Soy el Cuerpo</h2>;
}
