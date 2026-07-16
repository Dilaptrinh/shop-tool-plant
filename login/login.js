(function () {
    function updateBadge() {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const badge = document.getElementById('cartBadge');
        if (badge) badge.textContent = cart.reduce((s, i) => s + i.quantity, 0);
    }

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const alertDiv = document.getElementById('alertMessage');
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            alertDiv.innerHTML = '<div class="alert alert-success">Dang nhap thanh cong! Dang chuyen huong...</div>';
            setTimeout(() => { window.location.href = '../home/home.html'; }, 1000);
        } else {
            alertDiv.innerHTML = '<div class="alert alert-danger">Email hoac mat khau khong chinh xac!</div>';
        }
    });

    updateBadge();
})();
