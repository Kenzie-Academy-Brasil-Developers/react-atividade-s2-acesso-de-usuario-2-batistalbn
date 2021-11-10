import { Link } from "react-router-dom";

const Home = ({ members }) => {
  console.log(members);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {members.map((member) => (
            <Link
              to={
                member.type === "pj"
                  ? `/company/${member.id}`
                  : `/customer/${member.id}`
              }
            >
              <li key={member.id}>{member.name}</li>
            </Link>
          ))}
        </ul>
      </header>
    </div>
  );
};
export default Home;
