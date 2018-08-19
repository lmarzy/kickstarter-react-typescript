import * as React from 'react';
interface FormProps {
  value: string;
  id: string;
  type: string;
  handleAddUpdateContact: () => void;
}

const Form = ({ value, id, type, handleAddUpdateContact }: FormProps) => {
  const formText = value ? 'Update' : 'Add';

  return (
    <form action="">
      <fieldset>
        <legend>{`${formText} ${type}`}</legend>

        <label htmlFor={id} />
        <input type={type} id={id} value={value} onChange={handleAddUpdateContact} />

        {value 
          ? <button type="button" id="ADD">Cancel</button>
          : <button type="button" id="UPDATE">Cancel</button>
        }
        
        <button type="button">{value ? 'Update' : 'Add'}</button>
      </fieldset>
    </form>
  );
};

export default Form;