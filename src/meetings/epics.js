import {FETCH_MEETINGS, fetchMeetingsFulfilled} from "./actions";
import axios from 'axios'
import {Observable} from "rxjs";

export const fetchMeetingsEpic = (action$) => {
  return action$.ofType(FETCH_MEETINGS)
    .switchMap(() => {
        return Observable.fromPromise(
          axios.get('https://haide-na-razhodka.herokuapp.com/api/meetings')
            .then(res => fetchMeetingsFulfilled(res.data))
      );
    });
};
