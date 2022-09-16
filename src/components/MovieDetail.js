function MovieDetail({coverImage, title_long, genres, rating, runtime, description}) {
    console.log("coverIage:", coverImage);
    console.log("title_long:", title_long);
    return (
        <div>
          <img src={coverImage} alt={title_long} />
          <h2>
            {title_long}
          </h2>
          <div>
            <p>
                Rating: {rating}
            </p>
            <p>
                Runtime: {runtime} min
            </p>
          </div>
          <ul>
            {genres.map(g => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>{description}</p>
        </div>
    );
}

export default MovieDetail;