

function ProfileSidebar() {
  const user = {
    name: "Ahmed Mohamed",
    image: "https://i.pravatar.cc/150?img=12",
  };

  const links = [
    "My Account",
    "My Orders",
    "Returns & Cancel",
    "Reviews",
    "Wishlist",
    "Payment",
    "Change Password",
  ];

  return (
    <div className="w-[280px] bg-white rounded-3xl p-6 shadow-sm">

      <div className="flex items-center gap-4 mb-8">
        <img
          src={user.image}
          alt=""
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <p className="text-gray-400 text-sm">
            Hello
          </p>

          <h2 className="font-semibold text-lg">
            {user.name}
          </h2>
        </div>
      </div>

      <div className="space-y-2">

        {links.map((item) => (
          <button
            key={item}
            className="w-full text-left px-4 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            {item}
          </button>
        ))}

      </div>

    </div>
  );
}

export default ProfileSidebar;