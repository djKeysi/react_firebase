import { useEffect, useState } from 'react';
import { ButtonFirebase } from './buttonFirebase/buttonFirebase';
import { AddTodos } from './function_for_bd/add_todos';
import { GetTodos } from './function_for_bd/get_todos';
import { UpdateTodos } from './function_for_bd/update_todos';
import { InputFirebase } from './inputFirebase/inputFirebase';
import { DeleteTodos } from './function_for_bd/delete_todos';

export const App = () => {
	const [listValue, setListValue] = useState('');
	const [listValueID, setListValueID] = useState('');

	const { todos } = GetTodos();
	const { inputValue, requestAddTodos, setInputValue } = AddTodos();

	const { inputValueUpdate, setInputValueUpdate, requestUpdateTodos } =
		UpdateTodos(listValueID);

	const { requestDeleteTodos } = DeleteTodos();
	console.log(listValue);

	useEffect(() => {
		if (inputValueUpdate === '') {
			setListValue('');
		}
	}, [inputValueUpdate]);
	// useEffect(() => {
	// 	if (requestDeleteTodos) {
	// 		setListValue('');
	// 	}
	// });
	const liOnClick = (event, title, id) => {
		//console.log(event);
		if (event.screenX < 2606) {
			//console.log(title);
			setListValue(title);
			setListValueID(id);
			console.log(event.screenX);
		} else if (listValue === '') {
			setListValue('');
		}
		//() => setListValue(title)
		// console.log(e.screenX); //2606
		// console.log(e.screenY);//970
	};

	return (
		<>
			<h1>Firebase Server</h1>{' '}
			{listValue === '' ? (
				<div>
					<InputFirebase
						type="text"
						onChange={(event) => setInputValue(event.target.value)}
						value={inputValue}
					/>
					<ButtonFirebase onClick={requestAddTodos}>
						Добавить дело
					</ButtonFirebase>
				</div>
			) : (
				<div>
					<InputFirebase
						type="text"
						value={inputValueUpdate}
						onChange={(event) => setInputValueUpdate(event.target.value)}
					/>
					<ButtonFirebase onClick={requestUpdateTodos}>
						Изменить дело
					</ButtonFirebase>
					{listValue !== '' ? (
						<p style={{ color: 'red' }}>Вы меняете {listValue}</p>
					) : (
						<p>Выберите дело</p>
					)}
				</div>
			)}
			<div>
				<ul>
					{Object.entries(todos).map(([id, { title }]) => {
						return (
							<li onClick={(event) => liOnClick(event, title, id)} key={id}>
								{title}
								<ButtonFirebase
									onClick={() => {
										requestDeleteTodos(id);
									}}
								>
									Удалить дело
								</ButtonFirebase>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};
