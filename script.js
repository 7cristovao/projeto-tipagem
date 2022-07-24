const dados = [
    {
        doador: "A",
        receptor: ["A", "AB"]
    }, // 0 
    {
        doador: "B",
        receptor: ["B", "AB"] 
    }, // 1
    {
        doador: "AB",
        receptor: ["AB"]
    }, // 2 
    {
        doador: "O",
        receptor: ["A", "B", "AB", "O"]
    } // 3
]

function verificar() {
    //Ler selectDoador

    let tipoDoador = document.getElementById("tipoSanguineoDoador").value
    let tipoReceptor = document.getElementById("tipoSanguineoReceptor").value
    let result = document.getElementById("resultado")

    let ehValido = verificarDoador(tipoDoador,tipoReceptor)

    if (ehValido){
        result.textContent = "É válido"
    }else{
        result.textContent = "Não é válido"
    }
}

function verificarDoador(tipoDoador,tipoReceptor){
    
    for(let iDoador = 0; iDoador < dados.length; iDoador++){
        
        const itemDoador = dados[iDoador]

        if(itemDoador.doador == tipoDoador){

            const vetorReceptor = itemDoador.receptor

            for (iReceptor = 0; iReceptor < vetorReceptor.length; iReceptor++){
                if(vetorReceptor[iReceptor] == tipoReceptor){
                    return true
                }
            }
        }
    } 
    return false 
}


//usar a string pra buscar no vetor dados

//parametro pra perfilar e um a um verificar se é compatível ou não



