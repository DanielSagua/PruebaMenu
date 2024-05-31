document.addEventListener('DOMContentLoaded', function() {
    const menuItems = {
        entradas: [
            { name: 'Entrada 1', price: 5.00, img: 'assets/img/entrada.jpg' },
            { name: 'Entrada 2', price: 6.00, img: 'assets/img/entrada.jpg' },
            { name: 'Entrada 3', price: 8.00, img: 'assets/img/entrada.jpg' }
        ],
        fondos: [
            { name: 'Fondo 1', price: 10.00, img: 'assets/img/fondo.jpg' },
            { name: 'Fondo 2', price: 12.00, img: 'assets/img/fondo.jpg' },
            { name: 'Fondo 3', price: 15.00, img: 'assets/img/fondo.jpg' }
        ],
        ensaladas: [
            { name: 'Ensalada 1', price: 7.00, img: 'assets/img/ensalada.jpg' },
            { name: 'Ensalada 2', price: 8.00, img: 'assets/img/ensalada.jpg' },
            { name: 'Ensalada 3', price: 12.00, img: 'assets/img/ensalada.jpg' }
        ],
        bebidas: [
            { name: 'Bebida 1', price: 2.00, img: 'assets/img/bebida.jpg' },
            { name: 'Bebida 2', price: 3.00, img: 'assets/img/bebida.jpg' },
            { name: 'Bebida 3', price: 5.00, img: 'assets/img/bebida.jpg' }
        ]
    };

    const menuItemsContainer = document.getElementById('menu-items');
    const orderItems = document.getElementById('order-items');
    const totalPriceInput = document.getElementById('total-price');
    const submitOrderButton = document.getElementById('submit-order');
    let totalPrice = 0;

    function renderMenuItems(category) {
        menuItemsContainer.innerHTML = '';
        menuItems[category].forEach(item => {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-4';
            col.innerHTML = `
                <div class="card mb-4">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">Precio: $${item.price.toFixed(2)}</p>
                        <button class="btn btn-primary add-to-order" data-name="${item.name}" data-price="${item.price}">Agregar</button>
                    </div>
                </div>
            `;
            menuItemsContainer.appendChild(col);
        });

        document.querySelectorAll('.add-to-order').forEach(button => {
            button.addEventListener('click', function() {
                const itemName = this.getAttribute('data-name');
                const itemPrice = parseFloat(this.getAttribute('data-price'));

                const listItem = document.createElement('li');
                listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
                listItem.textContent = itemName;

                const priceSpan = document.createElement('span');
                priceSpan.className = 'badge badge-primary badge-pill';
                priceSpan.textContent = `$${itemPrice.toFixed(2)}`;
                listItem.appendChild(priceSpan);

                orderItems.appendChild(listItem);

                totalPrice += itemPrice;
                totalPriceInput.value = `$${totalPrice.toFixed(2)}`;
            });
        });
    }

    document.querySelectorAll('.menu-category-btn').forEach(button => {
        button.addEventListener('click', function() {
            renderMenuItems(this.getAttribute('data-category'));
        });
    });

    submitOrderButton.addEventListener('click', function() {
        alert('Pedido enviado!');
        orderItems.innerHTML = '';
        totalPriceInput.value = '';
        totalPrice = 0;
    });
});
