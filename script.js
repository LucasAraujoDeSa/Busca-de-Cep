const cep = document.querySelector(".cep");
const procurar = document.querySelector("#pro")

const showData = (result) =>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

procurar.addEventListener("click" , (e)=>{
    let search = cep.value.replace("-", "")
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }
    fetch(`https://viacep.com.br/ws/${search}/json/` , options)
    .then(response => {response.json()
        .then(data => showData(data))
    })
    .catch(err => console.log(`nao encontrado ${err}`));
});
