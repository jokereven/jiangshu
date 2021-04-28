import axios from 'axios';
import * as actionTypes from './actionTypes';

const change_login = () => ({
	type: actionTypes.CHANGE_LOGIN,
	value: false,
});

export const login = (account, passwd) => {
	return (dispatch) => {
		axios
			.get('./api/login.json?account=' + account + '&passwd=' + passwd)
			.then((res) => {
				if (res) {
					const result = res.data.data;
					dispatch(change_login());
				} else {
					console.log('登入失败');
				}
			});
	};
};
