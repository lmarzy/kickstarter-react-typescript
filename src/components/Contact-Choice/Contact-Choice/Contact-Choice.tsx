import * as React from 'react';

interface ContactChoice {
  checkbox: React.ReactNode;
  form: React.ReactNode;
  valueOriginal: string;
  value: string;
  checked: boolean;
  edit: boolean;
  children: React.ReactNode;
}

const ContactChoice = ({checkbox, form, valueOriginal, value, checked, edit}: ContactChoice) => (
  <div className="ContactChoice">
    <div>
      {checkbox}
    </div>
    <div className="body">
      
    {(valueOriginal && !edit) && (
      <p>{value}</p>
    )}

    {((valueOriginal && edit) || (!valueOriginal && checked)) && (
      <div>
        {form}
      </div>
    )}
    </div>
  </div>
);

// const ContactChoice = ({checkbox, form}: ContactChoice) => (
//   <div>
//       {true && (
//         <div>
//           {checkbox}
//         </div>
//       )}
//     {form}
//   </div>
// );

export default ContactChoice;