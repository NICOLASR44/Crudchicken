const ChickenForm = () => {
  return (
    <div className="chicken-form">
      <h2>Ajouter mon poulet</h2>
      <input type="text" placeholder="Nom du poulet" />
      <button className="create-btn">Valider</button>
    </div>
  );
};

export default ChickenForm;
