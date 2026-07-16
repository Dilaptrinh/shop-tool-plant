(function () {
    function updateBadge() {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const badge = document.getElementById('cartBadge');
        if (badge) badge.textContent = cart.reduce((s, i) => s + i.quantity, 0);
    }

    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const alertDiv = document.getElementById('alertMessage');

        if (password !== confirmPassword) {
            alertDiv.innerHTML = '<div class="alert alert-danger">Mat khau xac nhan khong khop!</div>';
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.some(u => u.email === email)) {
            alertDiv.innerHTML = '<div class="alert alert-danger">Email nay da duoc dang ky!</div>';
            return;
        }

        const newUser = { id: Date.now(), name, email, phone, password, createdAt: new Date().toLocaleString('vi-VN') };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        alertDiv.innerHTML = '<div class="alert alert-success">Dang ky thanh cong! Dang chuyen huong...</div>';
        setTimeout(() => { window.location.href = '../home/home.html'; }, 1500);
    });

    updateBadge();
})();
