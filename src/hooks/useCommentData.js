import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {URL_API} from '../api/const';

export const useCommentData = (id) => {
	const [commentsData, setCommentsData] = useState([]);
	const {token} = useSelector(state => state.token);
	console.log(token);
	useEffect(() => {
		if (!token) return;
		fetch(`${URL_API}/comments/${id}`, {
			headers: {
				Authorization: `bearer ${token}`,
			},
		})
			.then((response) => {
				if (response.status === 401) {
					throw new Error(response.status);
				}
				return response.json();
			})
			.then(
				([
					{
						data: {
							children: [{data: post}],
						},
					},
					{
						data: {
							children,
						},
					},
				]) => {
					const comments = children.map(item => item.data);

					setCommentsData([post, comments]);
				},
			)
			.catch((err) => {
				console.error(err);
			});
	}, [token]);
	return [commentsData];
};