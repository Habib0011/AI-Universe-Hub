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
            <h6 class="card-title d-flex justify-content-between">
            <span><i class="fa-solid fa-calendar-days mt-2"></i> ${item.published_in}</span>
           <span><i class="fa-solid fa-arrow-right "></i>
           <button type="button" class="btn btn-danger" onclick="moreInfo('${item.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
           </span>
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
   .then(data => moreInfoOperation(data))

}
const moreInfoOperation = items =>{
    console.log(items)
    const leftInfo = document.getElementById('left-Info')
    const rightInfo = document.getElementById('right-info')
    leftInfo.innerHTML = `
         <div class="border p-2 border-danger bg-danger-subtle rounded">
         <p class="fs-6">${items.data.description}</P>
          <div class="d-flex justify-content-around  ">
          <div class=" bg-light-subtle p-2  rounded text-success">
            <span>${items.data.pricing[0].price}<br></span>
            <span>${items.data.pricing[0].plan}<br></span>
          </div>          
          <div class="bg-light-subtle p-3  text-warning">
          <span>${items.data.pricing[1].price}<br></span>
          <span>${items.data.pricing[1].plan}<br></span>
          </div>
          <div class="bg-light-subtle p-2  text-danger">
          <span>${items.data.pricing[2].price}<br></span>
          <span>${items.data.pricing[2].plan}<br></span></div>
          </div>
         
          <div class="d-flex justify-content-around">
          <div>
          <h5>Features</h5>
          <ul>
          <li>${items.data.features[1].feature_name}</li>
          <li>${items.data.features[2].feature_name}</li>
          <li>${items.data.features[3].feature_name}</li>
          </ul>
          </div>
          <div>
          <h5>Integrations</h5>
          <ul>
          <li>${items.data.integrations[0]}</li>
          <li>${items.data.integrations[1]}</li>
          <li>${items.data.integrations[2]}</li>
          </ul>
          </div>
          </div>
         </div>
          `

    rightInfo.innerHTML =
    
    `
    <div class="border p-2 border rounded">
    <img src ="${items.data.image_link[0]}"class="img-fluid"> 
    <span class="bg-danger px-2 text-white">Accuracy:${items.data.accuracy.score ? items.data.accuracy.score:'No Accuracy'}</span>
    <h5 class="text-center fs-6">${items.data.input_output_examples[0].input}</h5>
    <h6 class="text-center">${items.data.input_output_examples[0].output}</h6>

    </diV>

    
    
    
    
    
    `


}


loadAi()