import ChickenItem from "./ChickenItem";

const ChickenList = () => {
  return (
    <div className="chicken-list">
      <h2>Listing de mes poulets</h2>
      <ChickenItem name="Poulet Rôti" />
      <ChickenItem name="Poulet Curry" />
      <ChickenItem name="Poulet Grillé" />
    </div>
  );
};

export default ChickenList;
