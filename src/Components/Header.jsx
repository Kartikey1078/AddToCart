import React, { useContext, useState } from 'react';
import { Menu, X } from 'lucide-react';
import cart from '../images/cart-plus-solid.svg';
import { MyContext } from '../MyContext';
import trash from '../images/trash-solid.svg'
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartAmount,clearCart } = useContext(MyContext);
  const [bag, setBag] = useState(false);

  function handleBag() {
    setBag(!bag);
  }
  

  return (
    <header className='w-full px-6 py-4 bg-white shadow-md relative'>
      <div className='flex items-center justify-between max-w-6xl mx-auto'>
        <div className='text-xl font-bold'>SNEAKERS</div>

        <nav className='hidden md:flex space-x-6'>
          <a href="#" className='text-gray-600 hover:text-black'>Collections</a>
          <a href="#" className='text-gray-600 hover:text-black'>Men</a>
          <a href="#" className='text-gray-600 hover:text-black'>Women</a>
          <a href="#" className='text-gray-600 hover:text-black'>About</a>
          <a href="#" className='text-gray-600 hover:text-black'>Contact</a>
        </nav>

        <div className='flex items-center space-x-4 relative'>
          {/* Cart Icon */}
          <img src={cart} alt="cart" className='w-6 h-6 cursor-pointer' onClick={handleBag} />

          {/* Cart Popup */}
          {bag && (
            <div className='absolute top-10 right-0 bg-white shadow-lg rounded-lg p-4 w-64 z-20'>
              <h2 className='text-lg font-semibold mb-2'>Your Cart</h2>
              {cartAmount > 0 ? (
                <p className='flex justify-between'>Cart Amount: ${cartAmount} <img onClick={clearCart} src={trash} width={15} alt="trash" /></p>
              ) : (
                <p className='text-gray-500'>Your cart is empty.</p>
              )}
              <button
                className='mt-3 px-4 py-2 bg-black text-white rounded-md w-full'
                onClick={() => setBag(false)}
              >
                Close
              </button>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className='md:hidden flex flex-col items-center space-y-4 mt-4 bg-white shadow-md py-4 absolute top-full left-0 w-full z-10'>
          <a href="#" className='text-gray-600 hover:text-black'>Collections</a>
          <a href="#" className='text-gray-600 hover:text-black'>Men</a>
          <a href="#" className='text-gray-600 hover:text-black'>Women</a>
          <a href="#" className='text-gray-600 hover:text-black'>About</a>
          <a href="#" className='text-gray-600 hover:text-black'>Contact</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
