import { UserProfile } from "../types/userProfile"; // Adjust the import path if needed

const PROFILE_DATA_URL = "/profileData.json";

export const fetchProfileData = async (): Promise<UserProfile> => {
  try {
    const response = await fetch(PROFILE_DATA_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch profile data");
    }
    const data: UserProfile = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching profile data:", error);
    throw error; // Rethrow error for handling in the component
  }
};

export const updateProfileData = async (updatedProfile: UserProfile) => {
  try {
    const response = await fetch(PROFILE_DATA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    });

    if (!response.ok) {
      throw new Error("Failed to update profile data");
    }

    return await response.text(); // Assuming the server returns a success message
  } catch (error) {
    console.error("Error updating profile data:", error);
    throw error; // Rethrow error for handling in the component
  }
};
