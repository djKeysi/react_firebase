import styles from './buttonFirebase.module.css';
export const ButtonFirebase = ({ onClick, children, ...props }) => {
	return children === 'Добавить дело' ||
		children === 'Изменить дело' ||
		children === 'Сортировка дел' ? (
		<button className={styles.button} onClick={onClick} {...props}>
			{children}
		</button>
	) : (
		<button className={styles.button_delete} onClick={onClick} {...props}>
			{children}
		</button>
	);
};
