const initialValue = {
    list_1  :  [],

}
export default function answerReducer  (state = initialValue , action){
  switch (action.key) {
      case 'lgoi':
          return {
              
          }
      default:
        return state
    }
}