import styles from "./Dropdown.module.css";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface DropdownProps {
	title: string;
	content: string[];
}

function Dropdown({ title, content }: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [titleText, setTitleText] = useState(title);

	const handleItemClick = (item: string) => {
		setIsOpen(false);
		setTitleText(item);
	};

	return (
		<div className={styles.dropdown}>
			<button
				type="button"
				className={styles.dropdownbutton}
				aria-expanded={isOpen}
				onClick={() => setIsOpen((open) => !open)}
			>
				<span className={styles.dropdowntext}>{titleText}</span>
				{isOpen ? <ChevronUp /> : <ChevronDown />}
			</button>

			{isOpen && (
				<div className={styles.dropdowncontent}>
					{content.map((item) => (
						<div
							className={styles.dropdownitem}
							key={item}
							onClick={() => handleItemClick(item)}
						>
							{item}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Dropdown;
