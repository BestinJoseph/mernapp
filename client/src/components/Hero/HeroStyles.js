import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    hero: {
        backgroundImage: "url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80)",
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '60vh',
        color: 'blue',
    },
    container: {
        height: '100%',
        color: 'white',
        // border: '1px solid orange',
        paddingTop: 50,
    },
    header: {
        width: 350,
        height: 450,
        background: 'green',
        padding: 30,
    }
}))