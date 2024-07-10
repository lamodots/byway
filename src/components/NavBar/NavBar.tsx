'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';

function NavBar() {
	const [openMobileMnue, setOpenMobileMenu] = useState(false);
	const pathname = usePathname();
	const toggleInput = useRef<HTMLInputElement>(null);
	const showInput = () => {
		toggleInput.current?.classList.toggle(styles.toggle);
	};
	const showMenu = () => {
		setOpenMobileMenu(!openMobileMnue);
	};
	return (
		<nav className={styles.nav}>
			<div className={styles.left_link}>
				<Link href='/'>
					<Image
						src='/bywaylogo.png'
						alt='Byways Logo'
						width={83}
						height={40}
					/>
				</Link>
				<Link
					className={`${
						pathname === '/categories' ? styles.active : styles.links
					}`}
					href='/categories'
				>
					Categories
				</Link>
				<div className={styles.form}>
					<Search onClick={showInput} />

					<input
						type='text'
						placeholder='Search course'
						name='search'
						ref={toggleInput}
						className={styles.form_input}
					/>
				</div>

				<Link
					className={`${pathname === '/teach' ? styles.active : styles.links}`}
					href='/teach'
				>
					Teach on Byway
				</Link>
			</div>
			<div className={styles.right}>
				<ShoppingCart />
				<Link
					className={`${
						pathname === '/login' ? styles.active_auth_login : styles.login_link
					}`}
					href='/login'
				>
					Login
				</Link>
				<Link
					className={`${
						pathname === '/signup'
							? styles.active_auth_signup
							: styles.signup_link
					} 
					}`}
					href='/signup'
				>
					Signup
				</Link>
			</div>
			<Menu size={32} className={styles.menuicon} onClick={showMenu} />

			{openMobileMnue && (
				<div className={styles.mobile_menu}>
					<Link
						className={`${
							pathname === '/categories' ? styles.active : styles.mobile_links
						}`}
						href='/categories'
						onClick={() => setOpenMobileMenu(false)}
					>
						Categories
					</Link>
					<Link
						className={`${
							pathname === '/teach' ? styles.active : styles.mobile_links
						}`}
						href='/teach'
						onClick={() => setOpenMobileMenu(false)}
					>
						Teach on Byway
					</Link>
					<hr />
					<Link
						className={`${
							pathname === '/login'
								? styles.active_auth_login
								: styles.mobile_login_link
						}`}
						href='/login'
						onClick={() => setOpenMobileMenu(false)}
					>
						Login
					</Link>
					<Link
						className={`${
							pathname === '/signup'
								? styles.active_auth_signup
								: styles.mobile_signup_link
						} 
					}`}
						href='/signup'
						onClick={() => setOpenMobileMenu(false)}
					>
						Signup
					</Link>
				</div>
			)}
		</nav>
	);
}

export default NavBar;
