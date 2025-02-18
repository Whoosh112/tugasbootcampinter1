function Film () {
    return(
        <div>
        {films.map((film, index) => (
          <div key={index}>
            <img src={film}/>
          </div>
        ))}
      </div>
    )
}

export default Film