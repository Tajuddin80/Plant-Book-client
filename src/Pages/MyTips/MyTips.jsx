import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NoPlantsMessage from "../../components/NoPlantsMessage/NoPlantsMessage";
import MyPlant from "./MyPlant";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyTips = () => {
  const { email } = useParams();
  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    if (email) {
      fetch(`https://plant-book-server.vercel.app/mytips/${email}`)
        .then((res) => res.json())
        .then((data) => setMyPlants(data))
        // .catch((err) => console.error("Fetch error:", err));
    }
  }, [email]);


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plant-book-server.vercel.app/alltips/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
          
            if (data.deletedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your tip has been deleted",
                showConfirmButton: false,
                timer: 1500,
              });
              // Remove item from state
              setMyPlants((prev) => prev.filter((plant) => plant._id !== id));
            }
          })
          .catch((error) => {
            console.error("Delete error:", error);

            Swal.fire({
              position: "center",
              icon: "Error",
              title: "Something went wrong while deleting.",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };

  return myPlants.length ? (
    <div className="overflow-x-auto">
            <Helmet>
                <title>Plant Book 🌱 My Tips</title>
            </Helmet>
      <table className="w-[95vw] my-20 mx-auto bg-base-50 border border-base-300 rounded-lg shadow-sm text-base-content">
        <thead className="bg-primary text-primary-content">
          <tr>
            <th className="py-3 px-4 text-left">Image</th>
            <th className="py-3 px-4 text-left">Title</th>
            <th className="py-3 px-4 text-left">Category</th>
            <th className="py-3 px-4 text-left">Availability</th>
            <th className="py-3 px-4 text-left">Edit</th>
            <th className="py-3 px-4 text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          {myPlants.map((plant) => (
            <MyPlant
              key={plant._id}
              handleDelete={handleDelete}
              plant={plant}
            />
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <NoPlantsMessage />
  );
};

export default MyTips;
