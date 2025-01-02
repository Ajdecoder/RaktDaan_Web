import React from "react";

const DonationTypes = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">Types of Blood Donation</h2>

      {/* General Introduction */}
      <div className="text-center mb-12">
        <p className="text-lg">
          The average human body contains about five liters of blood, which is made of several cellular and non-cellular components such as Red blood cells, Platelets, and Plasma.
        </p>
        <p className="text-lg">
          Each type of component has its unique properties and can be used for different indications. The donated blood is separated into these components by the blood center, and one donated unit can save up to four lives, depending on the number of components separated from your blood.
        </p>
      </div>

      {/* Donation Type Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Packed Red Blood Cells */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-4">Packed Red Blood Cells</h3>
          <p className="text-lg mb-4">
            <strong>What is it?</strong> Blood collected straight from the donor into a blood bag and mixed with an anticoagulant is called whole blood. This whole blood is then centrifuged to separate the red cells, platelets, and plasma. The separated red cells are mixed with a preservative to be called Packed Red Blood Cells.
          </p>
          <p className="text-lg mb-4">
            <strong>Who can donate?</strong> You need to be 18-65 years old, weigh 45kg or more, and be fit and healthy.
          </p>
          <p className="text-lg mb-4">
            <strong>Use for:</strong> Correction of severe anemia, childbirth, surgery, or trauma-related blood loss.
          </p>
          <p className="text-lg mb-4">
            <strong>Lasts for:</strong> Red cells can be stored for 42 days at 2-6°C.
          </p>
          <p className="text-lg mb-4">
            <strong>Donation time:</strong> 15-30 minutes, including the pre-donation check-up.
          </p>
          <p className="text-lg mb-4">
            <strong>Donation frequency:</strong> Male donors can donate again after 90 days; female donors can donate again after 120 days.
          </p>
        </div>

        {/* Plasma Donation */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-4">Plasma Donation</h3>
          <p className="text-lg mb-4">
            <strong>What is it?</strong> Plasma is the yellowish liquid portion of your blood that carries water, electrolytes, proteins, and waste products. It is collected through a process called plasmapheresis, where whole blood is drawn, and the plasma is separated and returned to the donor.
          </p>
          <p className="text-lg mb-4">
            <strong>Who can donate?</strong> Plasma donors should be between 18-65 years of age, weigh 50kg or more, and meet certain health criteria.
          </p>
          <p className="text-lg mb-4">
            <strong>Use for:</strong> Plasma is used in treating burns, shock, trauma, and to support patients with clotting disorders like hemophilia.
          </p>
          <p className="text-lg mb-4">
            <strong>Lasts for:</strong> Plasma can be stored for up to one year when frozen.
          </p>
          <p className="text-lg mb-4">
            <strong>Donation time:</strong> 45-60 minutes, including the pre-donation check-up.
          </p>
          <p className="text-lg mb-4">
            <strong>Donation frequency:</strong> Plasma can be donated once every 28 days.
          </p>
        </div>

        {/* Platelet Donation */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-4">Platelet Donation</h3>
          <p className="text-lg mb-4">
            <strong>What is it?</strong> Platelet donation is a process in which platelets are separated from your blood through a procedure called apheresis. The remaining components (red blood cells and plasma) are returned to your body.
          </p>
          <p className="text-lg mb-4">
            <strong>Who can donate?</strong> Platelet donors must be 18-65 years old, weigh at least 50kg, and meet other health criteria.
          </p>
          <p className="text-lg mb-4">
            <strong>Use for:</strong> Platelets are used to treat patients with leukemia, cancer, or severe bleeding disorders.
          </p>
          <p className="text-lg mb-4">
            <strong>Lasts for:</strong> Platelets can be stored for up to 5 days.
          </p>
          <p className="text-lg mb-4">
            <strong>Donation time:</strong> Platelet donation takes about 1-2 hours, depending on the donation process.
          </p>
          <p className="text-lg mb-4">
            <strong>Donation frequency:</strong> Platelet donors can donate every 7 days, with a maximum of 24 donations per year.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DonationTypes;
