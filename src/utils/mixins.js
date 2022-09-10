import moment from 'moment'
export const fromNowFilter = {
    filters:{
        fromNow(dateTime){
            if(!dateTime) return '-'
            else {
                return moment(dateTime).fromNow()
            }
        }
    }
}