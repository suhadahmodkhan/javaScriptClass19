const searchText = () => {
    const inputField = document.getElementById("search-field")
    const searchText = inputField.value ;
    console.log(searchText)
    fetchData(searchText)
}

const fetchData = (searchText) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
.then(response => response.json())
.then(data => loadData(data.data))
} 

const loadData = (data) => {
    // console.log(data)
    let phones = data ;
    const container = document.getElementById("container")
    container.innerHTML = '' ;
    phones = phones.slice(0,6)
    phones.forEach(phone => {
        console.log(phone)
        
        const div = document.createElement("div")
        div.innerHTML =` 
         <div class="card bg-base-100 w-60 shadow-xl"  >
                    <figure>
                      <img
                        src="${phone.image}"
                        alt="phones image" />
                    </figure>
                    <div class="card-body text-center">
                      <h2 class="card-title text-center flex justify-center">${phone.phone_name}</h2>
                      <p>There are many variations of passages of available, but the majority have suffered</p>
                      <p>$999</p>
                      <div class="card-actions justify-center">
                        <button class="btn btn-primary">Show Details</button>
                      </div>
                    </div>
                  </div>`
                    container.appendChild(div)
    }) };

