import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../contexts/userContext'


const NavBarLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
    return (
        <Link to={to} className="ms-md-3 text-dark fw-normal" style={{
            textDecoration: 'none'
        }}>{children}</Link>
    )
}

function Navbar() {
  const navigate = useNavigate()
  const { currentUser, logout } = useContext(AppContext)
  const handleClick = () => {
    if (currentUser) 
        logout()
    else
        navigate('/login')
  }


  useEffect(() => {
    console.log('currentUser', currentUser)
  }, [currentUser])

  return (
    <nav className='shadow' style={{
        height: '64px',
        padding: '5px 10px'
    }}>
        <div className="nav-wrapper blue darken-1 px1 d-flex justify-content-between h-100 my-auto  flex-row-reverse flex-md-row">
            <div className='d-none d-md-flex align-items-center'>
                <Link to="/" style={{
                    textDecoration: 'none',
                    color: 'black'
                }}><h2 className='me-md-3'>Course Management</h2></Link>
                <NavBarLink to="/">Home</NavBarLink>
                <NavBarLink to="/courses">Courses</NavBarLink>
            </div>
            <div className='d-flex align-items-center'>
                {currentUser && <Link to={'/edit-profile'} className="fw-bold text-black me-3" style={{
                    textDecoration: 'none'
                }}>Edit Profile</Link>}
                <button type="button" className='btn rounded bg-black py-2 px-2 text-white fw-bold ms-md-3' onClick={handleClick}>{`${currentUser ? 'Logout' : 'Login'}`}</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar