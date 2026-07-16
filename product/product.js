(function () {
    const categories = ['all', ...new Set(appData.products.map(p => p.category))];
    let filteredProducts = appData.products;
    let currentFilter = 'all';

    function updateCartBadge() {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const badge = document.getElementById('cartBadge');
        if (badge) badge.textContent = cart.reduce((s, i) => s + i.quantity, 0);
    }

    function renderFilters() {
        const container = document.getElementById('filterButtons');
        container.innerHTML = categories.map(cat => `
            <button class="btn ${currentFilter === cat ? 'btn-primary-custom' : 'btn-outline-custom'} btn-sm filter-btn" data-category="${cat}">
                ${cat === 'all' ? 'Tat Ca' : cat}
            </button>
        `).join('');

        container.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                currentFilter = this.dataset.category;
                filterProducts(currentFilter);
            });
        });
    }

    function renderProducts(products) {
        const container = document.getElementById('productsContainer');
        const count = document.getElementById('productCount');
        if (count) count.textContent = products.length;
        container.innerHTML = products.map(product => `
            <div class="product-card">
                <div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy"></div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h6 class="product-name">${product.name}</h6>
                    <p class="product-description">${product.description}</p>
                    <p class="product-price">${product.price.toLocaleString('vi-VN')} &#8363;</p>
                    <div class="product-actions">
                        <button class="btn btn-primary-custom btn-sm add-cart-btn" data-id="${product.id}">Them Vao Gio</button>
                        <button class="btn btn-outline-custom btn-sm view-btn" data-id="${product.id}">Chi Tiet</button>
                    </div>
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.add-cart-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                addToCart(parseInt(this.dataset.id));
            });
        });

        container.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = parseInt(this.dataset.id);
                const p = appData.products.find(x => x.id === id);
                if (p) viewProduct(p);
            });
        });
    }

    function filterProducts(category) {
        filteredProducts = category === 'all'
            ? appData.products
            : appData.products.filter(p => p.category === category);
        renderFilters();
        renderProducts(filteredProducts);
    }

    function addToCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const product = appData.products.find(p => p.id === productId);
        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartBadge();
        showToast('Da them vao gio hang!');
    }

    function viewProduct(product) {
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;';
        overlay.innerHTML = `
            <div style="background:#fff;border-radius:16px;max-width:700px;width:100%;max-height:90vh;overflow-y:auto;">
                <div style="display:flex;justify-content:space-between;align-items:center;padding:20px 24px 0;">
                    <div class="product-category">${product.category}</div>
                    <button class="btn-close" id="closeModalBtn"></button>
                </div>
                <div style="padding:16px 24px 24px;">
                    <div style="background:#e2e8df;border-radius:12px;overflow:hidden;margin-bottom:20px;max-height:250px;"><img src="${product.image}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;display:block;"></div>
                    <h3 style="font-weight:700;color:var(--primary-dark);margin-bottom:8px;">${product.name}</h3>
                    <p style="color:#666;font-size:.95rem;line-height:1.6;margin-bottom:16px;">${product.description}</p>
                    <div style="background:#f0f8f0;padding:16px 20px;border-radius:8px;margin-bottom:16px;">
                        <p style="margin:0;font-size:.8rem;color:#999;">GIA SAN PHAM</p>
                        <p style="font-size:2rem;font-weight:900;color:#f5b342;margin:0;">${product.price.toLocaleString('vi-VN')} &#8363;</p>
                    </div>
                    <p style="color:#666;font-size:.85rem;margin-bottom:16px;">
                        <strong>Ma SP:</strong> GC-${String(product.id).padStart(5, '0')}<br>
                        <strong>Tinh Trang:</strong> <span style="color:green;">Con Hang</span>
                    </p>
                    <button class="btn btn-primary-custom w-100 py-2" id="addCartModalBtn" data-id="${product.id}">Them Vao Gio Hang</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        document.getElementById('closeModalBtn').addEventListener('click', () => overlay.remove());
        overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
        document.getElementById('addCartModalBtn').addEventListener('click', function () {
            addToCart(parseInt(this.dataset.id));
        });
    }

    function showToast(msg) {
        const t = document.createElement('div');
        t.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#1a3a0a;color:#fff;padding:12px 24px;border-radius:8px;font-weight:600;z-index:99999;';
        t.textContent = msg;
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 2000);
    }

    function updateUserMenu() {
        const userMenu = document.getElementById('userMenu');
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            userMenu.innerHTML = '<a class="nav-link" href="#" onclick="localStorage.removeItem(\'currentUser\'); location.reload();">' + user.name + ' (Dang Xuat)</a>';
        }
    }

    updateUserMenu();
    updateCartBadge();
    renderProducts(filteredProducts);
    renderFilters();
})();
