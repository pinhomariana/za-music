import { getStorageValue } from 'Services/localStorage';
import { actions } from './actions';

export const initialState = {
  track: null,
  tracks: [],
  isPlaying: false,
  savedTrackIds: getStorageValue('savedTrackIds') || [],
};

export const playerReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_TRACKS_DATA:
      console.log('Reducer received action:', action);
      return {
        ...state,
        track: action.track,
        tracks: action.tracks,
        isPlaying: action.isPlaying,
      };

    case actions.TOGGLE_PLAY:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };

    case actions.NEXT_SONG: {
      if (!state.tracks || !state.track) return state;
      const currentSongIndex = state.tracks.findIndex((track) => track.id === state.track.id);
      const nextSongIndex = currentSongIndex === state.tracks.length - 1 ? 0 : currentSongIndex + 1;
      return {
        ...state,
        track: state.tracks[nextSongIndex],
      };
    }

    case actions.PREV_SONG: {
      if (!state.tracks || !state.track) return state;
      const currentSongIndex = state.tracks.findIndex((track) => track.id === state.track.id);
      const nextSongIndex = currentSongIndex === 0 ? state.tracks.length - 1 : currentSongIndex - 1;
      return {
        ...state,
        track: state.tracks[nextSongIndex],
      };
    }
    case actions.TOGGLE_SAVE_TRACK: {
      const indexOfTrack = state.savedTrackIds.indexOf(action.trackId);

      if (indexOfTrack >= 0) {
        const newSavedTrackIds = [...state.savedTrackIds];
        newSavedTrackIds.splice(indexOfTrack, 1);
        return {
          ...state,
          savedTrackIds: newSavedTrackIds,
        };
      }

      return {
        ...state,
        savedTrackIds: [...state.savedTrackIds, action.trackId],
      };
    }
    default:
      return state;
  }
};
