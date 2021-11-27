type CartItem = { nome: string; price: number };
type OrderStatus = 'Open' | 'Closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'Open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  //o + antes do this converte o resultado para number
  total(): number {
    return +this._items.reduce((total, item) => total + item.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho esta vazio');
      return;
    }
    this._orderStatus = 'Closed';
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido`);
    this.saveOrder();
    this.clearCart();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log('Mensagem enviada: ', message);
  }

  saveOrder(): void {
    console.log('Pedido salvo');
  }

  clearCart(): void {
    this._items.length = 0;
    console.log('Carrinho limpinho');
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ nome: 'Lapis', price: 1.99 });
shoppingCart.addItem({ nome: 'Caneta', price: 40.99 });
shoppingCart.addItem({ nome: 'Caderno', price: 3.99 });

//shoppingCart.clearCart();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);

shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
