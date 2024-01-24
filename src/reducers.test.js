
import * as type from './constant';
import * as reducers from './reducers';

describe('searchRobots',()=>{
    it('should return the initial state',()=>{
        expect(reducers.searchRobots(undefined,{})).toEqual({searchField:''})
    })
    it('should return the search state',()=>{
        expect(reducers.searchRobots({searchField:'a'},{type:type.CHANGE_SEARCH_FIELD,payload:'a'})).toEqual({searchField:'a'})
    })
})