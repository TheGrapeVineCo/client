const WineListing = ({ listing }) => {
  return (
    <>
      <p>{listing.brand}</p>
      <p>{listing.grape_variety}</p>
      <p>{listing.year}</p>
      <p>{listing.category}</p>
      <p>{listing.country}</p>
      <p>{listing.region}</p>
      <p>{listing.description}</p>
    </>
  );
};

export default WineListing;
