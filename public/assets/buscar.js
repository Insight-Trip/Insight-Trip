document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#dateRange", {
        mode: "range",
        dateFormat: "d/m/Y",
       locale: {
           firstDayOfWeek: 0,
           weekdays: {
            shorthand: ['Dom', 'Seg' ,'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            longhand: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado']
           },
           rangeSeparator: ' até ',
           weekAbbreviation: 'Sem',
           scrollTitle: 'Role para aumentar',
           closeText: 'Fechar'
       }

    });
});