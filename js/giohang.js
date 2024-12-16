// Lấy các phần tử
const openCartBtn = document.getElementById('openCart');
const closeCartBtn = document.getElementById('closeCart');
const cart = document.getElementById('cart');

// Mở giỏ hàng
openCartBtn.addEventListener('click', () => {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    cart.style.right = '0'; // Hiển thị giỏ hàng
});

// Đóng giỏ hàng
closeCartBtn.addEventListener('click', () => {
    cart.style.right = '-100%'; // Ẩn giỏ hàng
});
