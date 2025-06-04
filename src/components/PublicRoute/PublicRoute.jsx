// // components/PublicRoute/PublicRoute.jsx
// import { useContext } from "react";
// import { Navigate } from "react-router";
// import { AuthContext } from "../../AllContexts/AuthContext/AuthContext";

// const PublicRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <span className="loading loading-spinner loading-lg text-primary"></span>
//       </div>
//     );
//   }

//   if (user) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default PublicRoute;
