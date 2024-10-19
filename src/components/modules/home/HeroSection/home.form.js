import { useState, useRef } from "react";

const HomeForm = () => {
  const [isReportVisible, setIsReportVisible] = useState(false);
  const [scamType, setScamType] = useState("esewa");
  const [details, setDetails] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
    facebookName: "",
    facebookUrl: "",
    scamDetail: "",
    esewaDetail: "",
    telegramUsername: "",
    whatsappNumber: "",
  });
  const [descriptions, setDescriptions] = useState({
    esewa: "",
    phone: "",
    banking: "",
    telegram: "",
    whatsapp: "",
    facebook: ""
  });
  const [checkType, setCheckType] = useState("esewa");
  const [image, setImage] = useState(null); // State to hold the uploaded image
  
  const fileInputRef = useRef(null); // Create a ref to access the file input

  const toggleSection = () => setIsReportVisible(!isReportVisible);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setDescriptions((prevDescriptions) => ({
      ...prevDescriptions,
      [scamType]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      // You can also preview the image or perform additional logic here
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click(); // Simulate a click on the hidden input
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    const formData = {
      ...details,
      description: descriptions[scamType],
      image, // Add the image file to the form data
    };
    console.log(formData); // Handle the form submission logic here
    alert("Report submitted!");
  };

  const handleCheckSubmit = (e) => {
    e.preventDefault();
    alert("Check submitted!");
  };

  const renderFormInputs = () => {
    switch (scamType) {
      case "banking":
        return (
          <>
            <InputField
              label="Account Name"
              name="accountName"
              value={details.accountName}
              onChange={handleChange}
              placeholder="Enter your account name"
            />
            <InputField
              label="Account Number"
              name="accountNumber"
              value={details.accountNumber}
              onChange={handleChange}
              placeholder="Enter your account number"
            />
            <InputField
              label="Bank Name"
              name="bankName"
              value={details.bankName}
              onChange={handleChange}
              placeholder="Enter your bank name"
            />
          </>
        );
      case "facebook":
        return (
          <>
            <InputField
              label="Facebook Name"
              name="facebookName"
              value={details.facebookName}
              onChange={handleChange}
              placeholder="Enter the name on Facebook"
            />
            <InputField
              label="Facebook Profile URL"
              name="facebookUrl"
              value={details.facebookUrl}
              onChange={handleChange}
              type="url"
              placeholder="Enter your Facebook profile URL"
            />
          </>
        );
      case "phone":
      case "esewa":
      case "telegram":
      case "whatsapp":
        return (
          <InputField
            label={`Enter ${scamType.charAt(0).toUpperCase() + scamType.slice(1)} Details`}
            name={scamType === "esewa" ? "esewaDetail" : scamType === "whatsapp" ? "whatsappNumber" : "scamDetail"}
            value={details[scamType === "esewa" ? "esewaDetail" : scamType === "whatsapp" ? "whatsappNumber" : "scamDetail"]}
            onChange={handleChange}
            placeholder={`Enter ${scamType.charAt(0).toUpperCase() + scamType.slice(1)} details`}
          />
        );
      default:
        return null;
    }
  };

  const renderCheckFormInputs = () => {
    switch (checkType) {
      case "banking":
        return (
          <>
            <InputField
              label="Account Name"
              name="accountName"
              value={details.accountName}
              onChange={handleChange}
              placeholder="Enter your account name"
            />
            <InputField
              label="Account Number"
              name="accountNumber"
              value={details.accountNumber}
              onChange={handleChange}
              placeholder="Enter your account number"
            />
            <InputField
              label="Bank Name"
              name="bankName"
              value={details.bankName}
              onChange={handleChange}
              placeholder="Enter your bank name"
            />
          </>
        );
      case "phone":
        return (
          <InputField
            label="Phone Number"
            name="phoneNumber"
            value={details.whatsappNumber} // Assuming you're checking phone numbers here
            onChange={handleChange}
            placeholder="Enter the phone number"
          />
        );
      case "esewa":
        return (
          <InputField
            label="eSewa ID"
            name="esewaDetail"
            value={details.esewaDetail}
            onChange={handleChange}
            placeholder="Enter your eSewa ID"
          />
        );
      case "telegram":
        return (
          <InputField
            label="Telegram Username"
            name="telegramUsername"
            value={details.telegramUsername}
            onChange={handleChange}
            placeholder="Enter your Telegram username"
          />
        );
      case "whatsapp":
        return (
          <InputField
            label="WhatsApp Number"
            name="whatsappNumber"
            value={details.whatsappNumber}
            onChange={handleChange}
            placeholder="Enter your WhatsApp number"
          />
        );
      case "facebook":
        return (
          <>
            <InputField
              label="Facebook Name"
              name="facebookName"
              value={details.facebookName}
              onChange={handleChange}
              placeholder="Enter the name on Facebook"
            />
            <InputField
              label="Facebook Profile URL"
              name="facebookUrl"
              value={details.facebookUrl}
              onChange={handleChange}
              type="url"
              placeholder="Enter your Facebook profile URL"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-11/12 max-w-5xl rounded-lg overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
        <header>
          <div className="flex justify-center mb-4 mt-10">
            <button
              onClick={toggleSection}
              className="text-lg px-6 py-3 bg-red-600 rounded-md hover:bg-red-500 transition-transform transform duration-300 ease-in-out hover:scale-105 text-white"
            >
              {isReportVisible ? "Switch to Check for Scams" : "Switch to Report a Scam"}
            </button>
          </div>
        </header>

        <div className="flex flex-wrap justify-between">
          <div className="flex-1 mr-5 text-white">
            {isReportVisible ? (
              <section>
                <h2 className="text-xl font-semibold mb-4">Report a Scam</h2>
                <form id="scamReportForm" onSubmit={handleReportSubmit}>
                  <div className="mb-4">
                    <label htmlFor="scamType" className="block mb-1">Select Fraud Type:</label>
                    <select
                      id="scamType"
                      name="scamType"
                      value={scamType}
                      onChange={(e) => {
                        setScamType(e.target.value);
                        setDetails({ /* Reset details when type changes */ });
                        setDescriptions({ /* Reset descriptions when type changes */ });
                      }}
                      className="w-full p-2 bg-gray-700 rounded text-white"
                      required
                    >
                      <option value="esewa">eSewa ID</option>
                      <option value="phone">Phone Number</option>
                      <option value="banking">Banking Details</option>
                      <option value="telegram">Telegram</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="facebook">Facebook</option>
                    </select>
                  </div>

                  {renderFormInputs()}

                  {/* Description field for the selected scam type */}
                  <InputField
                    label="Description"
                    name="description"
                    value={descriptions[scamType]}
                    onChange={handleDescriptionChange}
                    placeholder={`Provide a detailed description for the ${scamType} scam`}
                  />

                  {/* Hidden File Input */}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={fileInputRef}
                    style={{ display: 'none' }} // Hide the input
                  />

                  {/* Image Upload Button */}
                  <button
                    type="button"
                    onClick={handleUploadButtonClick}
                    className="mt-4 ml-2 mr-2 px-6 py-3 bg-red-600 rounded-md hover:bg-red-500 transition-transform transform duration-300 ease-in-out hover:scale-105 text-white"
                  >
                    Add Images
                  </button>

                  <button
                    type="submit"
                    className="mt-4 px-6 py-3 bg-red-600 rounded-md hover:bg-red-500 transition-transform transform duration-300 ease-in-out hover:scale-105 text-white"
                  >
                    Submit Report
                  </button>
                </form>
              </section>
            ) : (
              <section>
                <h2 className="text-xl font-semibold mb-4">Check for Scams</h2>
                <form id="checkScamForm" onSubmit={handleCheckSubmit}>
                  <div className="mb-4">
                    <label htmlFor="checkType" className="block mb-1">Select Fraud Type to Check:</label>
                    <select
                      id="checkType"
                      name="checkType"
                      value={checkType}
                      onChange={(e) => {
                        setCheckType(e.target.value);
                        setDetails({ /* Reset details when type changes */ });
                      }}
                      className="w-full p-2 bg-gray-700 rounded text-white"
                      required
                    >
                      <option value="esewa">eSewa ID</option>
                      <option value="phone">Phone Number</option>
                      <option value="banking">Banking Details</option>
                      <option value="telegram">Telegram</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="facebook">Facebook</option>
                    </select>
                  </div>

                  {renderCheckFormInputs()}

                  <button
                    type="submit"
                    className="mt-4 px-6 py-3 bg-red-600 rounded-md hover:bg-red-500 transition-transform transform duration-300 ease-in-out hover:scale-105 text-white"
                  >
                    Submit Check
                  </button>
                </form>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for rendering input fields
const InputField = ({ label, name, value, onChange, placeholder, type = "text" }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block mb-1">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 bg-gray-700 rounded text-white"
      required
    />
  </div>
);

export default HomeForm;