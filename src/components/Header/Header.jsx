import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className="py-4 shadow-md bg-gradient-to-r from-gray-800 to-gray-700 text-white">
  <Container>
    <nav className="flex items-center justify-between flex-wrap">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link to="/">
          <Logo width="70px" />
        </Link>
      </div>

      {/* Navigation Items */}
      <ul className="flex items-center space-x-4 ml-auto">
        {navItems.map(
          (item) =>
            item.active && (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-gray-800 font-medium"
                >
                  {item.name}
                </button>
              </li>
            )
        )}
        {authStatus && (
          <li>
            <LogoutBtn />
          </li>
        )}
      </ul>
    </nav>
  </Container>
</header>
  )
}

export default Header