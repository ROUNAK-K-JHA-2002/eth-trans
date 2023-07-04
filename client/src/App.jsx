import { Navbar , Services , Footer , Transactions , Welcome , Loader  } from "./exports"

export default function App() {
  return (
   <div className=" min-h-screen">
    <Navbar />
    <Welcome />
    <Services />
    <Transactions />
    <Footer />
   </div>
  )
}