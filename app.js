let count = 0;
let total = 0;
document.querySelectorAll('.add').forEach(btn => {
btn.addEventListener('click', () => {
const dish = btn.closest('.dish');
count += 1;
total += Number(dish.dataset.price);
document.getElementById('count').textContent = count;
document.getElementById('total').textContent = total;
});
});
document.getElementById('toCheckout').addEventListener('click', () => {
if (count === 0) return;
document.getElementById('checkout').style.display = 'block';
});
document.getElementById('pay').addEventListener('click', () => {
// имитация успешного ответа платёжной системы
const orderId = 'ORD-' + Date.now();
document.getElementById('checkout').style.display = 'none';
document.getElementById('success').style.display = 'block';
document.getElementById('orderId').textContent = orderId;
});