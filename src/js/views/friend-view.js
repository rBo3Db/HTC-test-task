import friendSection from '../../tpl/friend.tpl'
import template from 'lodash/template';
class FriendView {

    getTemplate(friend, i) {
        const templateForInsert = template(friendSection)({friend, i});
        return templateForInsert;
        
    }
}
export default FriendView;
