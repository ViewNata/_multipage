import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const initPage = "home";

function Navbar({ products, carts, setToken , role }) {
  const [tab, setTab] = useState('');

  useEffect(() => {
    setTab(initPage);
  }, []);

  const homeRef = useRef();
  const calculatorRef = useRef();
  const animationRef = useRef();
  const componentsRef = useRef();
  const todoRef = useRef();
  const productsRef = useRef();
  const cartsRef = useRef();

  return (

    <div className="navbar-container"> 

    {/* {role === 'user' &&   (   */}
      <Link to={'/home'}>
        <button
          className={
            "btn " + (tab === "home" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("home")}
          ref={homeRef}
        >
          Home
        </button>
      </Link>
      {/* )} */}


      {/* {role === 'admin' && ( */}
        
      <Link to={"/calculator"}>
        <button
        style={{ boxShadow: '0 0 0.25rem grey' }}
          className={
            "btn " + (tab === "calculator" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("calculator")}
          ref={calculatorRef}
        >
          Calculator
        </button>
      </Link>
      {/* )} */}

      <Link to={"/animation"}>
        <button
        style={{ boxShadow: '0 0 0.25rem grey' }}
          className={
            "btn " + (tab === "animation" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("animation")}
          ref={animationRef}
        >
          Animation
        </button>
      </Link>

      <Link to={"/components"}>
        <button
        style={{ boxShadow: '0 0 0.25rem grey' }}
          className={
            "btn " + (tab === "components" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("components")}
          ref={componentsRef}
          // disabled={role === 'admin' }
        >
          Components
        </button>
      </Link>

      <Link to={"/todo"}>
        <button
          style={{ boxShadow: '0 0 0.25rem grey' }}
          className={
            "btn " + (tab === "todo" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("todo")}
          ref={todoRef}
        >
          Todo
        </button>
      </Link>

      <Link to={"/products"}>
        <button
          style={{ boxShadow: '0 0 0.25rem grey', width:'8rem' }}
          className={
            `btn ${tab === "products" ? "btn-primary" : "btn-outline-primary"} products-button`}
          onClick={() => setTab("products")}
          ref={productsRef}
        >
          Products ({products.length})
        </button>
      </Link>

      <Link to={"/carts"}>
        <button
          style={{ boxShadow: '0 0 0.25rem grey', position: 'relative' }}
          className={
            " btn " + (tab === "carts" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("carts")}
          ref={cartsRef}
        >
          Carts 
          {carts.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length < 10 ? carts.length : "9+"}
              <span className="visually-hidden">unread messages</span>
            </span>
          )}
          
        </button>
      </Link>
      
      <button
        className="btn btn-outline-danger logout-button"
        onClick={() => setToken("")}
      >
        Logout
      </button>

      

    </div>
  );
}

export default Navbar;
