import React, { useState, useEffect } from "react";
import { UserProfile } from "../../types/userProfile";
import { updateProfileData } from "../../services/profileService";

interface ProfileContentEditProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  userProfile: UserProfile | null;
}

const ProfileContentEdit: React.FC<ProfileContentEditProps> = ({ setIsEditing, userProfile }) => {
  const [firstName, setFirstName] = useState<string>(userProfile?.firstName || "");
  const [lastName, setLastName] = useState<string>(userProfile?.lastName || "");
  const [phoneNumber, setPhoneNumber] = useState<string>(userProfile?.phoneNumber || "");
  const [email, setEmail] = useState<string>(userProfile?.email || "");
  const [biography, setBiography] = useState<string>(userProfile?.biography || "");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (profileImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(profileImage);
    } else {
      setImagePreview(null);
    }
  }, [profileImage]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setProfileImage(event.target.files[0]);
    }
  };

  const handleSaveChanges = async () => {
    const updatedProfile: UserProfile = {
      id: userProfile?.id || 0, // Default to 0 or another valid value for `id`
      firstName,
      lastName,
      phoneNumber,
      email,
      profileImageUrl: imagePreview || userProfile?.profileImageUrl || "", // Fallback if no new image is selected
      role: userProfile?.role || "", // Preserve role or provide a fallback
      username: userProfile?.username || "",
      eventsApplied: userProfile?.eventsApplied || 0,
      eventsHeld: userProfile?.eventsHeld || 0,
      currentEvents: userProfile?.currentEvents || 0,
      linkedInUrl: userProfile?.linkedInUrl || "",
      birthday: userProfile?.birthday || "",
      biography: userProfile?.biography || "",
    };

    try {
      await updateProfileData(updatedProfile);
      alert("Profile updated successfully!");
      setIsEditing(false); // Close the edit form after saving
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     // Logic for submitting the form goes here
  //     console.log({ firstName, lastName, phoneNumber, email, profileImage });
  //     setIsEditing(false);
  //   };

  return (
    <div className="h-auto md:h-[600px] w-full md:w-[650px] border rounded-lg p-6 shadow-lg flex flex-col justify-center bg-white transform transition-transform duration-500 ease-out translate-x-0 animate-slide-in-right">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <form>
        {/* First and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="border rounded p-2 mb-2 w-full text-gray-600"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="border rounded p-2 mb-2 w-full text-gray-600"
            />
          </div>
        </div>

        {/* Phone Number and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              className="border rounded p-2 mb-2 w-full text-gray-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="border rounded p-2 mb-4 w-full text-gray-600"
            />
          </div>
        </div>

        {/* Biography */}
        <div className="mb-2">
          <label htmlFor="biography" className="block text-sm font-medium text-gray-700">
            Biography
          </label>
          <textarea
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
            placeholder="Tell something about yourself"
            className="border rounded p-2 pb-0 w-full text-gray-600"
            rows={4}
          />
        </div>

        {/* Update Image */}
        {imagePreview && <img src={imagePreview} alt="Profile Preview" className="w-24 h-24 rounded-full mb-4 mx-auto" />}
        <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />

        <div className="flex flex-col md:flex-row justify-between px-20 mt-6">
          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSaveChanges}
            className="mt-4 w-full md:w-40 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gradient-to-l hover:from-red-500 hover:to-purple-400 transition duration-300"
          >
            Update
          </button>
          {/* Close Button */}
          <button
            type="button"
            className="mt-4 w-full md:w-40 bg-gray-300 text-black font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gray-400 transition duration-300"
            onClick={() => setIsEditing(false)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileContentEdit;
