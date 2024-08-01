function ShoppingCart() {
	const products: { product: string; price: number }[] = [];

	const api = { add, total };

	function add(product: string, price: number) {
		products.push({ product, price });
		return api;
	}

	function total() {
		return products.reduce((res, product) => (res += product.price), 0);
	}

	return api;
}

const cart = ShoppingCart();
const total = cart
	.add("t-shirt", 50)
	.add("backpack", 120)
	.add("socks", 7)
	.total();

console.log(total); // 177
