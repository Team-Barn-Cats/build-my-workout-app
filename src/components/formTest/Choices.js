const Choices = ({ checkedValues }) => (
    <div>
      <h2>Selected Items</h2>
      <ul>
        {checkedValues.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );

  
  
  export default Choices;
  