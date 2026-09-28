import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

import AutoShowLogo from "../../assets/logo/AutoShow.svg";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.left}>
				<NavLink to="/buy" className={styles.logo}>
					<img
						src={AutoShowLogo}
						alt="AutoShow"
						className={styles.logo}
					/>
				</NavLink>
			</div>

			<div className={styles.right}>
				<NavLink
					to="/sell"
					className={({ isActive }) =>
						isActive
							? `${styles.sell} ${styles.active}`
							: styles.sell
					}
				>
					Sell
				</NavLink>

				<NavLink
					to="/buy"
					className={({ isActive }) =>
						isActive ? `${styles.buy} ${styles.active}` : styles.buy
					}
				>
					Buy
				</NavLink>

				<NavLink
					to="/messages"
					className={({ isActive }) =>
						isActive
							? `${styles.messages} ${styles.active}`
							: styles.messages
					}
				>
					Messages
				</NavLink>

				<NavLink
					to="/notifications"
					className={({ isActive }) =>
						isActive
							? `${styles.notifications} ${styles.active}`
							: styles.notifications
					}
				>
					Notifications
				</NavLink>

				<NavLink
					to="/login"
					className={({ isActive }) =>
						isActive
							? `${styles.login} ${styles.active}`
							: styles.login
					}
				>
					Login
				</NavLink>
			</div>
		</nav>
	);
}

export default Navbar;
