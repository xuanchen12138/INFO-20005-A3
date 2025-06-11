document.addEventListener('click', function (e) {
    if (e.target.classList.contains('flags')) {
        document.getElementById('hidden-menus').classList.remove('hidden');
    }

    if (e.target.classList.contains('close')) {
        document.getElementById('hidden-menus').classList.add('hidden');
    }
});