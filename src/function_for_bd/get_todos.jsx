import { useEffect, useState } from 'react';
// import { ref, onValue } from 'firebase/database';
import { db } from '..//firebase';
import { getDatabase, ref, query, orderByChild, get, onValue } from 'firebase/database';

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

	const requestSortTodos = () => {
		// const db = getDatabase();
		// const mostViewedPosts = query(ref(db, 'todosFirebase'), orderByChild('title')).on(
		// 	'value',
		// 	function (snapshot) {
		// 		snapshot.forEach((snap) => {
		// 			const issue = snap.val();
		// 			console.log(issue);
		// 		});
		// 	},
		// );
		// return mostViewedPosts;
		const todosDbRef = ref(db, 'todosFirebase');
		todosDbRef.orderByChild('title').on('value', (snap) => {
			console.log(snap.val());
		});
	};

	// get(mostViewedPosts)
	// 	.then((snapshot) => {
	// 		setTodos(snapshot.val() || {});
	// 		console.log(snapshot.val());

	// 	})
	// 	.then((response) => {
	// 		console.log('Дела отсортированы, ответ сервера', response);
	// 	});
	// 	const todosDbRef = ref(db, 'todosFirebase');

	// 	todosDbRef.orderByChild('title').on('value', function (snapshot) {
	// 		snapshot.forEach((snap) => {
	// 			const issue = snap.val();
	// 			console.log(issue);
	// 		});
	// 	});
	// };
	// More code but we don't need to see it here

	return {
		//isLoading,
		todos,
		requestSortTodos,
	};
};
