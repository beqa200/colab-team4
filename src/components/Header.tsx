import { useState } from "react";
import Moon from "/images/icon-moon.svg";
import Plus from "/images/icon-plus.svg";
import Sun from "/images/icon-sun.svg";
import DayLogo from "/images/logo.day.jpeg";
import NightLogo from "/images/logo.night.png";
import { Modal } from "antd";
import { FileImageOutlined } from "@ant-design/icons";

export default function Header() {
  const [isNightMode, setIsNightMode] =
    useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] =
    useState<boolean>(false);

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const toggleTheme = (): void => {
    setIsNightMode(!isNightMode);
  };

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };
  const handleSubmit = (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    console.log("Form submitted");
    setIsModalOpen(false);
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  return (
    <div
      className={`flex justify-between w-full p-[16px] items-center
       md:w-full md:px-[23px] md:py-[10px]
        lg:w-full lg:px-[23px] lg:py-[10px] ${
          isNightMode ? "bg-black" : "bg-white"
        }`}
    >
      <img
        src={isNightMode ? NightLogo : DayLogo}
        alt="logo img"
        className="w-[190px] h-[90px]"
      />
      {/* <h1
        className={`font-[coiny] text-[24px]
        md:text-[26px]
        lg:text-[28px] ${
          isNightMode
            ? "text-white"
            : "text-white"
        }`}
      >
        PlanMe
      </h1> */}
      <div className="flex">
        <img
          src={Plus}
          alt="plus icon"
          className={`w-[30px] h-[30px] mr-[30px] cursor-pointer filter ${
            isNightMode ? "invert" : ""
          }`}
          onClick={showModal}
        />
        <img
          src={isNightMode ? Sun : Moon}
          alt="theme toggle icon"
          className={`w-30px] h-[30px] cursor-pointer filter ${
            isNightMode ? "" : "invert"
          }`}
          onClick={toggleTheme}
        />
      </div>
      <Modal
        className="flex w-full justify-center items-center"
        styles={{
          content: {
            backgroundColor: isNightMode
              ? "#0e1223"
              : "white",
          },
        }}
        title=" "
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <div className="flex justify-end">
            <button
              className="mb-[10px] mr-[12px] w-[90px] h-[32px] font-[poppins] text-white font-bold rounded-full [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)] border-none
               bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-purple-400 transition duration-300"
              key="cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="font-[poppins] w-[90px] h-[32px] font-bold text-white rounded-full [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]
              bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-purple-400 transition duration-300"
              key="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>,
        ]}
        closable={false}
      >
        <div className="flex flex-col w-full md:w-[470px] lg:w-[600px]">
          <h2
            className={`text-[24px] font-bold text-center font-[poppins] md:text-[26px] lg:text-[30px] ${
              isNightMode
                ? "text-[#3a4d60]"
                : "text-[#1a2a77]"
            }`}
          >
            Add a new event
          </h2>
          <form
            className={`pt-[20px] pb-[20px] px-[12px]   
            md:px-0 lg:px-0 md:grid md:grid-cols-2 md:grid-row-2 
            lg:grid lg:grid-cols-2 lg:grid-row-2 place-items-center ${
              isNightMode
                ? "bg-[#0e1223]"
                : "bg-[#ffffff]"
            }`}
            id="eventForm"
            onSubmit={handleSubmit}
          >
            <div
              className="flex flex-col
            md:row-[1_/_3] lg:row-[1_/_3]"
            >
              <label
                className={`mb-[6px] font-bold font-[poppins] ${
                  isNightMode
                    ? "text-[#3a4d60]"
                    : "text-[#1a2a77]"
                }`}
                htmlFor="eventImage"
              >
                Event Image
              </label>
              <div
                className={`relative w-[310px] h-[200px] rounded-[10px] flex flex-col justify-center items-center border-none border-gray-300 cursor-pointer [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]
              md:w-[200px] md:h-[150px] lg:w-[250px] lg:h-[170px] ${
                isNightMode
                  ? "bg-[#071726fc]"
                  : " bg-[#f5f5f5]"
              }`}
              >
                <input
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  type="file"
                  id="eventImage"
                  name="eventImage"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected event"
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <FileImageOutlined
                      className={`text-[30px] ${
                        isNightMode
                          ? "text-gray-800"
                          : "text-[#1a2a77]"
                      } mb-[10px] font-[poppins]`}
                    />
                    <p
                      className={`text-[12px] ${
                        isNightMode
                          ? "text-[#293644]"
                          : "text-[#1a2a77]"
                      }`}
                    >
                      Tap to add an image
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col mt-[14px] md:mt-0 lg:mt-0">
              <label
                className={`mb-[6px] font-bold font-[poppins] ${
                  isNightMode
                    ? "text-[#3a4d60]"
                    : "text-[#1a2a77]"
                }`}
                htmlFor="eventName"
              >
                Event Name
              </label>
              <input
                className={`w-[310px] h-[30px] border-0 outline-none rounded-[10px] text-[12px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]
                md:w-[200px] lg:w-[250px] ${
                  isNightMode
                    ? "bg-[#071726fc] placeholder-[#293644] text-[#45586d]"
                    : " bg-[#f5f5f5] text-[#1a2a77]"
                }`}
                type="text"
                id="eventName"
                name="eventName"
                placeholder="Enter event name"
                required
              />
            </div>

            <div className="flex flex-col mt-[14px]">
              <label
                className={`mb-[6px] font-bold font-[poppins] ${
                  isNightMode
                    ? "text-[#3a4d60]"
                    : "text-[#1a2a77]"
                }`}
                htmlFor="eventDescription"
              >
                Description
              </label>
              <textarea
                className={`w-[310px] h-[110px] border-0 outline-none rounded-[10px] text-[12px] pt-[5px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]
                md:w-[200px] md:h-[80px] lg:w-[250px] lg:h-[100px] ${
                  isNightMode
                    ? "bg-[#071726fc] text-[#45586d] placeholder-[#293644]"
                    : " bg-[#f5f5f5] text-[#1a2a77]"
                }`}
                id="eventDescription"
                name="eventDescription"
                placeholder="Enter event description"
                required
              />
            </div>

            <div className="flex flex-col mt-[14px]">
              <label
                className={`mb-[6px] font-bold font-[poppins] ${
                  isNightMode
                    ? "text-[#3a4d60]"
                    : "text-[#1a2a77]"
                }`}
                htmlFor="eventDate"
              >
                Date
              </label>
              <input
                className={`w-[310px] h-[30px] border-0 outline-none rounded-[10px] text-[12px] pr-[10px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]
                md:w-[200px] lg:w-[250px] ${
                  isNightMode
                    ? "bg-[#071726fc] text-[#293644]"
                    : " bg-[#f5f5f5] text-[#1a2a77]"
                }`}
                type="date"
                id="eventDate"
                name="eventDate"
                required
              />
            </div>

            <div className="flex flex-col mt-[14px]">
              <label
                className={`mb-[6px] font-bold font-[poppins] ${
                  isNightMode
                    ? "text-[#3a4d60]"
                    : "text-[#1a2a77]"
                }`}
                htmlFor="eventTime"
              >
                Time
              </label>
              <input
                className={`w-[310px] h-[30px] border-0 outline-none rounded-[10px] text-[12px] pr-[10px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]
                md:w-[200px] lg:w-[250px] ${
                  isNightMode
                    ? "bg-[#071726fc] text-[#293644]"
                    : " bg-[#f5f5f5] text-[#1a2a77]"
                }`}
                type="time"
                id="eventTime"
                name="eventTime"
                required
              />
            </div>

            <div className="flex flex-col mt-[14px]">
              <label
                className={`mb-[6px] font-bold font-[poppins] ${
                  isNightMode
                    ? "text-[#3a4d60]"
                    : "text-[#1a2a77]"
                }`}
                htmlFor="eventPlace"
              >
                Place
              </label>
              <input
                className={`w-[310px] h-[30px] border-0 outline-none rounded-[10px] text-[12px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]
                md:w-[200px] lg:w-[250px] ${
                  isNightMode
                    ? "bg-[#071726fc] text-[#45586d] placeholder-[#293644]"
                    : " bg-[#f5f5f5] text-[#1a2a77]"
                }`}
                type="text"
                id="eventPlace"
                name="eventPlace"
                placeholder="Enter event location"
                required
              />
            </div>

            <div className="flex flex-col mt-[14px]">
              <label
                className={`mb-[6px] font-bold font-[poppins] ${
                  isNightMode
                    ? "text-[#3a4d60]"
                    : "text-[#1a2a77]"
                }`}
                htmlFor="participants"
              >
                Number of Participants
              </label>
              <input
                className={`w-[310px] h-[30px] border-0 outline-none rounded-[10px] text-[12px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]
                md:w-[200px] lg:w-[250px] ${
                  isNightMode
                    ? "bg-[#071726fc] text-[#45586d] placeholder-[#293644]"
                    : " bg-[#f5f5f5] text-[#1a2a77]"
                }`}
                type="number"
                id="participants"
                name="participants"
                min="1"
                required
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
