import NavBar from "./navbar";
import classes from './layout.module.css'
const Layout = (props)=>{
    console.log(props)
    return(
        <div>
            <NavBar />
            <div className={classes.content}>
            {props.children}
            </div>
        
        </div>
    )
}

export default Layout