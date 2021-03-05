import { combineReducers } from 'redux'

import category from './redux/category'
import post from './redux/post'

const reducer = combineReducers({
    category,
    post
})

export default reducer