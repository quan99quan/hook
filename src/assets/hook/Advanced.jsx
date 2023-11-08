import React, { useState, useEffect } from "react";

export default function Advanced() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") ?? "[]")
  );
  const [load, setLoad] = useState(false);

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products") ?? "[]")
  );

  useEffect(() => {
    if (!localStorage.getItem("products")) {
      localStorage.setItem(
        "products",
        JSON.stringify([
          {
            id: Date.now() * Math.random(),
            img: "/src/assets/img/full_1655713375_3396_68b669810f4f3def63db420e603c9326.jpg",
            title: "Air Pods Pro",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid, nemo est aliquam vitae fugiat quae inventore ex dicta. Nostrum.",
            price: 12,
          },
          {
            id: Date.now() * Math.random(),
            img: "/src/assets/img/mac.jpg",
            title: "Mac",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid, nemo est aliquam vitae fugiat quae inventore ex dicta. Nostrum.",
            price: 12,
          },
          {
            id: Date.now() * Math.random(),
            img: "/src/assets/img/iphone.jpg",
            title: "Iphone",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid, nemo est aliquam vitae fugiat quae inventore ex dicta. Nostrum.",
            price: 12,
          },
          {
            id: Date.now() * Math.random(),
            img: "/src/assets/img/samsung.jpg",
            title: "Samsung",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid, nemo est aliquam vitae fugiat quae inventore ex dicta. Nostrum.",
            price: 12,
          },
        ])
      );
    }
  }, []);
  function getProductInfor(productId) {
    return JSON.parse(localStorage.getItem("products") ?? "[]").find(
      (product) => product.id == productId
    );
  }

  useEffect(() => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  }, [load]);

  return (
    <>
      <div className="body">
        <form className="body--left">
          <h2>List Products</h2>
          {products.map((item) => (
            <div key={item.id} className="products">
              <div>
                <img src={item.img} alt="" className="img" />
              </div>
              <div>
                <div className="title">{item.title}</div>
                <div className="description">{item.description}</div>
              </div>
              <div>
                <input
                  type="text"
                  className="quantity"
                  name="quantity"
                  min={1}
                  defaultValue={1}
                />
                <button className="price">{item.price} USD</button>
                <button
                  className="buy"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("cart");
                    let cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
                    let cartExist = cart.find(
                      (itemFind) => itemFind.productId == item.id
                    );

                    if (cartExist) {
                      cartExist.quantity += Number(
                        e.target.parentNode.querySelector(".quantity").value
                      );
                      localStorage.setItem("cart", JSON.stringify(cart));
                    } else {
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([
                          ...cart,
                          {
                            id: Date.now() * Math.random(),
                            productId: item.id,
                            quantity: Number(
                              e.target.parentNode.querySelector(".quantity")
                                .value
                            ),
                          },
                        ])
                      );
                    }
                    setLoad(!load);
                  }}
                >
                  Mua
                </button>
              </div>
            </div>
          ))}
        </form>
        <div className="body--right">
          <h3>Your Cart</h3>
          <div>
            <table >
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr> 
             
              {cart.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td> {getProductInfor(item.productId)?.title}</td>
                  <td>
                    <img
                      src={getProductInfor(item.productId)?.img}
                      alt=""
                      className="img"
                      style={{ width: "50px" }}
                    />
                  </td>
                  <td> {getProductInfor(item.productId)?.price} USD </td>
                  <td> <input type="number"  min={1} defaultValue={item.quantity} onChange={(e) => {
                   
                                                let newCart = JSON.parse(localStorage.getItem('cart') ?? "[]").map(itemMap => {
                                                    if(itemMap.productId == item.productId) {
                                                        return {
                                                            ...itemMap,
                                                            quantity: Number(e.target.value)
                                                        }
                                                    }
                                                    return itemMap
                                                });

                                                setCart(newCart)
                                                localStorage.setItem('cart', JSON.stringify(newCart));

                                            }}/>
                                            </td>
                  <td>
                    {" "}
                    {getProductInfor(item.productId)?.price * item.quantity} USD
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        let newCart = JSON.parse(
                          localStorage.getItem("cart") ?? "[]"
                        ).filter(
                          (itemFilter) =>
                            itemFilter.productId !== item.productId
                        );
                        setCart(newCart);
                        localStorage.setItem("cart", JSON.stringify(newCart));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
