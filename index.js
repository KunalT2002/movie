async function a(){
    let inp=document.getElementById('inp').value;
    let a=await fetch(`https://www.omdbapi.com/?s=${inp}&page=1&apikey=faf083b5`)
    let data=await a.json()
    console.log(data);
    if(data.Response == "True"){
        searchmovie(data.Search);
    }else{
        sug.innerHTML =``;
    }
}

async function searchmovie(movies){
    let sug=document.getElementById('sug')
    for (let i = 0; i < movies.length; i++) {
        sug.innerHTML +=`
        <div class="sg" onclick="ff(this)">
        <img class="img" src="${movies[i].Poster}" alt="">
        <p class="title">${movies[i].Title}</p>
        <p class="type">${movies[i].Type}</p>
        <p class="year">${movies[i].Year}</p>
        <p class="imdb">${movies[i].imdbID}</p>
        </div>
        `;     
    }
}

function ff(mm) {
    let body=document.getElementById('idd')
    let sug=document.getElementById('sug');
    console.log(sug);
    body.innerHTML =`${mm.innerHTML}`;
    sug.innerHTML=``;
}
    


