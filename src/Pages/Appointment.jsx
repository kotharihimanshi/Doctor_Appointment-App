import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../Components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currency } = useContext(AppContext);
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  // Fetch doctor information
  useEffect(() => {
    const doc = doctors.find((doc) => doc._id === docId);
    setDocInfo(doc);
  }, [doctors, docId]);

  // Generate available slots
  useEffect(() => {
    if (!docInfo) return;

    let today = new Date();
    let slots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let TimeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        TimeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 60);
      }

      slots.push(TimeSlots);
    }

    setDocSlot(slots);
  }, [docInfo]);

  // Handle Booking Confirmation
  const handleBooking = () => {
    if (!slotTime) {
      alert("Please select a time slot!");
      return;
    }
    alert(`Appointment booked with Dr. ${docInfo.name} at ${slotTime} on ${week[slotIndex]}`);
  };

  return (
    docInfo && (
      <div>
        {/* Doctor details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt={docInfo.name} />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="Verified" />
            </p>
            <div className="flex items-center gap-2 sm:mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience} years</button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm underline font-medium text-gray-900 mt-3">
                <img src={assets.info_icon} alt="Info" /> About
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment Fee: <span className="text-gray-600">{currency} {docInfo.fees}</span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p className="font-semibold text-xl">Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlot.length > 0 &&
              docSlot.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index ? "bg-primary text-white" : "border border-gray-200"
                  }`}
                >
                  <p>{item[0] && week[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlot.length > 0 &&
              docSlot[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime ? "bg-primary text-white" : "text-gray-400 border border-gray-300"
                  }`}
                >
                  {item.time}
                </p>
              ))}
          </div>
          <button
            onClick={handleBooking}
            className="bg-primary text-white font-light text-sm px-10 py-3 rounded-full my-6 hover:font-bold hover:translate-y-[-3px] transition-all duration-500"
          >
            Book An Appointment!
          </button>
        </div>

        {/* Related Doctors Section */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
