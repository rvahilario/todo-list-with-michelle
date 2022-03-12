import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';

const App = () => {
	const [list, setList] = useState<Item[]>([
		{ id: 0, name: 'Shopping', done: false },
		{ id: 1, name: 'Buy bread at market', done: true },
	]);

	return (
		<C.Container>
			<C.Area>
				<C.Header>TO-DO List</C.Header>
			</C.Area>
		</C.Container>
	);
};

export default App;
