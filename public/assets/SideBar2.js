const tabs = document.querySelectorAll('.folder-tab-container');

function removeActiveClasses() {
    tabs.forEach(tab => tab.classList.remove('active'));
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        removeActiveClasses();
        tab.classList.add('active');
    });
});
