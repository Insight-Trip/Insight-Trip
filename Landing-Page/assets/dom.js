//Função para sombra na navbar no momento do scroll
function adicionarSombraNaNavbar() {
    let navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
}

let endPosition = window.scrollY;

//Função para animação do nome InsightTrip da home com o scroll
function animarTextoInsightTrip() {
    const text = document.querySelector('#insghtTrip-TextCover');
    const scrollY = window.scrollY;

    console.log(scrollY);

    let top = parseInt(window.getComputedStyle(text).top, 10);

    if (isNaN(top)) top = 0;

    if (scrollY > endPosition) {
        if (top < 409) {
            text.style.top = `${top + 100}px`;
        }
    } else {
        if (top >= 110)
            text.style.top = `${top - 100}px`;
    }

    console.log(top);

    endPosition = scrollY;
}

//Função para troca de imagens de tempos em tempos
function inicializarTrocaDeImagens(tempoTroca) {
    const imageCover = document.getElementById('imageCover');
    const textCover = document.querySelector('#insghtTrip-TextCover');
    const listaImagens = ["assets/Images/tree-ocean.png",  "assets/Images/mar-sol.png", "assets/Images/mountain.png"]
    const navbar = document.querySelector('.navbar');
    let posicaoImagem = 0;

    function changeImage(){
        imageCover.classList.add('fade-out');

        console.log(listaImagens[posicaoImagem])
        console.log(posicaoImagem)

        setTimeout(() =>{
            posicaoImagem = (posicaoImagem + 1) % listaImagens.length;
            imageCover.src = listaImagens[posicaoImagem];

            if(posicaoImagem == 0){
                textCover.classList.remove('third');
                imageCover.classList.remove('third');
                navbar.classList.remove('third');
            }


            if(posicaoImagem == 1){
                textCover.classList.add('second');
                imageCover.classList.add('second');
                navbar.classList.add('second');
            }

            if(posicaoImagem == 2){

                textCover.classList.remove('second');
                imageCover.classList.remove('second');
                navbar.classList.remove('second')
                
                textCover.classList.add('third');
                imageCover.classList.add('third');
                navbar.classList.add('third');
            }

            imageCover.addEventListener('load', () =>{
                imageCover.classList.remove('fade-out');
                imageCover.classList.add('fade-in');

                if(imageCover)

                setTimeout(() =>{
                    imageCover.classList.remove('fade-in');
                }, 1000);
            })
        }, 1000);

    }

    setInterval(changeImage, tempoTroca);
}




//Chamada das funções 
window.addEventListener('scroll', function () {
    adicionarSombraNaNavbar();
});

document.addEventListener('scroll', animarTextoInsightTrip);

document.addEventListener('DOMContentLoaded', inicializarTrocaDeImagens(5000));