import { useState } from 'react';
// import { ref, query, orderByChild, get } from 'firebase/database';
import { db } from '../firebase';
import { getDatabase, ref, query, orderByChild, get } from 'firebase/database';

export const SortTodos = () => {
	const [todos, setTodos] = useState({});
	const requestSortTodos = () => {
		// const sortDoDbRef = ref(db, 'todosFirebase');

		// const sortTitle = query(sortDoDbRef, orderByChild('id/title'));

		// get(sortTitle)
		// 	.then((snapshot) => {
		// 		if (snapshot.exists()) {
		// 			console.log(snapshot.val());
		// 		} else {
		// 			console.log('No data available');
		// 		}
		// 	})
		// 	.then((response) => {
		// 		console.log('Дела отсортированы, ответ сервера', response);
		// 	});

		const db = getDatabase();
		const mostViewedPosts = query(ref(db, 'todosFirebase'), orderByChild('title'));

		get(mostViewedPosts)
			.then((snapshot) => {
				setTodos(snapshot.val());
			})
			.then((response) => {
				console.log('Дела отсортированы, ответ сервера', response);
			});
	};

	return {
		requestSortTodos,
		todos,
	};
};
