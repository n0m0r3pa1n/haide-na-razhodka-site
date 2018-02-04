import {FETCH_MEETINGS, fetchMeetingsFulfilled} from "./actions";
import {ajax} from "rxjs/observable/dom/ajax";

export const fetchMeetingsEpic = action$ => {
  return action$.ofType(FETCH_MEETINGS)
    .map(() =>
      ajax.getJSON('https://haide-na-razhodka.herokuapp.com/api/meetings')
        .mergeMap(response => fetchMeetingsFulfilled(response))
    );
}
