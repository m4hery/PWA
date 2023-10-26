const cle ="5735883d74271df083448cf818e55cf5"
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzM1ODgzZDc0MjcxZGYwODM0NDhjZjgxOGU1NWNmNSIsInN1YiI6IjY1MzYxNjYzMDI4NDIwMDEzYWFmYmQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o5gcqlOmcvwxQ08FkyeFM2YEL8-5ZWvFYHxOCY-IJOE"

const btn = document.getElementById("submit");
const query = document.getElementById("query");
const reponse = document.getElementById("response")
const url_image = "https://image.tmdb.org/t/p/w500"

const option = {
    method: "GET",
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
    }
}

btn.addEventListener('click', async () => {
    let output = ""
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query.value}&api_key=${cle}`, option)
    .then((res) => {
        if(!res.ok) return []
        return res.json()
    })
    console.log(data.results)
    data?.results.map(film => (output += `
    <div class="col">
    <div class="card shadow-sm">
      <img src=${url_image}${film?.poster_path} alt="No Image"></img>
      <div class="card-body">
        <p class="card-text">${film.original_title}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
            <small class="text-body-secondary">9 mins</small>
            </div>
        </div>
        </div>
    </div>  
    `))
    reponse.innerHTML = output
})

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        this.navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("tafa"))
        .catch(err => console.log("tsa tafa", err))
    })
}