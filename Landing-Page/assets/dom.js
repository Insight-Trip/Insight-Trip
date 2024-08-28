//Função para sombra na navbar no momento do scroll
window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');

    if (this.window.scrollY > 0) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});

//Função para animação do nome InsightTrip da home com o scroll
let endPosition = window.scrollY;

document.addEventListener('scroll', function(){
    const text = document.querySelector('#insghtTrip-TextCover');

    const scrollY = window.scrollY;

    console.log(scrollY);

    let top = parseInt(window.getComputedStyle(text).top, 10);

        if (isNaN(top)) top = 0;

    if(scrollY > endPosition){
        if(top < 409){
            text.style.top = `${top + 100}px`;
        }
    }else{
        if(top >= 110)
        text.style.top = `${top - 100}px`;
    }

        console.log(top)

        endPosition = scrollY;

})

//Função para troca de imagens de tempos em tempos
document.addEventListener('DOMContentLoaded', () =>{
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
                textCover.classList.remove('second');
                imageCover.classList.remove('second');
                navbar.classList.remove('second');
            }


            if(posicaoImagem == 1){
                textCover.classList.add('second');
                imageCover.classList.add('second');
                navbar.classList.add('second');
            }

            if(posicaoImagem == 3){

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

    setInterval(changeImage, 5000);
})