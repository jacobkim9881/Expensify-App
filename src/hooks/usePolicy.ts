import {useOnyx} from 'react-native-onyx';
import CONST from '@src/CONST';
import ONYXKEYS from '@src/ONYXKEYS';

function getPolicyIDOrDefault(policyID?: string) {
    if (!policyID || policyID === CONST.POLICY.OWNER_EMAIL_FAKE) {
        return '-1';
    }
    return policyID;
}

function usePolicy(policyID?: string, test) {
    const [policy] = useOnyx(`${ONYXKEYS.COLLECTION.POLICY}${getPolicyIDOrDefault(policyID)}`);
console.log('policy: ', policy)
	console.log('report: ', test)
    return policy;
}

export default usePolicy;
