// import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '..//firebase';

export const DeleteTodos = () => {
	//const [isDeleting, setisDeleting] = useState(false);
	//const [listValue, setListValue] = useState('');

	const requestDeleteTodos = (id) => {
		console.log('dfsddsfs');

		//	setisDeleting(true);
		//if (listValue !== '') {
		const todosDbRef = ref(db, `todosFirebase/${id}`);
		remove(todosDbRef).then((responce) => {
			console.log('Дело было удалено,ответ сервера', responce);
			//refreshProducts();
			console.log(id);
		});
		//.finally(() => setisDeleting(false));
		//}
	};

	return {
		requestDeleteTodos,
	};
};
