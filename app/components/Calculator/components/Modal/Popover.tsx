export const Popover = () => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box flex flex-col justify-start p-4">
        <h3 className="font-bold text-lg">
          Select a Different 1 Rep Max Formula
        </h3>
        <p className="text-sm mt-2 mb-4">
          Different 1 rep max formulas can yield varying results based on
          factors like the number of reps you can perform, your muscle
          endurance, and the type of exercise. Choose the formula that best fits
          your training style and accuracy needs.
        </p>
        <form>
          <label
            htmlFor="formula-select"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Choose a formula:
          </label>
          <select
            id="formula-select"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="epley">Epley</option>
            <option value="brzycki">Brzycki</option>
            <option value="landercalder">Lander/Calder</option>
            <option value="lombardi">Lombardi</option>
            <option value="mayhew">Moshid</option>
            <option value="oconner">AI</option>
          </select>
          <div className="modal-action mt-4">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </form>
      </div>
    </dialog>
  );
};
