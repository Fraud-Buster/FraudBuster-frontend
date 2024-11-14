const SubmitButton = ({ children, disabled = false }) => (
  <button
    type="submit"
    disabled={disabled}
    className={`mt-2 px-4 py-2 rounded-md text-white transition-transform transform duration-300 ease-in-out ${
      disabled
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-[#CB122A] hover:bg-[#CB122A] hover:scale-105 focus:ring-4 focus:ring-[#CB122A] focus:outline-none"
    }`}
  >
    {children}
  </button>
);

export default SubmitButton;