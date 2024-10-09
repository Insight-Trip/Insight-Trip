/**
 * Configura a funcionalidade do flatpickr para selecionar um intervalo de datas.
 * Define o formato, a localidade e outros parâmetros de exibição.
 * 
 * @event DOMContentLoaded - Evento disparado quando o DOM está completamente carregado.
 */
document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#dateRange", {
        mode: "range",
        dateFormat: "d/m/Y",
        locale: {
            firstDayOfWeek: 0,
            weekdays: {
                shorthand: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
                longhand: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado']
            },
            rangeSeparator: ' até ',
            weekAbbreviation: 'Sem',
            scrollTitle: 'Role para aumentar',
            closeText: 'Fechar'
        },
        onchange: (selectedDates, dateStr, instance) =>{
            console.log(selectedDates, dateStr, instance)

            buildLegends(
            {
                    type: 1,
                    value: dateStr
            })
            
        }
    });
});

const buttonClima = document.getElementById('buttonClima');

const filters = []

const dateRange = document.getElementById('dateRange');

dateRange.addEventListener('change', ()=>{
    buildLegends(
        {
            type: 1,
            value: dateRange.value
        }
    )
})

let isChecked = false;

/**
 * Alterna a visibilidade da área de filtros de clima e altera a classe do botão de clima ao ser clicado.
 * 
 * @event click - Evento disparado ao clicar no botão.
 */
buttonClima.addEventListener('click', () => {
    isChecked = !isChecked;

    isChecked ? buttonClima.classList.add('activate') : buttonClima.classList.remove('activate');

    // Atualiza a visibilidade da box-filter-clima
    const boxFilterClima = document.querySelector('.box-filter-clima');
    boxFilterClima.style.display = isChecked ? 'flex' : 'none'; // Altera o display com base no estado

    showFilter(isChecked);
});

/**
 * Exibe os filtros de clima ao usuário e cria os elementos de input para seleção.
 * 
 * @param {boolean} a - Indica se a box de filtros deve ser exibida ou não.
 */
function showFilter(a) {
    const boxFilterClima = document.querySelector('.box-filter-clima');

    boxFilterClima.classList.remove('activate')
    boxFilterClima.innerHTML = '';

    if (a) {
        boxFilterClima.classList.add('activate')
        const filtros = [
            { id: 'chkVerao', label: 'Verão', class: 'checkbox-filter', name: 'verao' },
            { id: 'chkInverno', label: 'Inverno', class: 'checkbox-filter', name: 'inverno' },
            { id: 'chkSeco', label: 'Seco', class: 'checkbox-filter', name: 'seco' },
            { id: 'chkChuva', label: 'Chuva', class: 'checkbox-filter', name: 'chuva' }
        ];

        filtros.forEach(filtro => {
            const label = document.createElement('label');
            label.setAttribute('for', filtro.id);
            label.textContent = filtro.label;

            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = filtro.id;
            input.classList.add(filtro.class);
            input.name = filtro.name;

            // Mover o input para antes do label
            label.prepend(input); // Adiciona o checkbox antes do texto do label

            boxFilterClima.appendChild(label);
        });

        const confirm = document.createElement('button');
        const areaConfirm = document.createElement('div');
        areaConfirm.classList.add('area-button-filter')
        confirm.textContent = 'Aplicar'

        confirm.addEventListener('click', () => {
            const listaChecks = document.querySelectorAll('.checkbox-filter')
            const listaSelecionados = [];

            listaChecks.forEach(check => {
                if (check.checked) {
                    listaSelecionados.push(check.name)
                }
            })

            isChecked = !isChecked;
            applyFilters(listaSelecionados)

            showFilter(isChecked)
        })

        areaConfirm.appendChild(confirm);
        boxFilterClima.appendChild(areaConfirm)
    }
}

/**
 * Aplica filtros climáticos e atualiza o botão e as legendas.
 * 
 * @param {Array<string>} lista - Lista de tipos de clima selecionados.
 */
function applyFilters(lista) {
    const button = document.querySelector('.button-clima')

    button.textContent = lista.length > 1 ? 'Misto' : lista

    buildLegends({
        type: 2,
        value: lista.join(';')
    })
}

/** 
 * Constrói as legendas baseadas nos filtros aplicados.
 * 
 * @param {Object} json - Objeto contendo o tipo do filtro e o valor a ser exibido.
 * @param {number} json.type - O tipo de legenda a ser construída (1 = 'period', 2 = 'season', 3 = 'origin').
 * @param {string} json.value - O valor da legenda (por exemplo, climas selecionados separados por ponto e vírgula).
 * @returns {void} - Não retorna nenhum valor.
 */
function buildLegends(json) {
    const card = document.createElement('div');
    card.classList.add('card-legend-filter')

    card.textContent = json.value;

    switch (json.type) {
        case (1):
            card.classList.add('period')
            filters[0] = card;
            break

        case (2):
            card.classList.add('season')
            filters[1] = card;
            break

        case (3):
            card.classList.add('origin')
            filters[2] = card
            break
    }

    

    showLegends(filters)
}

/**
 * Adiciona o card da legenda na área de exibição de legendas.
 * 
 * @param {HTMLElement[]} cards - lista de elementos de card que será adicionado à área de legendas.
 * @returns {void} - Não retorna nenhum valor.
 */
function showLegends(cards) {
    const areaShow = document.querySelector('.area-legend-filter');
    areaShow.innerHTML = '';

    cards.forEach(card =>{
        areaShow.appendChild(card)
    })

}
