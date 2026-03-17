import {Link} from 'react-router'

function NavBar(){
    return (
      <header className="mx-auto text-capitalize flex font-primary uppercase font-bold max-w-7xl justify-between mb-5 mt-5  bg-white ">

            
              <div className="flex items-center">

                  <Link to='/'>
                    <img
                      src="../public/img/logo.png"
                      alt="logo starbucls"
                      className="w-45 block "
                    />
                  </Link>

                  <div className="flex ">
                    <Link to='/menu' className="py-3 px-2 ml-1 text-sm hover:text-green-800">
                        Menu
                    </Link>

                    <Link to='/NossoCafe' className="py-3 px-2 ml-1 text-sm hover:text-green-800">
                    Nosso Café
                    </Link>

                    <Link to='/impacto' className="py-3 px-2 ml-1 text-sm hover:text-green-800">
                    Impacto Social
                    </Link>
                  </div>
              </div>
              <div className="flex items-center">

                <a href="https://historias.starbucks.com/br/" target="_blank"><img src="../public/img/image.png" alt="" className="mr-4 w-40 cursor-pointer"/></a>
                <span><svg className="cursor-pointer m-0" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#006242" ><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg></span>
                <a href="/" className="py-3 px-2 text-sm hover:text-green-800 text-center ">Encontre uma loja</a>
              </div>
      </header>
    );
}
export default NavBar;