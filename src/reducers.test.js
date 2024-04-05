
import * as type from './constant';
import * as reducers from './reducers';

describe('searchRobots',()=>{
    it('should return the initial state',()=>{
        expect(reducers.searchRobots(undefined,{})).toEqual({searchField:''})
    })
    it('should return the search state',()=>{
        expect(reducers.searchRobots({},{type:type.CHANGE_SEARCH_FIELD,payload:'a'})).toEqual({searchField:'a'})
    })
})
describe('RequestRobots',()=>{

    const initialStateRobots = {
        robots: [],
        isPending: true
      }
it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: type.REQUEST_ROBOTS_SUCCESS,
        payload: [{
            id: '123',
            name: 'test',
            email: 'j@jmail.com'
          }]
      })
    ).toEqual(
      {
        robots: [{
          id: '123',
          name: 'test',
          email: 'j@jmail.com'
        }],
        isPending: false
      }
    )
  })
  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: type.REQUEST_ROBOTS_FAILED,
        payload: 'NOOO'
      })
    ).toEqual(
      {
        error: 'NOOO',
        robots: [],
        isPending: false
      }
    )
  })
})