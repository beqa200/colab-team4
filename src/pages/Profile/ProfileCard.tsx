import React, {
  useEffect,
  useState,
} from "react";

import ProfileContentEdit from "./ProfileContent";
import { fetchProfileData } from "../../services/profileService";
import { UserProfile } from "../../types/userProfile";

const ProfileCard: React.FC = () => {
  const [isEditing, setIsEditing] =
    useState(false);
  const [userProfile, setUserProfile] =
    useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<
    string | null
  >(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await fetchProfileData();
        setUserProfile(profile);
      } catch (err) {
        console.error(
          "Profile fetch error:",
          err
        ); // Log the error for debugging
        setError("Failed to load profile data.");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen space-y-8 md:space-y-0 md:space-x-8">
      {/* Cover Image */}
      <div className="w-full md:h-64 absolute top-20">
        <img
          src="public/img/cover.jpg" // Add a URL for the cover image
          alt="Cover"
          className="absolute  w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {userProfile && (
        <div className="relative bg-white border w-96 h-[600px] -20 rounded-lg p-6 shadow-lg flex flex-col text-center">
          {
            <img
              src={userProfile.profileImageUrl}
              alt={`${userProfile.firstName}'s profile`}
              className="w-28 rounded-full mb-4 ml-28 "
            />
          }
          <h2 className="text-xl font-bold mb-2 ">
            {userProfile.firstName}{" "}
            {userProfile.lastName}
          </h2>
          <p className="text-gray-400 text-lg">
            {userProfile.role}
          </p>
          <hr className="my-4 mt-8" />
          <div className="flex row-auto justify-between">
            <p className="text-sm font-semibold text-gray-500">
              Events Applied
            </p>
            <p className="text-[#ed9b13] mb-2">
              {userProfile.eventsApplied}
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex row-auto justify-between">
            <p className="text-sm font-semibold text-gray-500">
              Events Held
            </p>
            <p className="text-[#36c537]">
              {userProfile.eventsHeld}
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex row-auto justify-between">
            <p className="text-sm font-semibold text-gray-500">
              Current Events
            </p>
            <p className="text-red-600">
              {userProfile.currentEvents}
            </p>
          </div>
          <hr className="my-4" />
          <a
            href={userProfile.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-4 border p-3"
          >
            LinkedIn Profile
          </a>
          <button
            className="mt-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gradient-to-l hover:from-red-500 hover:to-purple-400 transition duration-300"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        </div>
      )}
      {/* Render the ProfileContent component when isEditing is true */}
      {isEditing && (
        <ProfileContentEdit
          setIsEditing={setIsEditing}
          userProfile={userProfile}
        />
      )}
    </div>
  );
};

export default ProfileCard;
