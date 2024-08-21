import { useSearchParams } from "react-router-dom";
import logo from "./assets/logo.png";
import { useEffect } from "react";
export const Certificado = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const course = searchParams.get("course");
  const date = searchParams.get("date");

  return (
    <div className="certificate-container">
      <div className="certificate-border">
        <div className="certificate-content">
          <img src={logo} alt="Logo" className="certificate-logo" />
          <h1>Certificado de Conclusão</h1>
          <p>Este certificado é concedido a</p>
          <h2>{name}</h2>
          <p>por completar o curso de</p>
          <h3>{course}</h3>
          <p>em</p>
          <h4>{new Date(date).toLocaleDateString()}</h4>
          <div className="signature">
            <center>
              <h6></h6>
            </center>
            <p>Instrutor Responsável</p>
          </div>
        </div>
      </div>
    </div>
  );
};
