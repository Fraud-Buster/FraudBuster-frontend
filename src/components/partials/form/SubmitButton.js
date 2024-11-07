const SubmitButton = ({ children }) => (
    <button
      type="submit"
      className="mt-4 px-6 py-3 bg-red-600 rounded-md hover:bg-red-500 transition-transform transform duration-300 ease-in-out hover:scale-105 text-white"
    >
      {children}
    </button>
  );

  export default SubmitButton;