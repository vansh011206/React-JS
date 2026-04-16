import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.header}>
      <h3>Vanshaj</h3>
      <button className={styles.button}>Log in</button>
    </div>
  )
}

export default Navbar
