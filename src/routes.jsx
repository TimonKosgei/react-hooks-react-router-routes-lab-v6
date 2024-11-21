import Actors from "./pages/Actors"
import Home from "./pages/Home"
import Directors from "./pages/Directors"
import Movie from "./pages/Movie"
import Error from "./pages/error"

const routes = [{ path:'/',element:<Home/>},
    {path:'/actors',element:<Actors />},
    {path:'/directors' ,element:<Directors />},
    {path:'/movie/:id', element:<Movie />},
    {path:'*', element:<Error />}    
]



export default routes;