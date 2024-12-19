import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from "./page/About.jsx";
import Root from "./page/Root.jsx";
import ContactUs from "./page/ContactUs.jsx";
import HomePage from "./page/HomePage.jsx";
import Services from "./page/Services.jsx";
import Machineries from "./page/Machineries.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CaseStudiesPage from "./page/CaseStudiesPage.jsx";
import CaseStudiesForm from "./admin/Components/CaseStudies/CaseStudiesForm.jsx";
import IndividualCard from "./Components/Case_Studies/IndividualCard.jsx";
import Dashboard from "./admin/Pages/Dashboard.jsx";
import CaseStudies from "./admin/Pages/CaseStudies.jsx";
import Enquiries from "./admin/Pages/Enquiries.jsx";
import AdminLogin from "./admin/Pages/Auth.jsx";
import PanelCards from "./admin/Pages/PanelCards.jsx";
import ClientTable from "./admin/Components/Clients/ClientTable.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/machineries-equipments" element={<Machineries />}></Route>
        <Route path="/projects" element={<CaseStudiesPage />}></Route>
        <Route path="/projects/:id" element={<IndividualCard />}></Route>
      </Route>
      <Route path="/admin" element={<Dashboard />}>
        <Route path="/admin/add-studies" element={<CaseStudies />}></Route>
        <Route path="/admin" element={<PanelCards />}></Route>

        <Route path="/admin/enquiries" element={<Enquiries />}></Route>
        <Route path="/admin/client" element={<ClientTable />}></Route>
      </Route>
      <Route path="/admin/login" element={<AdminLogin />}></Route>
    </>
  )
);

const App = () => {
  return (
    <>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router} />;
    </>
  );
};

export default App;
