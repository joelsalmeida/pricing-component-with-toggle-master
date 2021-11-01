import PlanCard from './PlanCard';

function App() {
  return (
    <div className="App">
      <PlanCard
        type="Basic"
        price="19.99"
        descriptionOne="500 GB Storage"
        descriptionTwo="2 Users Allowed"
        descriptionThree="Send up to 3 GB"
      />
    </div>
  );
}

export default App;
