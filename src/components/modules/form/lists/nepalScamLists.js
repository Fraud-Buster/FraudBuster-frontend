import React from "react";


const NepalScamLists = () => {
    const scamTypes = ["Phone number", "Bank", "Esewa", "Khalti", "IME PAY", "Scam Type 6", "Scam Type 7", "Scam Type 8"];

    const handleItemClick = (scamType) => {
        console.log(`${scamType} selected!`);
        // Replace with any other action you want to perform
    };

    return (
        <section className=" bg-black text-white rounded-md w-[200px]">
            <div className="flex flex-col overflow-y-auto h-[300px]">
                {scamTypes.map((scam, index) => (
                    <div
                        key={index}
                        onClick={() => handleItemClick(scam)} // Trigger action on click
                        className="text-lg px-6 py-4 border-b border-[#cb122a] cursor-pointer hover:bg-[#cb122a] hover:text-black"
                    >
                        {scam}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NepalScamLists;