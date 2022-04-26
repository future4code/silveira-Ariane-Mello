import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import LoginPage from '../pages/LoginPage'
import AdminHomePage from '../pages/AdminHomePage'
import CreateTripPage from '../pages/CreateTripPage'
import TripsDetailsPage from '../pages/TripDetailsPage'

export default function Router() {
  return (
      <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="/trips/list" element ={<ListTripsPage />} />
          <Route path="/trips/application" element ={<ApplicationFormPage />} />
          <Route path="/login" element ={<LoginPage />} />
          <Route path="/admin/trips/list" element ={<AdminHomePage />} />
          <Route path="/admin/trips/create" element ={<CreateTripPage />} />
          <Route path="/admin/trips/:id" element ={<TripsDetailsPage />} />
      </Routes>
      </BrowserRouter>
  )
}
