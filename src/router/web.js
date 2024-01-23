import  express  from "express";
import homeController from "../controller/homeController"
let router = express.Router();

const initWebRoute = (app)=>{
    // router.get('/',(req, res)=>{
    //     res.render('test/index.ejs')

    // })
    router.get('/',homeController.getHomePage);
      
    return app.use('/', router)
}

export default initWebRoute;