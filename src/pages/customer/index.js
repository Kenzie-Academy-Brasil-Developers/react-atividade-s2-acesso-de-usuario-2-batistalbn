import { useParams, Link } from "react-router-dom";

const Customer = ({ members }) => {
  const { id } = useParams();
  const member = members.find((member) => member.id === id);

  return (
    <div>
      <header className="App-header">
        <div>
          <h1>Detalhes do cliente</h1>
          <p> Nome: {member && member.name}</p>
          <Link to="/">Voltar</Link>
        </div>
      </header>
    </div>
  );
};

export default Customer;
