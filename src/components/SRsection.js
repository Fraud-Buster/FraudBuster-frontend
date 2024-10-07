import { useState } from "react";

const SRsection = () => {
  const [isReportVisible, setIsReportVisible] = useState(true);
  const [scamType, setScamType] = useState("");
  const [checkType, setCheckType] = useState("");

  const toggleSection = () => {
    setIsReportVisible(!isReportVisible);
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    // Handle report submission logic here
    alert("Report submitted!");
  };

  const handleCheckSubmit = (e) => {
    e.preventDefault();
    // Handle check submission logic here
    alert("Check submitted!");
  };

  return (
    <div className="w-11/12 max-w-5xl rounded-lg overflow-hidden bg-gray-900 text-white">
      <header className="text-center mb-6 p-6 bg-red-700 border-b-2 border-red-600 rounded-t-lg">
        <h1 className="text-2xl font-bold">Ready to eliminate fraud?</h1>
        <p className="text-lg mt-2">Report and Check frauds to keep the community safe.</p>
        <button
          onClick={toggleSection}
          className="mt-4 text-lg px-6 py-3 bg-red-600 rounded-md hover:bg-red-500 transition duration-300"
        >
          {isReportVisible ? "Switch to Check for Scams" : "Switch to Report a Scam"}
        </button>
      </header>

      <div className="flex flex-wrap justify-between">
        <div className="flex-1 mr-5">
          {isReportVisible ? (
            <section className="mb-6 p-6 bg-gray-800 rounded-lg">
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
                    className="w-full p-2 bg-gray-700 rounded"
                    required
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="phone">Phone Number</option>
                    <option value="esewa">eSewa ID</option>
                    <option value="banking">Banking Details</option>
                    <option value="telegram">Telegram</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="facebook">Facebook</option>
                  </select>
                </div>

                {/* Conditional Fields Based on Scam Type */}
                {scamType === "banking" && (
                  <>
                    <div className="mb-4">
                      <label htmlFor="accountName" className="block mb-1">
                        Account Name:
                      </label>
                      <input
                        type="text"
                        id="accountName"
                        name="accountName"
                        className="w-full p-2 bg-gray-700 rounded"
                        placeholder="Enter account name"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="accountNumber" className="block mb-1">
                        Account Number:
                      </label>
                      <input
                        type="text"
                        id="accountNumber"
                        name="accountNumber"
                        className="w-full p-2 bg-gray-700 rounded"
                        placeholder="Enter account number"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="bankName" className="block mb-1">
                        Bank Name:
                      </label>
                      <input
                        type="text"
                        id="bankName"
                        name="bankName"
                        className="w-full p-2 bg-gray-700 rounded"
                        placeholder="Enter bank name"
                        required
                      />
                    </div>
                  </>
                )}

                {scamType === "facebook" && (
                  <>
                    <div className="mb-4">
                      <label htmlFor="reportFacebookName" className="block mb-1">
                        Facebook Name:
                      </label>
                      <input
                        type="text"
                        id="reportFacebookName"
                        name="facebookName"
                        className="w-full p-2 bg-gray-700 rounded"
                        placeholder="Enter Facebook name"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="reportFacebookUrl" className="block mb-1">
                        Facebook Profile URL:
                      </label>
                      <input
                        type="url"
                        id="reportFacebookUrl"
                        name="facebookUrl"
                        className="w-full p-2 bg-gray-700 rounded"
                        placeholder="Enter Facebook profile URL"
                        required
                      />
                    </div>
                  </>
                )}

                {scamType !== "banking" && scamType !== "facebook" && (
                  <div className="mb-4">
                    <label htmlFor="scamDetail" className="block mb-1">
                      Enter Details:
                    </label>
                    <input
                      type="text"
                      id="scamDetail"
                      name="scamDetail"
                      className="w-full p-2 bg-gray-700 rounded"
                      placeholder="Enter the scam detail (e.g., phone number, eSewa ID, etc.)"
                      required
                    />
                  </div>
                )}

                <div className="mb-4">
                  <label htmlFor="description" className="block mb-1">
                    Description (Max 500 characters):
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    maxLength="500"
                    className="w-full p-2 bg-gray-700 rounded"
                    placeholder="Provide a brief description of the scam..."
                    required
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="scamImage" className="block mb-1">
                    Upload a Photo (Optional):
                  </label>
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
                  className="mt-4 px-6 py-3 bg-red-600 rounded-md hover:bg-red-500 transition duration-300"
                >
                  Submit Report
                </button>
              </form>
            </section>
          ) : (
            <section className="mb-6 p-6 bg-gray-800 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Check for Suspicious Details</h2>
              <form id="checkReportForm" onSubmit={handleCheckSubmit}>
                <div className="mb-4">
                  <label htmlFor="checkType" className="block mb-1">
                    Select Detail Type:
                  </label>
                  <select
                    id="checkType"
                    name="checkType"
                    value={checkType}
                    onChange={(e) => setCheckType(e.target.value)}
                    className="w-full p-2 bg-gray-700 rounded"
                    required
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="phone">Phone Number</option>
                    <option value="esewa">eSewa ID</option>
                    <option value="banking">Banking Details</option>
                    <option value="telegram">Telegram</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="facebook">Facebook</option>
                  </select>
                </div>

                {/* Search Box */}
                <div className="flex justify-between mb-4">
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-700 rounded-l-lg focus:outline-none"
                    placeholder="Enter the details to check (e.g., eSewa ID, Khalti etc.)"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-red-600 text-white p-3 rounded-r-lg hover:bg-red-500 transition duration-300"
                  >
                    Search
                  </button>
                </div>
              </form>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default SRsection;
