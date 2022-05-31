
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../../firebase.init";
const Profile = () => {
  const [user] = useAuthState(auth);
  
  return (
    <div class="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
      <div class="mb-6 md:mb-0">
        <div class="text-center">
          <img
            src={
              user?.photoUR
                ? user?.photoUR
                : "https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png"
            }
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5
            style={{ textTransform: "uppercase" }}
            class="text-xl font-medium leading-tight mb-2"
          >
            {user?.displayName}
          </h5>
          <p class="text-gray-500">{user?.email}</p>
        </div>
        <div className="flex justify-center mt-8">
          <div className="w-36">
            <p className="p-2 mb-3 font-bold">Full Name:</p>
            <p className="p-2 mb-3 font-bold">Email Address:</p>
            <p className="p-2 mb-3 font-bold">Phone Number:</p>
            <p className="p-2 mb-3 font-bold">Education:</p>
            <p className="p-2 mb-3 font-bold">LinkedIn Profile:</p>
          </div>
          <div>
            <p className="p-2 mb-3">{user?.displayName}</p>
            <p className="p-2 mb-3">{user?.email}</p>
            <p className="p-2 mb-3"></p>
            <p className="p-2 mb-3"></p>
            <a className="p-2 mb-3"></a>
          </div>
        </div>
      </div>
      <div class="mb-6 md:mb-0 flex justify-center">

      </div>
    </div>
  );
};

export default Profile;
