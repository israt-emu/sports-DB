const sportDiv = document.getElementById("sports");

// load data by sports
const loadSports = async () => {
  const res = await fetch(
    "https://www.thesportsdb.com/api/v1/json/1/all_sports.php"
  );
  const data = await res.json();
  displaySports(data.sports);
};
loadSports();
const displaySports = (sports) => {
  sports.forEach((sport) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
      <div class="card h-100">
            <img src="${sport.strSportThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${sport.strSport}</h5>
              <p class="card-text">
                ${sport.strSportDescription.slice(0, 250)}
              </p>
              <a href="#" class="btn btn-warning">Show Details</a>
            </div>
          </div>
      `;
    sportDiv.appendChild(div);
  });
};
window.addEventListener("load", function () {
  const loader = document.getElementById("load");
  loader.classList.add("hidden");
});

//load data by search
const loadBySearch = () => {
  const input = document.getElementById("input");
  const searchText = input.value;
  const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}
`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
