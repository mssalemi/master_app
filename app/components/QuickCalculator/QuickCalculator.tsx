import React from "react";

export function QuickCalculator() {
  return (
    <div className="card shadow-lg compact side bg-base-200">
      <div className="card-body">
        <QuickCalculatorForm />
      </div>
    </div>
  );
}

export function QuickCalculatorForm() {
  return (
    <div className="">
      <h2 className="card-title pb-2">One Rep Max Calculator</h2>
      <div className="md:grid md:grid-cols-[3fr_1fr] gap-4">
        <div>
          <Form />
        </div>
        <div>
          <div className="stats shadow flex justify-center">
            <div className="stat place-items-center">
              <div className="stat-title">1RM</div>
              <div className="stat-value"> - </div>
              <div className="stat-desc">Enter your reps and weight!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <form>
      <label className="input input-bordered flex items-center gap-2">
        Weight
        <input type="text" className="grow" placeholder="225" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Reps Completed
        <input type="text" className="grow" placeholder="5" />
      </label>
      <div className="flex gap-4">
        <select className="select">
          <option disabled selected>
            Pounds (lbs)
          </option>
          <option>Kilograms (kgs)</option>
        </select>
      </div>
      <button className="btn btn-block btn-primary btn-sm">
        Calculate Max
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg> */}
      </button>
    </form>
  );
}
