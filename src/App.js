import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import Blogs from "./Components/Blogs/Blogs";
import Portfolio from "./Components/Portfolio/Portfolio";
import Login from "./Components/Authentication/Login/Login";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import AllProducts from "./Components/AllProducts/AllProducts";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/Shared/NotFound";

import Payment from "./Pages/Dashboard/Payment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyReview from "./Pages/Dashboard/MyReview";
import MyOrder from "./Pages/Dashboard/MyOrder";
import AddProduct from "./Pages/Dashboard/AddProduct";
import PaymentSystem from "./Pages/Dashboard/PaymentSystem";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import OrderTable from "./Pages/Dashboard/OrderTable";
import Users from "./Pages/Dashboard/Users";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import AddAReviw from "./Pages/Dashboard/AddAReview";
import RequireAuth from "./Authentication/RequireAuth/RequireAuth";
import PurchasePage from "./Components/PurchasePage/PurchasePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:productId" element={
        <RequireAuth>
          <PurchasePage />
        </RequireAuth>
        } />
        
        <Route path="payment/:productId" element={<Payment />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="review" element={<MyReview></MyReview>} />
          <Route path="order" element={<MyOrder></MyOrder>} />
          <Route path="addProduct" element={<AddProduct></AddProduct>} />
          <Route
            path="paymentSystem/:productId"
            element={<PaymentSystem></PaymentSystem>}
          />
          <Route path="manageOrder" element={<ManageOrder></ManageOrder>} />
          <Route path="addReview" element={<AddAReviw></AddAReviw>} />
          <Route path="orderTable" element={<OrderTable></OrderTable>} />
          <Route path="allUser" element={<Users></Users>} />

          <Route
            path="manageProduct"
            element={<ManageProduct></ManageProduct>}
          />
        </Route>
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
