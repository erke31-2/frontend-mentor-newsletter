import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <main className="flex justify-center items-center w-full h-screen desktop:bg-CharcoalGrey">
        <Outlet />
    </main>
  )
}
export default RootLayout