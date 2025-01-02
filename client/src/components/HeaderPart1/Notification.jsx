import React from "react";

const NotificationPage = () => {
  const notifications = [
    {
      id: 1,
      title: "Blood Transfusion Service e-Newsletter 2nd Edition",
      date: "2025-01-01",
      description: "Explore the latest updates and insights in the second edition of the Blood Transfusion Service e-Newsletter.",
    },
    {
      id: 2,
      title: "Blood Transfusion Service e-Newsletter First Quarter",
      date: "2025-01-01",
      description: "Highlights from the first quarter of the Blood Transfusion Service newsletter. Stay informed.",
    },
    {
      id: 3,
      title: "Revised - Deferral Criteria for Blood Donation Post COVID-19 Vaccination",
      date: "2021-05-05",
      description: "Updated guidelines for blood donation after COVID-19 vaccination. Please review before donating.",
    },
    {
      id: 4,
      title: "eRaktKosh Services are now available through UMANG",
      date: "2025-01-01",
      description: "Access eRaktKosh services conveniently through the UMANG app. Stay connected, stay informed.",
    },
    {
      id: 5,
      title: "Grant of Special Casual Leave for the purpose of blood donation",
      date: "2025-01-01",
      description: "Special casual leave is now granted for blood donation. Encourage your peers to contribute.",
    },
    {
      id: 6,
      title: "Letter Regarding Accessibility of Blood and Blood Disorders",
      date: "2025-01-01",
      description: "Read the official letter addressing the accessibility of blood and blood disorder treatments.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">Notifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="p-4 bg-white rounded-lg shadow-md border-l-4 border-red-500 transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {notification.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Date:</strong> {notification.date}
              </p>
              <p className="text-gray-700">{notification.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
