import React, { useContext, useState, useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { WishListContext } from '../../Context/WishListContext';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';

const WishList = () => {
  const { getWishItem, deleteWishItem } = useContext(WishListContext);
  const { addToCart, setcount } = useContext(CartContext);

  const [wishItems, setWishItems] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchWishItems() {
    try {
      const { data } = await getWishItem();
      setWishItems(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching wishlist items:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWishItems();
  }, []); 

  async function postToCart(id) {
    try {
      const { data } = await addToCart(id);
      if (data.status === 'success') {
        toast.success(data.message, { duration: 2000 });
        setcount(data.numOfCartItems);
      } else {
        toast.error(data.message, { duration: 2000 });
      }
    } catch (error) {
      toast.error('Failed to add product to cart', { duration: 2000 });
      console.error('Error adding product to cart:', error);
    }
  }

  async function deleteWish(id) {
    try {
      const { data } = await deleteWishItem(id);
      if (data.status === 'success') {
        toast.success(data.message, { duration: 2000 });
        fetchWishItems(); 
      } else {
        toast.error(data.message, { duration: 2000 });
      }
    } catch (error) {
      console.error('Error deleting wishlist item:', error);
      toast.error('Failed to delete item from wishlist', { duration: 2000 });
    }
  }

  return (
    <>
      {loading ? (
        <div className='loading'>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color='#4fa94d'
            ariaLabel='ball-triangle-loading'
            wrapperStyle={{}}
            wrapperClass='text-main'
            visible={true}
          />
        </div>
      ) : (
        <div className='bg-light p-5 mt-2 w-90 mx-auto mt-5 mb-5'>
          <h2 className='fw-bolder'>Shop wishlist</h2>
          {wishItems.data.map((product, index) => (
            <div className='row border-3 border-bottom align-items-center' key={index}>
              <div className='col-lg-2 m-2'>
                <img src={product.imageCover} alt='' className='w-100' />
              </div>
              <div className='col-md-7'>
                <div className='item'>
                  <h3 className='h5 fw-bold'>{product.title.split(' ').splice(0, 3).join(' ')}</h3>
                  <p className='text-main fw-bold'>{product.price}EGP</p>
                  <button className='btn' onClick={() => deleteWish(product._id)}>
                    <i className='fas fa-trash-can text-danger'></i> Remove
                  </button>
                </div>
              </div>
              <div className='col-md-2'>
                <button className='btn bg-main p-2 text-white fs-5' onClick={() => postToCart(product._id)}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default WishList;
