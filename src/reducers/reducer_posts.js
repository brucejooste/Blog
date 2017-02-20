import {FETCH_POSTS, FETCH_POST} from '../actions/index';

const INITIAL_STATE = {all:[], post:null}; //all the lists of blog posts on the index page | post is the individual post.

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_POSTS:
            return {...state, all: action.payload.data}; //return a new object. take whatever our current state is and add in property 'all'

        case FETCH_POST:
            return {...state, post:action.payload.data};

        default:
            return state;
    }
}