import { Link, useSearchParams } from "react-router-dom";
import certificadoAlunos from "../../fakedata";
import { useEffect } from "react";

function Certificado() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");
  const listaCertificados = certificadoAlunos.filter((c) =>
    c.name.includes(query)
  );

  useEffect(() => {
    searchParams.set("query", "");
    setSearchParams(searchParams);
  }, []);

  function handleChangeSearch(e) {
    console.log(e.target.value);
    searchParams.set("query", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <h1>Certificados</h1>
      <input onChange={handleChangeSearch} />
      {listaCertificados.length > 0 ? (
        listaCertificados.map((certificado) => {
          return (
            <Link key={certificado.id} to={"/certificado/" + certificado.id}>
              <h1>{certificado.name}</h1>
              <h2>{certificado.course}</h2>
              <h3>{certificado.date}</h3>
            </Link>
          );
        })
      ) : (
        <p>Nenhum certificado encontrado</p>
      )}
    </div>
  );
}
export default Certificado;
