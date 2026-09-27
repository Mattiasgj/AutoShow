import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

import AutoShowLogo from "../../assets/logo/AutoShow.svg";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.left}>
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive
							? `${styles.autoshow} ${styles.active}`
							: styles.name
					}
				>
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
							? `${styles.autoshow} ${styles.active}`
							: styles.name
					}
				>
					Sell
				</NavLink>

				<NavLink
					to="/messages"
					className={({ isActive }) =>
						isActive
							? `${styles.autoshow} ${styles.active}`
							: styles.name
					}
				>
					Messages
				</NavLink>

				<NavLink
					to="/notifications"
					className={({ isActive }) =>
						isActive
							? `${styles.autoshow} ${styles.active}`
							: styles.name
					}
				>
					Notifications
				</NavLink>

				<NavLink
					to="/login"
					className={({ isActive }) =>
						isActive
							? `${styles.autoshow} ${styles.active}`
							: styles.name
					}
				>
					Login
				</NavLink>
			</div>
		</nav>
	);
}

export default Navbar;
