"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface UserProfile {
  name: string;
  birthDate: string; // ISO string or simple YYYY-MM-DD
  gender: "male" | "female";
}

interface UserContextType {
  profile: UserProfile | null;
  saveProfile: (newProfile: UserProfile) => void;
  clearProfile: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("harmony_tuvi_profile");
    if (saved) {
      try {
        setProfile(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse profile", e);
      }
    }
  }, []);

  const saveProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
    localStorage.setItem("harmony_tuvi_profile", JSON.stringify(newProfile));
  };

  const clearProfile = () => {
    setProfile(null);
    localStorage.removeItem("harmony_tuvi_profile");
  };

  return (
    <UserContext.Provider value={{ profile, saveProfile, clearProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
