import "./App.css";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";


import Rating from "@mui/material/Rating";


function App() {
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [value3, setValue3] = React.useState(0);
  const [value4, setValue4] = React.useState(0);
  const [value5, setValue5] = React.useState(0);
  const [value6, setValue6] = React.useState(0);
  const [value7, setValue7] = React.useState(0);
  const [value8, setValue8] = React.useState(0);

  let [cartval, setCartval] = useState(0);

  let [toggle1, setToggle1] = useState(false);
  let [toggle2, setToggle2] = useState(false);
  let [toggle3, setToggle3] = useState(false);
  let [toggle4, setToggle4] = useState(false);
  let [toggle5, setToggle5] = useState(false);
  let [toggle6, setToggle6] = useState(false);
  let [toggle7, setToggle7] = useState(false);
  let [toggle8, setToggle8] = useState(false);

  return (
    <>
      <Navigation data={cartval} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                  <Rating
                    name="simple-controlled"
                    value={value1}
                    onChange={(event, newValue) => {
                      setValue1(newValue);
                    }}
                  />
                  </div>
                  <div className="text-center">
                    <h5 className="fw-bolder">Product No:1</h5>₹ 50,000
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      disabled={toggle1}
                      onClick={() => {
                        setCartval(cartval + 1);
                        setToggle1((previous) => !previous);
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-outline-dark mt-auto" 
                      disabled={!toggle1}                     
                      onClick={() => {
                        setCartval(cartval - 1);
                        setToggle1((previous) => !previous);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                  <Rating
                    name="simple-controlled"
                    value={value2}
                    onChange={(event, newValue) => {
                      setValue2(newValue);
                    }}
                  />
                  </div>
                  <div className="text-center">
                    <h5 className="fw-bolder">Product No:2</h5>₹ 4,000
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      disabled={toggle2}
                      onClick={() => {
                        setCartval(cartval + 1);
                        setToggle2((previous) => !previous);
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-outline-dark mt-auto" 
                      disabled={!toggle2}                     
                      onClick={() => {
                        setCartval(cartval - 1);
                        setToggle2((previous) => !previous);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                  <Rating
                    name="simple-controlled"
                    value={value3}
                    onChange={(event, newValue) => {
                      setValue3(newValue);
                    }}
                  />
                  </div>
                  <div className="text-center">
                    <h5 className="fw-bolder">Product No:3</h5>₹ 8,000
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      disabled={toggle3}
                      onClick={() => {
                        setCartval(cartval + 1);
                        setToggle3((previous) => !previous);
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-outline-dark mt-auto" 
                      disabled={!toggle3}                     
                      onClick={() => {
                        setCartval(cartval - 1);
                        setToggle3((previous) => !previous);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                  <Rating
                    name="simple-controlled"
                    value={value4}
                    onChange={(event, newValue) => {
                      setValue4(newValue);
                    }}
                  />
                  </div>
                  <div className="text-center">
                    <h5 className="fw-bolder">Product No:4</h5>₹ 30,000
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      disabled={toggle4}
                      onClick={() => {
                        setCartval(cartval + 1);
                        setToggle4((previous) => !previous);
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-outline-dark mt-auto" 
                      disabled={!toggle4}                     
                      onClick={() => {
                        setCartval(cartval - 1);
                        setToggle4((previous) => !previous);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                  <Rating
                    name="simple-controlled"
                    value={value5}
                    onChange={(event, newValue) => {
                      setValue5(newValue);
                    }}
                  />
                  </div>
                  <div className="text-center">
                    <h5 className="fw-bolder">Product No:5</h5>₹ 35,000
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      disabled={toggle5}
                      onClick={() => {
                        setCartval(cartval + 1);
                        setToggle5((previous) => !previous);
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-outline-dark mt-auto" 
                      disabled={!toggle5}                     
                      onClick={() => {
                        setCartval(cartval - 1);
                        setToggle5((previous) => !previous);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                  <Rating
                    name="simple-controlled"
                    value={value6}
                    onChange={(event, newValue) => {
                      setValue6(newValue);
                    }}
                  />
                  </div>
                  <div className="text-center">
                    <h5 className="fw-bolder">Product No:6</h5>₹ 43,000
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      disabled={toggle6}
                      onClick={() => {
                        setCartval(cartval + 1);
                        setToggle6((previous) => !previous);
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-outline-dark mt-auto" 
                      disabled={!toggle6}                     
                      onClick={() => {
                        setCartval(cartval - 1);
                        setToggle6((previous) => !previous);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                  <Rating
                    name="simple-controlled"
                    value={value7}
                    onChange={(event, newValue) => {
                      setValue7(newValue);
                    }}
                  />
                  </div>
                  <div className="text-center">
                    <h5 className="fw-bolder">Product No:7</h5>₹ 90,000
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      disabled={toggle7}
                      onClick={() => {
                        setCartval(cartval + 1);
                        setToggle7((previous) => !previous);
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-outline-dark mt-auto" 
                      disabled={!toggle7}                     
                      onClick={() => {
                        setCartval(cartval - 1);
                        setToggle7((previous) => !previous);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                  <Rating
                    name="simple-controlled"
                    value={value8}
                    onChange={(event, newValue) => {
                      setValue8(newValue);
                    }}
                  />
                  </div>
                  <div className="text-center">
                    <h5 className="fw-bolder">Product No:8</h5>₹ 32,000
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      disabled={toggle8}
                      onClick={() => {
                        setCartval(cartval + 1);
                        setToggle8((previous) => !previous);
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-outline-dark mt-auto" 
                      disabled={!toggle8}                     
                      onClick={() => {
                        setCartval(cartval - 1);
                        setToggle8((previous) => !previous);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
