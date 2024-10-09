//função para detecção do tema da plataforma
function detectionColor() {
    let theme = localStorage.getItem("theme") || "light"; // Padrão é light se não houver tema salvo

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem("theme")) {
        theme = "light"; // O tema vai ser escuro se for o padrão do sistema
    }

    applyTheme(theme);
}

// Função para aplicar o tema
function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    toggleSwitch.checked = (theme === "light");
}

// Função para alternar o tema
function switchTheme(e) {
    const newTheme = e.target.checked ? "light" : "dark";
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
}

// Seleciona o checkbox
const toggleSwitch = document.querySelector('#theme-switch input[type="checkbox"]');

// Adiciona o evento de mudança ao checkbox
toggleSwitch.addEventListener('change', switchTheme);

// Inicializa o tema
detectionColor();

//pre-check the dark-theme checkbox if dark-theme is set
if (document.documentElement.getAttribute("data-theme") == "light") {
    toggleSwitch.checked = true;
}


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

const mapAcess = document.getElementById('mapAcess')

mapAcess.addEventListener('click', ()=>{
    mapAcess.classList.add('fullscreen')

    setTimeout(() =>{
        acessarMapa();
    }, 500)
});

function acessarMapa(){
    window.location = "../mapaData.html"
}


// ... código existente ...

// Função para mudar entre dashboards
function changeDashboard(dashboardId) {
    // Aqui você pode implementar a lógica para carregar os dados específicos de cada dashboard
    console.log(`Carregando dashboard para: ${dashboardId}`);

    // Atualiza a classe ativa
    document.querySelectorAll('.folder-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.folder-tab[data-dashboard="${dashboardId}"]`).classList.add('active');

    // Aqui você pode atualizar o conteúdo da dashboard conforme necessário
}

// Adiciona event listeners para as abas
document.querySelectorAll('.folder-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        changeDashboard(e.target.getAttribute('data-dashboard'));
    });
});

// Função para criar o gráfico de tendências climáticas
function createClimateChart() {
    const ctx = document.getElementById('climateChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Temperatura (°C)',
                data: [22, 24, 27, 23, 20, 18],
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }, {
                label: 'Precipitação (mm)',
                data: [50, 60, 70, 80, 90, 100],
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Tendências Climáticas'
                }
            }
        }
    });
}

// Função para criar o gráfico de eventos sazonais
function createEventsChart() {
    const ctx = document.getElementById('eventsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Verão', 'Outono', 'Inverno', 'Primavera'],
            datasets: [{
                label: 'Número de Eventos',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Eventos Sazonais'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Função para criar o gráfico de demanda turística sazonal
function createDemandChart() {
    const ctx = document.getElementById('demandChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Praias',
                data: [80, 85, 75, 60, 40, 30, 25, 30, 50, 65, 70, 75],
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }, {
                label: 'Montanhas',
                data: [30, 25, 35, 50, 60, 70, 75, 70, 55, 45, 35, 30],
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Demanda Turística Sazonal'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Demanda (%)'
                    }
                }
            }
        }
    });
}

// Função para criar o gráfico de atividades populares por destino
function createActivitiesChart() {
    const ctx = document.getElementById('activitiesChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Praia', 'Montanha', 'Cidade', 'Campo'],
            datasets: [{
                label: 'Esportes',
                data: [70, 80, 30, 50],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            }, {
                label: 'Cultura',
                data: [40, 30, 90, 60],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            }, {
                label: 'Gastronomia',
                data: [60, 50, 80, 70],
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
            }, {
                label: 'Relaxamento',
                data: [80, 70, 40, 90],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Atividades Populares por Tipo de Destino'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Popularidade (%)'
                    }
                }
            }
        }
    });
}

function createSafetyIndexChart() {
    const ctx = document.getElementById('safetyIndexChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Rio de Janeiro', 'São Paulo', 'Salvador', 'Fortaleza', 'Manaus'],
            datasets: [{
                label: 'Índice de Segurança',
                data: [65, 70, 68, 62, 75],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Índice de Segurança por Destino'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Índice de Segurança'
                    }
                }
            }
        }
    });
}

function createStateCharacteristicsChart() {
    const ctx = document.getElementById('stateCharacteristicsChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Popularidade Nacional',
                'Popularidade Internacional',
                'Demanda em Eventos',
                'Nível de Segurança'
            ],
            datasets: [{
                label: 'Rio de Janeiro',
                data: [90, 85, 80, 65],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
                label: 'São Paulo',
                data: [85, 80, 90, 70],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Características dos Estados'
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}

window.addEventListener('load', () => {
    createDemandChart();
    createActivitiesChart();
    createSafetyIndexChart();
    createStateCharacteristicsChart();
});
