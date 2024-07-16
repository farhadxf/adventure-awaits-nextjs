import Image from "next/image";

const destinations = [
  {
    name: "London",
    image:
      "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Paris",
    image:
      "https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Bali",
    image:
      "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "New York",
    image:
      "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    name: "Tokyo",
    image:
      "https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Sydney",
    image:
      "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Destinations = () => {
  return (
    <section
      id="destinations"
      className="bg-gradient-to-r from-slate-800 to-gray-500 py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-extrabold">Popular Destinations</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="group overflow-hidden rounded-xl shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>

              <h3 className="group bg-gradient-to-r p-2 text-center text-4xl font-semibold text-green-400/80">
                {dest.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
