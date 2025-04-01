import styles from './inputFirebase.module.css';
export const InputFirebase = ({ type, value, ...props }) => {
	return <input className={styles.input} type={type} value={value} {...props} />;
};
