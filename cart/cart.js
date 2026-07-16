(function () {
    let cart = [];

    function loadCart() {
        cart = JSON.parse(localStorage.getItem('cart') || '[]');
        renderCart();
    }

    function updateBadge() {
        const badge = document.getElementById('cartBadge');
        if (badge) badge.textContent = cart.reduce((s, i) => s + i.quantity, 0);
    }

    function renderCart() {
        const container = document.getElementById('cartContent');
        updateBadge();

        if (!cart.length) {
            container.innerHTML = `
                <div class="text-center py-5">
                    <div style="font-size: 4rem; margin-bottom: 16px;"></div>
                    <p style="font-size: 1.2rem; color: #666;">Giỏ hàng của bạn đang trống</p>
                    <a href="../product/product.html" class="btn btn-primary-custom mt-3">Tiếp Tục Mua Sắm</a>
                </div>
            `;
            return;
        }

        const totalPrice = cart.reduce((s, i) => s + i.price * i.quantity, 0);
        const shippingFee = totalPrice >= 500000 ? 0 : 30000;
        const finalTotal = totalPrice + shippingFee;
        const totalItems = cart.reduce((s, i) => s + i.quantity, 0);

        const cartHTML = `
            <div class="cart-container">
                ${cart.map((item, index) => `
                    <div class="cart-item" data-index="${index}">
                        <div class="cart-item-info" style="flex: 1;">
                            <div class="product-category">${item.category || ''}</div>
                            <h5>${item.name}</h5>
                            <p class="text-muted small mb-1">Đơn giá: ${item.price.toLocaleString('vi-VN')} ₫</p>
                        </div>
                        <div class="text-end">
                            <p class="cart-item-price">${(item.price * item.quantity).toLocaleString('vi-VN')} ₫</p>
                            <div class="d-flex align-items-center justify-content-end gap-2 mt-2">
                                <button class="btn btn-sm btn-outline-secondary qty-btn" data-index="${index}" data-change="-1">−</button>
                                <span class="fw-bold px-2">${item.quantity}</span>
                                <button class="btn btn-sm btn-outline-secondary qty-btn" data-index="${index}" data-change="1">+</button>
                                <button class="btn btn-sm btn-outline-danger remove-btn" data-index="${index}">Xóa</button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="cart-summary">
                <div class="cart-summary-row">
                    <span>Tổng Số Sản Phẩm:</span>
                    <span>${totalItems} sản phẩm</span>
                </div>
                <div class="cart-summary-row">
                    <span>Tổng Tiền Hàng:</span>
                    <span>${totalPrice.toLocaleString('vi-VN')} ₫</span>
                </div>
                <div class="cart-summary-row">
                    <span>Phí Vận Chuyển:</span>
                    <span>${shippingFee === 0 ? 'Mien phi' : shippingFee.toLocaleString('vi-VN') + ' &#8363;'}</span>
                </div>
                <div class="cart-summary-row total">
                    <span>Tổng Thanh Toán:</span>
                    <span>${finalTotal.toLocaleString('vi-VN')} ₫</span>
                </div>
                <button class="btn btn-accent w-100 py-2 mt-3" id="checkoutBtn">Thanh Toán</button>
                <a href="../product/product.html" class="btn btn-outline-custom w-100 py-2 mt-2">← Tiếp Tục Mua Sắm</a>
            </div>
        `;

        container.innerHTML = cartHTML;
        bindCartEvents();
    }

    function bindCartEvents() {
        document.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const index = parseInt(this.dataset.index);
                const change = parseInt(this.dataset.change);
                cart[index].quantity += change;
                if (cart[index].quantity <= 0) {
                    removeItem(index);
                } else {
                    saveCart();
                    renderCart();
                }
            });
        });

        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                removeItem(parseInt(this.dataset.index));
            });
        });

        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', checkout);
        }
    }

    function removeItem(index) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function checkout() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            showToast('Vui long dang nhap de thanh toan!');
            setTimeout(() => { window.location.href = '../login/login.html'; }, 1500);
            return;
        }

        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        const totalPrice = cart.reduce((s, i) => s + i.price * i.quantity, 0);
        const shippingFee = totalPrice >= 500000 ? 0 : 30000;
        const order = {
            id: Date.now(),
            userId: currentUser.id,
            items: [...cart],
            total: totalPrice + shippingFee,
            createdAt: new Date().toLocaleString('vi-VN'),
            status: 'Chờ xác nhận'
        };
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));

        showToast('Dat hang thanh cong! Ma don: ' + order.id);
        cart = [];
        saveCart();
        setTimeout(() => { window.location.href = '../home/home.html'; }, 1500);
    }

    function showToast(msg) {
        const t = document.createElement('div');
        t.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#1a3a0a;color:#fff;padding:12px 24px;border-radius:8px;font-weight:600;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,.2);';
        t.textContent = msg;
        document.body.appendChild(t);
        setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; setTimeout(() => t.remove(), 300); }, 2000);
    }

    function updateUserMenu() {
        const userMenu = document.getElementById('userMenu');
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            userMenu.innerHTML = '<a class="nav-link" href="#" onclick="localStorage.removeItem(\'currentUser\'); location.reload();">' + user.name + ' (Dang Xuat)</a>';
        }
    }

    updateUserMenu();
    loadCart();
})();
