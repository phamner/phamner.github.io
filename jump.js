




 fetch("https://sf.jumpbikes.com/opendata/free_bike_status.json")
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {

    // do whatever you want with this data 
      console.log(data)
    // Create and append the li's to the ul
    })
