import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '..//firebase';

export const GetTodos = () => {
	const [todos, setTodos] = useState({});
	//const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const todosDbRef = ref(db, 'todosFirebase');

		return onValue(todosDbRef, (snapshot) => {
			const loadedTodos = snapshot.val() || {};
			console.log(loadedTodos);

			setTodos(loadedTodos);
			//setIsLoading(false);
		});
	}, []);

	return {
		//isLoading,
		todos,
	};
};
