import { useState, useEffect } from 'react';
import { ListItem } from '../components';
import SearchList from '../components/SearchList';
import { useParams, useNavigate } from 'react-router-dom';
import './List.css';
import addItem from '../../public/img/AddItem.gif';

export function List({ data, lists }) {
	const [newList, setNewList] = useState([]);
	const { path } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		setNewList(data);
	}, [data]);

	return (
		<>
			<h2>
				You are on the <code>{path}</code> list!
			</h2>
			{data.length === 0 && lists.length === 1 && (
				<div className="containerAddItem">
					<p>Well done! You have created your very first list!</p>
					<p>
						You can now add some items and specify when you need to purchase
						them.
					</p>
					<img className="addItemGif" src={addItem} alt="add item example" />

					<button id="addFirstItem" onClick={() => navigate('/manage-list')}>
						Start adding items!
					</button>
				</div>
			)}
			{data.length === 0 && lists.length > 1 && (
				<div className="containerAddItem">
					<p>Well done! You have created a new list!</p>
					<p>
						You can now add some items and specify when you need to purchase
						them.
					</p>

					<button id="addFirstItem" onClick={() => navigate('/manage-list')}>
						Start adding items!
					</button>
				</div>
			)}
			{data.length > 0 && (
				<div>
					<SearchList data={data} setNewList={setNewList} />
					<ul>
						{newList.map((item) => (
							<ListItem key={item.id} name={item.name} />
						))}
					</ul>
				</div>
			)}
		</>
	);
}
