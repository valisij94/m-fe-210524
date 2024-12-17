import { Outlet } from "react-router";

export default function About() {

  return (
    <div>
      <h2>About us!</h2>
      <p>Have a patience! This will be ready soon!</p>
      <Outlet />
    </div>
  )
}