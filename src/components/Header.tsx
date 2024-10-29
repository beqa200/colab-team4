import { useState } from "react";
import Moon from "/images/icon-moon.svg";
import Plus from "/images/icon-plus.svg";
import Sun from "/images/icon-sun.svg";
import { Button, Modal } from "antd";
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
       md:w-full md:p-[23px]
        lg:w-full lg:p-[23px] ${
          isNightMode
            ? "bg-[#161d40]"
            : "bg-[#7f9ef3]"
        }`}
    >
      <h1
        className={`font-[coiny] text-[24px]
        md:text-[26px]
        lg:text-[28px] ${
          isNightMode
            ? "text-white"
            : "text-white"
        }`}
      >
        event
      </h1>
      <div className="flex">
        <img
          src={Plus}
          alt="plus icon"
          className={`w-[24px] h-[24px] mr-[30px] cursor-pointer filter ${
            isNightMode ? "invert" : "invert"
          }`}
          onClick={showModal}
        />
        <img
          src={isNightMode ? Sun : Moon}
          alt="theme toggle icon"
          className={`w-[24px] h-[24px] cursor-pointer filter ${
            isNightMode ? "" : ""
          }`}
          onClick={toggleTheme}
        />
      </div>
      <Modal
        className="flex w-full justify-center items-center"
        title=" "
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button
            className="mt-[20px] mb-[10px] font-[poppins] font-bold rounded-full [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)] border-none"
            key="cancel"
            onClick={handleCancel}
          >
            Cancel
          </Button>,
          <Button
            className="font-[poppins] font-bold rounded-full [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]"
            key="submit"
            type="primary"
            onClick={handleSubmit}
            form="eventForm"
          >
            Submit
          </Button>,
        ]}
        closable={false}
      >
        <div className="flex flex-col w-full md:w-[470px] lg:w-[600px]">
          <h2 className="text-[24px] font-bold text-center font-[poppins] md:text-[26px] lg:text-[30px]">
            Add a new event
          </h2>
          <form
            className="mt-[30px] md:grid md:grid-cols-2 md:grid-row-2 
            lg:grid lg:grid-cols-2 lg:grid-row-2 md:pl-[20px] lg:pl-[30px]"
            id="eventForm"
            onSubmit={handleSubmit}
          >
            <div
              className="flex flex-col
            md:row-[1_/_3] lg:row-[1_/_3]"
            >
              <label
                className="mb-[4px] font-bold font-[poppins]"
                htmlFor="eventImage"
              >
                Event Image
              </label>
              <div
                className="relative w-[310px] h-[200px] bg-[#f5f5f5] rounded-[10px] flex flex-col justify-center items-center border-none border-gray-300 cursor-pointer [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]
              md:w-[200px] md:h-[150px] lg:w-[250px] lg:h-[170px]"
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
                    <FileImageOutlined className="text-[30px] text-gray-400 mb-[10px] font-[poppins]" />
                    <p className="text-gray-400 text-[12px]">
                      Tap to add an image
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col mt-[14px] md:mt-0 lg:mt-0">
              <label
                className="mb-[4px] font-bold font-[poppins]"
                htmlFor="eventName"
              >
                Event Name
              </label>
              <input
                className="w-[310px] h-[30px] bg-[#eee] rounded-[10px] text-[12px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]
                md:w-[200px] lg:w-[250px]"
                type="text"
                id="eventName"
                name="eventName"
                placeholder="Enter event name"
                required
              />
            </div>

            <div className="flex flex-col mt-[14px]">
              <label
                className="mb-[4px] font-bold font-[poppins]"
                htmlFor="eventDescription"
              >
                Description
              </label>
              <textarea
                className="w-[310px] h-[110px] bg-[#eee] rounded-[10px] text-[12px] pt-[5px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]
                md:w-[200px] md:h-[80px] lg:w-[250px] lg:h-[100px]"
                id="eventDescription"
                name="eventDescription"
                placeholder="Enter event description"
                required
              />
            </div>

            <div className="flex flex-col mt-[14px]">
              <label
                className="mb-[4px] font-bold font-[poppins]"
                htmlFor="eventDate"
              >
                Date
              </label>
              <input
                className="w-[310px] h-[30px] bg-[#eee] rounded-[10px] text-[12px] pr-[10px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]
                md:w-[200px] lg:w-[250px]"
                type="date"
                id="eventDate"
                name="eventDate"
                required
              />
            </div>

            <div className="flex flex-col mt-[14px]">
              <label
                className="mb-[4px] font-bold font-[poppins]"
                htmlFor="eventTime"
              >
                Time
              </label>
              <input
                className="w-[310px] h-[30px] bg-[#eee] rounded-[10px] text-[12px] pr-[10px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]
                md:w-[200px] lg:w-[250px]"
                type="time"
                id="eventTime"
                name="eventTime"
                required
              />
            </div>

            <div className="flex flex-col mt-[14px]">
              <label
                className="mb-[4px] font-bold font-[poppins]"
                htmlFor="eventPlace"
              >
                Place
              </label>
              <input
                className="w-[310px] h-[30px] bg-[#eee] rounded-[10px] text-[12px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]
                md:w-[200px] lg:w-[250px]"
                type="text"
                id="eventPlace"
                name="eventPlace"
                placeholder="Enter event location"
                required
              />
            </div>

            <div className="flex flex-col mt-[14px]">
              <label
                className="mb-[4px] font-bold font-[poppins]"
                htmlFor="participants"
              >
                Number of Participants
              </label>
              <input
                className="w-[310px] h-[30px] bg-[#eee] rounded-[10px] text-[12px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]
                md:w-[200px] lg:w-[250px]"
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
