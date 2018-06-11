import {fetchMeetingsSaga} from "../meetings/epics";
import {fetchMeetingSaga} from "../details/epics";
import {loginUserSaga} from "../login/epics";
import {validateTokenSaga} from "../security/epics";

export default [fetchMeetingsSaga, fetchMeetingSaga, loginUserSaga, validateTokenSaga];
