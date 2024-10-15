import { useState } from "react";
import Moon from "/images/icon-moon.svg";
import Plus from "/images/icon-plus.svg";
import Sun from "/images/icon-sun.svg";
import { Button, Modal } from "antd";

export default function Header() {
  const [isNightMode, setIsNightMode] =
    useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] =
    useState<boolean>(false);

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
  return (
    <div
      className={`flex justify-between w-[375px] p-[20px] ${
        isNightMode ? "bg-black" : "bg-white"
      }`}
    >
      <h1
        className={`${
          isNightMode
            ? "text-white"
            : "text-black"
        }`}
      >
        event
      </h1>
      <div className="flex">
        <img
          src={Plus}
          alt="plus icon"
          className={`w-[24px] h-[24px] mr-[30px] cursor-pointer filter ${
            isNightMode ? "invert" : ""
          }`}
          onClick={showModal}
        />
        <img
          src={isNightMode ? Sun : Moon}
          alt="theme toggle icon"
          className={`w-[24px] h-[24px] cursor-pointer filter ${
            isNightMode ? "" : "invert"
          }`}
          onClick={toggleTheme}
        />
      </div>
      <Modal
        className="flex w-full"
        title=" "
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button
            className="font-[poppins] font-bold rounded-[10px] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)] border-none"
            key="cancel"
            onClick={handleCancel}
          >
            Cancel
          </Button>,
          <Button
            className="font-[poppins] font-bold rounded-[10px] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]"
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
        <div>
          <h2 className="text-[24px] font-bold text-center font-[poppins]">
            Add a new event
          </h2>
          <form
            className="mt-[30px]"
            id="eventForm"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label
                className="mb-[4px] font-bold font-[poppins]"
                htmlFor="eventImage"
              >
                Event Image
              </label>
              <input
                className="font-[poppins] text-[11px]"
                type="file"
                id="eventImage"
                name="eventImage"
                accept="image/*"
              />
            </div>

            <div className="flex flex-col mt-[10px]">
              <label
                className="mb-[4px] font-bold font-[poppins]"
                htmlFor="eventName"
              >
                Event Name
              </label>
              <input
                className="w-[310px] h-[30px] bg-[#eee] rounded-[10px] text-[12px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]"
                type="text"
                id="eventName"
                name="eventName"
                placeholder="Enter event name"
                required
              />
            </div>

            <div className="flex flex-col mt-[10px]">
              <label
                className="mb-[4px] font-bold font-[poppins]"
                htmlFor="eventDescription"
              >
                Description
              </label>
              <textarea
                className="w-[310px] h-[110px] bg-[#eee] rounded-[10px] text-[12px] pt-[5px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]"
                id="eventDescription"
                name="eventDescription"
                placeholder="Enter event description"
                required
              />
            </div>

            <div className="flex flex-col mt-[10px]">
              <label
                className="mb-[4px] font-bold font-[poppins]"
                htmlFor="eventDate"
              >
                Date
              </label>
              <input
                className="w-[310px] h-[30px] bg-[#eee] rounded-[10px] text-[12px] pr-[10px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]"
                type="date"
                id="eventDate"
                name="eventDate"
                required
              />
            </div>

            <div className="flex flex-col mt-[10px]">
              <label
                className="mb-[4px] font-bold font-[poppins]"
                htmlFor="eventTime"
              >
                Time
              </label>
              <input
                className="w-[310px] h-[30px] bg-[#eee] rounded-[10px] text-[12px] pr-[10px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]"
                type="time"
                id="eventTime"
                name="eventTime"
                required
              />
            </div>

            <div className="flex flex-col mt-[10px]">
              <label
                className="mb-[4px] font-bold font-[poppins]"
                htmlFor="eventPlace"
              >
                Place
              </label>
              <input
                className="w-[310px] h-[30px] bg-[#eee] rounded-[10px] text-[12px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]"
                type="text"
                id="eventPlace"
                name="eventPlace"
                placeholder="Enter event location"
                required
              />
            </div>

            <div className="flex flex-col mt-[10px]">
              <label
                className="mb-[4px] font-bold font-[poppins]"
                htmlFor="participants"
              >
                Number of Participants
              </label>
              <input
                className="w-[310px] h-[30px] bg-[#eee] rounded-[10px] text-[12px] pl-[10px] font-[poppins] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.25)]"
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
