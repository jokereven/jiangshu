import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	contentList: [],
	borderlist: [],
	listpage: 1, //加载地一页的数据
});

const fn = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.HOME_JSON:
			return state.merge({
				contentList: fromJS(action.contentList),
				borderlist: fromJS(action.borderlist),
			});
		case actionTypes.ADD_HOME_LIST:
			return state.merge({
				contentList: state
					.get('contentList')
					.concat(action.list._root.entries[0][1]._tail.array),
				listpage: action.Nextpage,
			});
		default:
			return state;
	}
};

export default fn;
