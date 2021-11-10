import { useParams, Link } from "react-router-dom";

const Company = ({ members }) => {
  const { id } = useParams();
  const member = members.find((member) => member.id === id);

  return (
    <div>
      <header className="App-header">
        <div>
          <h1>Detalhes da Empresa</h1>
          <p> Nome da empresa: {member && member.name}</p>
          <Link to="/">Voltar</Link>
        </div>
      </header>
    </div>
  );
};

export default Company;
