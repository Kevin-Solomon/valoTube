import axios from 'axios';

const addNote = async (token, data, _id, noteDispatch) => {
  console.log(token);
  try {
    const response = await axios({
      method: 'POST',
      url: `/api/user/notes/${_id}`,
      data: { newNote: data },
      headers: { authorization: token },
    });
    console.log(response);
    noteDispatch({ type: 'ADD_NOTE', payload: response.data.notes });
  } catch (err) {
    console.log(err.response);
  }
};
export { addNote };
