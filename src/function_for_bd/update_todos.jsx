import { useEffect, useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const UpdateTodos = (listValue) => {
	//const [isUpdating, setisUpdating] = useState(false);
	const [inputValueUpdate, setInputValueUpdate] = useState('');

	// useEffect(() => {
	// 	setListValue(listValue);
	// }, [listValue]);

	const requestUpdateTodos = () => {
		//	setisUpdating(true);

		const todosDbRef = ref(db, `todosFirebase/${listValue}`);
		set(todosDbRef, {
			title: inputValueUpdate,
		}).then((responce) => {
			console.log('Дело изменено,ответ сервера', responce);
			//setListValue('');
			setInputValueUpdate('');
		});
		//.finally(() => setisUpdating(false));
	};

	return {
		//isUpdating,
		inputValueUpdate,
		listValue,

		setInputValueUpdate,
		requestUpdateTodos,
	};
};
