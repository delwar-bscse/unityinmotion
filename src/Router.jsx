import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import PageNotFound from "./pages/PageNotFound";
import AcademyToStudio from "./pages/AcademyToStudio";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Payment from "./pages/Payment";
import ProductDetails from "./pages/ProductDetails";
import AcademyTutorial from "./pages/AcademyTutorial";
import ScrollToTop from "./layouts/ScrollToTop";
import MyProfile from "./pages/MyProfile";
import ProductPayment from "./pages/ProductPayment";
import ProductPaymentDetails from "./pages/ProductPaymentDetails";
import ProductPaymentConfirm from "./pages/ProductPaymentConfirm";





const Routers = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="academytostudio" element={<AcademyToStudio />} />
          <Route path="academytostudio/:academyId" element={<AcademyTutorial />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:productId" element={<ProductDetails />} />
          <Route path="shop/product-payment/:productId" element={<ProductPayment />} />
          <Route path="shop/product-payment-details/:productId" element={<ProductPaymentDetails />} />
          <Route path="shop/product-payment-confirm/:productId" element={<ProductPaymentConfirm />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};


export default Routers
