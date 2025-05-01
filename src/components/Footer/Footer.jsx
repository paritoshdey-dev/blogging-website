import React from 'react'
import { Link } from 'react-router-dom'
import {Logo} from '../index'

function Footer() {
  return (
    <section className="relative bg-gray-900 text-white border-t border-gray-700 py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <div className="mb-4">
          <Logo width="120px" />
        </div>
        <p className="text-sm text-gray-400">
          &copy; 2025 Paritosh Dey. All rights reserved.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
          Company
        </h3>
        <ul className="space-y-2">
          <li><Link to="/" className="hover:text-white transition">Features</Link></li>
          <li><Link to="/" className="hover:text-white transition">Pricing</Link></li>
          <li><Link to="/" className="hover:text-white transition">Affiliate Program</Link></li>
          <li><Link to="/" className="hover:text-white transition">Press Kit</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
          Support
        </h3>
        <ul className="space-y-2">
          <li><Link to="/" className="hover:text-white transition">Account</Link></li>
          <li><Link to="/" className="hover:text-white transition">Help</Link></li>
          <li><Link to="/" className="hover:text-white transition">Contact Us</Link></li>
          <li><Link to="/" className="hover:text-white transition">Customer Support</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
          Legals
        </h3>
        <ul className="space-y-2">
          <li><Link to="/" className="hover:text-white transition">Terms & Conditions</Link></li>
          <li><Link to="/" className="hover:text-white transition">Privacy Policy</Link></li>
          <li><Link to="/" className="hover:text-white transition">Licensing</Link></li>
        </ul>
      </div>
    </div>
  </div>
</section>

  )
}

export default Footer