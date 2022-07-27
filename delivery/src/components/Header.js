import React from "react";

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>
            <u>
              <i>Food Ordering Portal</i>
            </u>
          </h1>
        </a>
        <div
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Pizza/Burger</strong>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Hello ,You can Order your food from here..
          </div>
        </div>
      </div>
      <div>
        <a href="#/cart">
          Cart{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
      </div>
    </header>
  );
}
