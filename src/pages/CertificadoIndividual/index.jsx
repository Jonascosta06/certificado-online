import { useParams, Navigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import certificadoAlunos from "../../fakedata";
import Certificado from "../Certificado";

function CertificadoIndividual() {
  const { id } = useParams();
  const certificado = certificadoAlunos.find((c) => c.id == id);
  if (!certificado) {
    return <Navigate to="/certificado" />;
  }
  return (
    <div className="certificate-container">
      <div className="certificate-border">
        <div className="certificate-content">
          <img src={logo} alt="Logo" className="certificate-logo" />
          <h1>Certificado de Conclusão</h1>
          <p>Este certificado é concedido a</p>
          <h2>{certificado.name}</h2>
          <p>por completar o curso de</p>
          <h3>{certificado.course}</h3>
          <p>em</p>
          <h4>{new Date(certificado.date).toLocaleDateString()}</h4>
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
}
export default CertificadoIndividual;
