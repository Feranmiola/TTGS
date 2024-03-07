
import { Toaster } from "@/components/ui/toaster";
import { Outlet, Navigate } from "react-router-dom"

const Authlayout = () => {

  const isAuthenticated = false;

  return (
    <>
    {isAuthenticated ? (
      <Navigate to="/" />
    ) : (
      <>
        <section className="flex flex-1 justify-center items-center flex-col py-10">
          <Outlet />
          <Toaster/>
        </section>

      </>
    )}
  </>
  );
}

export default Authlayout