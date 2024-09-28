function navigate(w){
    let caminho = ""
    switch(w){
        case 0 : caminho = "../dashboard.html";
        case 1: caminho = "../funcionarios.html";
    }

    window.location = caminho;
}