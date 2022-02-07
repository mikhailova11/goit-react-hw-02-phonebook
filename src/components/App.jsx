import Phonebook from "./Phonebook";

const state = {
  contacts: [],
  name: ''
}

export const App = () => {
  return (
    <div>
      <Phonebook state={state}/>
    </div>
  );
};
