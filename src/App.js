import "./App.css";
import Profil from "./Comp/Profil";
import picture from "./Image/picture.jpg";

function App() {
  const handleName = (name) => {
    return alert(name);
  };
  return (
    <>
      <div className="card">
        <Profil
          fullName="Halima Oughidni"
          profession="Jeune diplômé en fullStack Developer"
          handleName={handleName}
        >
          <div className="imgBx">
            <img src={picture} alt="" />
          </div>
        </Profil>
      </div>
    </>
  );
}

export default App;
