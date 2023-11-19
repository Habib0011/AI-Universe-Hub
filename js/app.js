function loadAi () {
    const url =`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res => res.json())
    .then(data => operationsAi(data.data.tools))

}

const operationsAi = items =>{
    console.log(items)
    const allInfo = document.getElementById('all-information')
    for(const item of items){
        console.log(item)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML =`
        <div class="col">
        <div class="card">
          <img src="${item.image ? item.image:'No-image'}" class="card-img-top img-fluid p-2 " alt="...">
          <div class="card-body">
            <h5 class="card-title">Features</h5>
            <p class="card-text">1.${item.features[0]}</p>
            <p class="card-text">2.${item.features[1]}</p>
            <p class="card-text">3.${item.features[2]}</p>
            <hr>
            <h5 class="card-title">${item.name} </h5>
            <h6 class="card-title"><i class="fa-solid fa-calendar-days"></i> ${item.published_in}
             <i class="fa-solid fa-arrow-right ms-4"></i>
              <button class="btn btn-danger" onclick="moreInfo('${item.id}')">Details</button>
             </h6>
          </div>
        </div>
      </div>
        `
        allInfo.appendChild(div)
    }

}

const moreInfo = id =>{
   const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
   fetch(url)
   .then(res => res.json())
   .then(data => console.log(data))

}
loadAi()