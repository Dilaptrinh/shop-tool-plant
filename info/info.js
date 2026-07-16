(function () {
    function updateBadge() {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const badge = document.getElementById('cartBadge');
        if (badge) badge.textContent = cart.reduce((s, i) => s + i.quantity, 0);
    }
    function updateUserMenu() {
        const userMenu = document.getElementById('userMenu');
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) userMenu.innerHTML = '<a class="nav-link" href="#" onclick="localStorage.removeItem(\'currentUser\'); location.reload();">' + user.name + ' (Dang Xuat)</a>';
    }
    updateBadge();
    updateUserMenu();
})();
