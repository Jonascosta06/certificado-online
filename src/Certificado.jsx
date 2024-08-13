import logo from "./assets/logo.png";
export const Certificado = ({ name, course, date }) => {
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
            <p>Assinatura do Instrutor</p>
            <div className="signature-line"></div>
            <p>Instrutor Responsável</p>
          </div>
        </div>
      </div>
    </div>
  );
};
