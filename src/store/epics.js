import {fetchMeetingsSaga} from "../meetings/epics";
import {fetchMeetingSaga} from "../details/epics";

export default [fetchMeetingsSaga, fetchMeetingSaga];
