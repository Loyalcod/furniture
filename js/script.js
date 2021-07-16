advert=[
    {"id":"1", "content":"Your Advert Here"},
    {"id":"2", "content":"Your Advert Here"},
    {"id":"3", "content":"Your Advert Here"},
    {"id":"4", "content":"Your Advert Here"},
    
];

let advertHere = document.querySelector('.register');

for(x in advert){
    console.log(advert[x]);

    advertHere.innerHTML = advertHere.innerHTML + `
    <div class="advert">
        <p>${advert[x].content}</p>
    </div>
    
    `;
}