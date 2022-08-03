import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AddressRegistrationPage from '../pages/AddressRegistrationPage/AddressRegistrationPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ShoppingCartPage from '../pages/ShoppingCartPage/ShoppingCartPage';
import DefaultPage from '../pages/DefaultPage/DefaultPage';

import { SearchPage } from '../pages/SearchPage/SearchPage';

import RestaurantPage from '../pages/RestaurantPage/RestaurantPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<DefaultPage />} />
        <Route
          path="addressRegistration"
          element={<AddressRegistrationPage />}
        />
        <Route path="/feed" element={<FeedPage />} />

        <Route path="/search" element={<SearchPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/shoppingcart" element={<ShoppingCartPage />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
        <Route path="/404" element={<div>Error</div>} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
