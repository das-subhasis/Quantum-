const Ratings = () => {
    const rating = 4.5;  // Replace with data from Redux if needed
    const reviews = 2492;
  
    return (
      <div className="bg-gray-100 p-4 rounded">
        <p className="text-xl">Rating: {rating} / 5</p>
        <p>{reviews} Reviews</p>
      </div>
    );
  };
  
  export default Ratings;
  
  