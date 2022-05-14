import axios from 'axios';
export const deleteNote = async (_id, token, noteDispatch) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `/api/user/note/${_id}`,
      headers: { authorization: token },
    });
    noteDispatch({ type: 'DELETE_NOTE', payload: response.data.notes });
  } catch (err) {
    console.log(err);
  }
};
