
import ProfileSidebar from './../../components/Navbar/navebar.jsx';
function Profile() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] p-10">

      <div className="max-w-7xl mx-auto flex gap-8">

        <ProfileSidebar />

        <div className="flex-1 bg-white rounded-3xl p-10">

          <div className="flex justify-between items-center mb-10">

            <h1 className="text-3xl font-semibold">
              Personal Information
            </h1>

            <button className="text-blue-500 font-medium">
              Edit Profile
            </button>

          </div>

          <div className="flex items-center gap-6 mb-10">

            <img
              src="https://i.pravatar.cc/200?img=12"
              alt=""
              className="w-28 h-28 rounded-full object-cover"
            />

            <div>
              <h2 className="text-2xl font-semibold">
                Ahmed Mohamed
              </h2>

              <p className="text-gray-500">
                Frontend Developer
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <label className="text-gray-500 block mb-2">
                Name
              </label>

              <input
                value="Ahmed Mohamed"
                readOnly
                className="w-full bg-gray-50 p-4 rounded-xl outline-none"
              />
            </div>

            <div>
              <label className="text-gray-500 block mb-2">
                Date of Birth
              </label>

              <input
                value="15 / 03 / 2004"
                readOnly
                className="w-full bg-gray-50 p-4 rounded-xl outline-none"
              />
            </div>

            <div>
              <label className="text-gray-500 block mb-2">
                Phone Number
              </label>

              <input
                value="+20 101 234 5678"
                readOnly
                className="w-full bg-gray-50 p-4 rounded-xl outline-none"
              />
            </div>

            <div>
              <label className="text-gray-500 block mb-2">
                Email
              </label>

              <input
                value="ahmed@gmail.com"
                readOnly
                className="w-full bg-gray-50 p-4 rounded-xl outline-none"
              />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;