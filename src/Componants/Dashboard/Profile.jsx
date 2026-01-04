import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/UseAuth";
import useAxios from "../../Hooks/UseAxios";

const Profile = () => {
  const { updateUser } = useAuth();
  const{user}=useAuth()
  const axiosSecure = useAxios();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    photoURL: "",
    role: "User",
  });

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    axiosSecure.get(`/users/profile/${user.email}`)
      .then(res => {
        setProfile(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [axiosSecure,user]);

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

  /* ================= UPDATE PROFILE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosSecure.patch(`/users/profile/${user.email}`, {
        name: profile.displayName,
        photoURL: profile.photoURL,
      });

      await updateUser(profile.displayName, profile.photoURL);

      toast.success("Profile updated successfully!");
      setOpen(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* ================= PROFILE CARD ================= */}
      <div className="relative bg-white rounded-3xl shadow-lg max-w-4xl mx-auto overflow-hidden">

        {/* Banner */}
        <div className="h-36 bg-form" />

        {/* Avatar */}
        <div className="absolute left-1/2 -mt-15 transform -translate-x-1/2">
          <img
            src={profile?.photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Info */}
        <div className="pt-20 pb-8 text-center px-6">
          <h2 className="text-3xl font-bold text-gray-800">
            {profile.displayName}
          </h2>
          <p className="text-gray-500">{profile.email}</p>

          <span className="inline-block mt-3 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
            {profile.role}
          </span>

          <div className="mt-6">
            <button
              onClick={() => setOpen(true)}
              className="btn btn-primary"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Edit Profile
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <Input
                label="Full Name"
                name="name"
                value={profile.displayName}
               
              />

              <Input
                label="Photo URL"
                name="photoURL"
                value={profile.photoURL}
            
              />

              <Input
                label="Email"
                value={profile.email}
                readOnly
              />

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Save Changes
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div>
    <label className="text-sm text-gray-500">{label}</label>
    <input
      {...props}
      className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
    />
  </div>
);

export default Profile;
