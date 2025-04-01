import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const AddTodos = () => {
	//const [isCreating, setIsCreating] = useState(false);
	let [inputValue, setInputValue] = useState('');

	const requestAddTodos = () => {
		//setIsCreating(true);

		const todosDbRef = ref(db, 'todosFirebase');

		push(todosDbRef, {
			title: inputValue,
		}).then((responce) => {
			console.log('Дело добавлено,ответ сервера', responce);
			setInputValue('');
		});
		//.finally(() => inputValue='');
	};

	return {
		//isCreating,
		inputValue,
		requestAddTodos,
		setInputValue,
	};
};
