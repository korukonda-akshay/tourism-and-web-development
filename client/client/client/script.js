const API = "http://localhost:5000/api/places";

async function fetchPlaces() {
    const res = await fetch(API);
    const data = await res.json();

    const container = document.getElementById("places");
    container.innerHTML = "";

    data.forEach(place => {
        container.innerHTML += `
            <div class="card">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
                <p><b>Reviews:</b> ${place.reviews.join(", ")}</p>
            </div>
        `;
    });
}

async function addReview() {
    const name = document.getElementById("name").value;
    const review = document.getElementById("review").value;

    await fetch(`${API}/review`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, review })
    });

    fetchPlaces();
}

fetchPlaces();
