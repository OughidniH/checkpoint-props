import PropTypes from "prop-types";
import photoinconnu from "../Image/picture1.png";
function Profil({ fullName, profession, handleName, children }) {
  return (
    <>
      {children}
      <div className="content">
        <div className="details">
          <h2>
            {fullName}
            <br />
            <span> {profession} </span>
          </h2>
          <div className="data">
            <h3>
              250
              <br />
              <span>Posts</span>
            </h3>
            <h3>
              150k
              <br />
              <span>Follwers</span>
            </h3>
            <h3>
              380
              <br />
              <span>Following</span>
            </h3>
          </div>
          <div className="actionBtn">
            <button onClick={() => handleName(fullName)}>Message</button>
          </div>
        </div>
      </div>
    </>
  );
}
Profil.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
};
Profil.defaultProps = {
  fullName: "inconnu",
  profession: "inconnu",
  children: (
    <div className="imgBx">
      <img src={photoinconnu} alt="" />
    </div>
  ),
};

export default Profil;
