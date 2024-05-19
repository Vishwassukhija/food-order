import React, { useContext, useState } from "react";
import useCart from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";
const CartPage = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  const CalculatePrice = (item) => {
    return item.price * item.quantity;
  };
  const handleIncrease = (item) => {
    fetch(`http://localhost:4000/carts/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: item.quantity + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const updatedCart = cartItems.map((cartItem) => {
            if (cartItem._id === item._id) {
              return {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              };
            }
            return cartItem;
          });
          setCartItems(updatedCart);
          setTimeout(() => {
            refetch();
          }, 1000);
        } else {
          console.error("Error updating item quantity on the server");
        }
      })
      .catch((error) => {
        console.error("Error updating item quantity:", error);
      });

    refetch();
  };
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      // Decrease quantity
      fetch(`http://localhost:4000/carts/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            const updatedCart = cartItems.map((cartItem) => {
              if (cartItem._id === item._id) {
                return {
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
                };
              }
              return cartItem;
            });
            setCartItems(updatedCart);
            setTimeout(() => {
              refetch();
            }, 1000);
          } else {
            console.error("Error updating item quantity on the server");
          }
        })
        .catch((error) => {
          console.error("Error updating item quantity:", error);
        });
    } else {
      // Delete item
      fetch(`http://localhost:4000/carts/${item._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const updatedCart = cartItems.filter(
              (cartItem) => cartItem._id !== item._id
            );
            setCartItems(updatedCart);
            setTimeout(() => {
              refetch();
            }, 1000);
          } else {
            console.error("Error deleting item from the server");
          }
        })
        .catch((error) => {
          console.error("Error deleting item:", error);
        });
    }
  };

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // Corrected this line
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
            setTimeout(() => {
              refetch();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the item.",
              icon: "error",
            });
          });
      }
    });
  };
  const cartSubTotal = cart.reduce((total, item) => {
    return total + CalculatePrice(item);
  }, 0);

  return (
    <div className="section-container">
      <div className="mx-auto xl:px-20 sm:px-18 sm:py-4 ">
        <div className=" py-24 flex flex-col justify-center items-center gap-8 ">
          <div className=" space-y-7 px-4">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug ">
              <span className="text-[#afbdb5c5] font-semibol sm:font-normal">
                Items Added In The{" "}
              </span>{" "}
              <span className="text-[#58fc05c1]">CART</span>
            </h2>
          </div>
        </div>
      </div>

      {/* table of content */}

      <div className=" my-0">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-[#54bd20] bg-[#20222110]">
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Dish Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-medium">{item.name}</td>
                  <td>
                    <button
                      className="btn btn-xs px-2"
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      className=" w-8 mx-1 text-center appearance-none overflow-hidden"
                    />
                    <button
                      className="btn btn-xs px-2"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                  </td>
                  <td>${CalculatePrice(item).toFixed(2)}</td>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs text-rose-600"
                      onClick={() => handleDelete(item)}
                    >
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row justify-between items-center px-4  md:px-16">
        <div className="md:w-1/2 space-y-5 mr-64">
          <h3 className="font-extrabold text-[#65d44f]">Customer Details</h3>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>User ID: {user.uid}</p>
        </div>
        <div className="my-12 md:w-1/2 space-y-9 text-center md:text-left">
          <h3 className="font-extrabold text-[#65d44f]">Shopping Details</h3>
          <p>Total Items: {cart.length}</p>
          <p>Total Price: ${cartSubTotal.toFixed(2)}</p>
          <button className="btn bg-[#55e53fb6] text-white hover:bg-[#390]">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
