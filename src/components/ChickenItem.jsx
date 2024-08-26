import PropTypes from "prop-types";

const ChickenItem = ({ name }) => {
  return (
    <div className="chicken-item">
      <h3>{name}</h3>
      <div className="actions">
        <button className="update-btn">Mettre à jour</button>
        <button className="delete-btn">Supprimer</button>
      </div>
    </div>
  );
};

// Validation des props
ChickenItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ChickenItem;
