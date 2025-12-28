import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { Link } from 'react-router-dom';

export function CartSlideout() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, total } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slideout Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-navy-deep border-l border-white/10 z-50 animate-fade-in-right shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-cyan" />
              <h2 className="font-heading text-xl font-bold">Your Cart</h2>
              <span className="text-muted-foreground">({items.length})</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Discover our premium peptide solutions
                </p>
                <Button variant="hero" onClick={() => setIsCartOpen(false)} asChild>
                  <Link to="/shop">Shop Now</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 glass-card p-4">
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-semibold truncate">{item.name}</h4>
                      {item.dosage && (
                        <p className="text-sm text-muted-foreground">{item.dosage}</p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-mono w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="font-mono font-semibold text-cyan">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-heading font-bold text-xl">${total().toFixed(2)}</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Shipping & taxes calculated at checkout
              </p>
              <Button variant="hero" className="w-full" size="lg" asChild>
                <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
                  Checkout
                </Link>
              </Button>
              <Button variant="outline" className="w-full" onClick={() => setIsCartOpen(false)} asChild>
                <Link to="/cart">View Cart</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
