//função para detecção do tema da plataforma
function detectionColor() {
    var theme = "light" //padrão


    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") == "light") {
            theme = "light";
        }
    } else if (!window.matchMedia) {
        return false;
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        theme = "light"
    }

    if (theme == "light") {
        document.documentElement.setAttribute("data-theme", "light");
    }
}

//função para mudança dos valores das variaveis do servidor para sinalização do tema escolhido(foi pego no stackoverflow)
const toggleSwitch = document.querySelector('#theme-switch input[type="checkbox"]');

//function that changes the theme, and sets a localStorage variable to track the theme between page loads
function switchTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = true;
    } else {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = false;
    }
}

//função para mudança de tema
toggleSwitch.addEventListener('change', switchTheme, false);

//pre-check the dark-theme checkbox if dark-theme is set
if (document.documentElement.getAttribute("data-theme") == "light") {
    toggleSwitch.checked = true;
}




document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const menuSidebar = document.querySelector('.menu-sidebar');
    const navCards = document.querySelectorAll('.card-navbar');

    // Função para alternar o estado da sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('retracted');
    }

    // Event listener para o botão de toggle
    sidebarToggle.addEventListener('click', toggleSidebar);

    // Código existente para os cards da navbar
    navCards.forEach(card => {
        card.addEventListener('click', function() {
            navCards.forEach(c => c.classList.remove('activate'));
            this.classList.add('activate');
            menuSidebar.className = 'menu-sidebar';
            const cardClass = this.classList[1].replace('navbar-card-', '');
            menuSidebar.classList.add(`select-${cardClass}`);

            // Se a sidebar estiver retraída, expanda-a ao clicar em um card
            if (sidebar.classList.contains('retracted')) {
                toggleSidebar();
            }
        });
    });

    // Iniciar com a sidebar retraída
    sidebar.classList.add('retracted');
});

const buttonFilter = document.getElementById('buttonFilter')
const filter = document.querySelector('.dropdown-filter')

let isShow = false;
buttonFilter.addEventListener('click', ()=>{
    isShow = !isShow;

    if(isShow){
        filter.classList.add('activate')
        return
    }

    filter.classList.remove('activate')
});
