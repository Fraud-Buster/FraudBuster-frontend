import { useState } from "react";

const HomeForm = () => {
  const [isReportVisible, setIsReportVisible] = useState(false); // Default to showing Check for Suspicious Details
  const [scamType, setScamType] = useState("");
  const [checkType, setCheckType] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [facebookName, setFacebookName] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");

  const toggleSection = () => {
    setIsReportVisible(!isReportVisible);
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    alert("Report submitted!");
  };

  const handleCheckSubmit = (e) => {
    e.preventDefault();
    alert("Check submitted!");
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-11/12 max-w-5xl rounded-lg overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      <header>
  <div className="flex justify-center mb-4 mt-10"> {/* Add top margin here */}
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
                <form id="scamReportForm" encType="multipart/form-data" onSubmit={handleReportSubmit}>
                  <div className="mb-4">
                    <label htmlFor="scamType" className="block mb-1">
                      Select Fraud Type:
                    </label>
                    <select
                      id="scamType"
                      name="scamType"
                      value={scamType}
                      onChange={(e) => setScamType(e.target.value)}
                      className="w-full p-2 bg-gray-700 rounded text-white"
                      required
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="phone">Phone Number</option>
                      <option value="esewa">eSewa ID</option>
                      <option value="banking">Banking Details</option>
                      <option value="telegram">Telegram</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="facebook">Facebook</option>
                    </select>
                  </div>

                  {scamType === "banking" && (
                    <>
                      <div className="mb-4">
                        <label htmlFor="accountName" className="block mb-1">Account Name:</label>
                        <input
                          type="text"
                          id="accountName"
                          name="accountName"
                          value={accountName}
                          onChange={(e) => setAccountName(e.target.value)}
                          className="w-full p-2 bg-gray-700 rounded text-white"
                          placeholder="Enter account name"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="accountNumber" className="block mb-1">Account Number:</label>
                        <input
                          type="text"
                          id="accountNumber"
                          name="accountNumber"
                          value={accountNumber}
                          onChange={(e) => setAccountNumber(e.target.value)}
                          className="w-full p-2 bg-gray-700 rounded text-white"
                          placeholder="Enter account number"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="bankName" className="block mb-1">Bank Name:</label>
                        <input
                          type="text"
                          id="bankName"
                          name="bankName"
                          value={bankName}
                          onChange={(e) => setBankName(e.target.value)}
                          className="w-full p-2 bg-gray-700 rounded text-white"
                          placeholder="Enter bank name"
                          required
                        />
                      </div>
                    </>
                  )}

                  {scamType === "facebook" && (
                    <>
                      <div className="mb-4">
                        <label htmlFor="reportFacebookName" className="block mb-1">Facebook Name:</label>
                        <input
                          type="text"
                          id="reportFacebookName"
                          name="facebookName"
                          value={facebookName}
                          onChange={(e) => setFacebookName(e.target.value)}
                          className="w-full p-2 bg-gray-700 rounded text-white"
                          placeholder="Enter Facebook name"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="reportFacebookUrl" className="block mb-1">Facebook Profile URL:</label>
                        <input
                          type="url"
                          id="reportFacebookUrl"
                          name="facebookUrl"
                          value={facebookUrl}
                          onChange={(e) => setFacebookUrl(e.target.value)}
                          className="w-full p-2 bg-gray-700 rounded text-white"
                          placeholder="Enter Facebook profile URL"
                          required
                        />
                      </div>
                    </>
                  )}

                  {scamType !== "banking" && scamType !== "facebook" && (
                    <div className="mb-4">
                      <label htmlFor="scamDetail" className="block mb-1">Enter Details:</label>
                      <input
                        type="text"
                        id="scamDetail"
                        name="scamDetail"
                        className="w-full p-2 bg-gray-700 rounded text-white"
                        placeholder="Enter the scam detail (e.g., phone number, eSewa ID, etc.)"
                        required
                      />
                    </div>
                  )}

                  <div className="mb-4">
                    <label htmlFor="description" className="block mb-1">Description (Max 500 characters):</label>
                    <textarea
                      id="description"
                      name="description"
                      maxLength="500"
                      className="w-full p-2 bg-gray-700 rounded text-white"
                      placeholder="Provide a brief description of the scam..."
                      required
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="scamImage" className="block mb-1">Upload a Photo (Optional):</label>
                    <input
                      type="file"
                      id="scamImage"
                      name="scamImage"
                      accept=".jpg, .jpeg"
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-gray-600 file:text-white hover:file:bg-gray-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 px-6 py-3 bg-red-600 rounded-md hover:bg-red-500 transition duration-300 text-white"
                  >
                    Submit Report
                  </button>
                </form>
              </section>
            ) : (
              <section>
                <h2 className="text-xl font-semibold mb-4">Check for Suspicious Details</h2>
                <form id="checkReportForm" onSubmit={handleCheckSubmit}>
                  <div className="mb-4">
                    <label htmlFor="checkType" className="block mb-1">Select Detail Type:</label>
                    <select
                      id="checkType"
                      name="checkType"
                      value={checkType}
                      onChange={(e) => setCheckType(e.target.value)}
                      className="w-full p-2 bg-gray-700 rounded text-white h-15vh"
                      required
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="phone">Phone Number</option>
                      <option value="esewa">eSewa ID</option>
                      <option value="banking">Banking Details</option>
                      <option value="telegram">Telegram</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="facebook">Facebook</option>
                    </select>
                  </div>

                  {checkType === "banking" && (
                    <>
                      <div className="mb-4">
                        <label htmlFor="accountName" className="block mb-1">Account Name:</label>
                        <input
                          type="text"
                          id="checkAccountName"
                          name="checkAccountName"
                          value={accountName}
                          onChange={(e) => setAccountName(e.target.value)}
                          className="w-full p-2 bg-gray-700 rounded text-white"
                          placeholder="Enter account name"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="accountNumber" className="block mb-1">Account Number:</label>
                        <input
                          type="text"
                          id="checkAccountNumber"
                          name="checkAccountNumber"
                          value={accountNumber}
                          onChange={(e) => setAccountNumber(e.target.value)}
                          className="w-full p-2 bg-gray-700 rounded text-white"
                          placeholder="Enter account number"
                          required
                        />
                      </div>
                    </>
                  )}

                  {checkType === "facebook" && (
                    <>
                      <div className="mb-4">
                        <label htmlFor="checkFacebookName" className="block mb-1">Facebook Name:</label>
                        <input
                          type="text"
                          id="checkFacebookName"
                          name="checkFacebookName"
                          value={facebookName}
                          onChange={(e) => setFacebookName(e.target.value)}
                          className="w-full p-2 bg-gray-700 rounded text-white"
                          placeholder="Enter Facebook name"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="checkFacebookUrl" className="block mb-1">Facebook Profile URL:</label>
                        <input
                          type="url"
                          id="checkFacebookUrl"
                          name="checkFacebookUrl"
                          value={facebookUrl}
                          onChange={(e) => setFacebookUrl(e.target.value)}
                          className="w-full p-2 bg-gray-700 rounded text-white"
                          placeholder="Enter Facebook profile URL"
                          required
                        />
                      </div>
                    </>
                  )}

                  {checkType !== "banking" && checkType !== "facebook" && (
                    <div className="mb-4">
                      <label htmlFor="checkDetail" className="block mb-1">Enter Detail:</label>
                      <input
                        type="text"
                        id="checkDetail"
                        name="checkDetail"
                        className="w-full p-2 bg-gray-700 rounded-lg text-white text-start text-2xl h-[20vh]"
                        placeholder="Enter the detail (e.g., phone number, eSewa ID, etc.)"
                        required
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="mt-4 px-6 py-3 bg-red-600 rounded-md hover:bg-red-500 transition duration-300 text-white"
                  >
                    Check Detail
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

export default HomeForm;
