import styles from './Footer.module.css'
const Footer = () =>{
    return(
        <div className="footer">
            <footer className={`p-2 ${styles.bgFooter}`}>
                <div className="text-center mw-100 w-100 pt-3 pb-3">
                    <label className={styles.texto}> ariqueño en santiago </label> <span>&copy; cmriverosa 2021</span>
                </div>
            </footer>

        </div>
    )
}
export default Footer