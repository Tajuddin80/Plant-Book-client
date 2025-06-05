
// import { useContext } from 'react';
// import { useLoaderData } from 'react-router';
import { AuthContext } from '../../AllContexts/AuthContext/AuthContext';
import { useContext } from 'react';



const MyTips = () => {
    const {user} = useContext(AuthContext)


const email = user?.email; // or however you get it
console.log(email);


fetch(`http://localhost:3000/mytips/${email}`)
  .then((res) => res.json())
  .then((data) => {
    console.log("Tips:", data);
  })
  .catch((err) => {
    console.error("Fetch error:", err);
  });
 return (
    <div className="overflow-x-auto">
      <table className="w-[95vw] my-20  mx-auto bg-base-50 border border-base-300 rounded-lg shadow-sm text-base-content">
        <thead className="bg-primary text-primary-content">
          <tr>
            <th className="py-3 px-4 text-left">Image</th>
            <th className="py-3 px-4 text-left">Title</th>
            <th className="py-3 px-4 text-left">Category</th>
            <th className="py-3 px-4 text-left">Health Status</th>
            <th className="py-3 px-4 text-left">Care Level</th>
            <th className="py-3 px-4 text-left">View Details</th>
          </tr>
        </thead>
        <tbody>
          {myPlants.map((plant) => (
            <Plant
              key={plant._id}
              plant={plant}
            ></Plant>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTips;