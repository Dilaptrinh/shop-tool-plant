(function () {
    function updateBadge() {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const badge = document.getElementById('cartBadge');
        if (badge) badge.textContent = cart.reduce((s, i) => s + i.quantity, 0);
    }

    function updateUserMenu() {
        const userMenu = document.getElementById('userMenu');
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            userMenu.innerHTML = '<a class="nav-link" href="#" onclick="localStorage.removeItem(\'currentUser\'); location.reload();">' + user.name + ' (Dang Xuat)</a>';
        }
    }

    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        const alertDiv = document.getElementById('alertMessage');

        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        contacts.push({ id: Date.now(), name, email, phone, subject, message, createdAt: new Date().toLocaleString('vi-VN') });
        localStorage.setItem('contacts', JSON.stringify(contacts));

        alertDiv.innerHTML = '<div class="alert alert-success">Cam on ban! Chung toi se lien he lai som nhat!</div>';
        this.reset();
        setTimeout(() => { alertDiv.innerHTML = ''; }, 3000);
    });

    updateBadge();
    updateUserMenu();
})();
