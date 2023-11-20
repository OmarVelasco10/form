// import { FC } from 'react';
// import { useController } from 'react-hook-form';
// import PropTypes from 'prop-types';
// import { Checkbox, Typography } from 'antd';
// import './CBCheckbox.scss';
import React from 'react';

// interface CBCheckboxTypes {
//     label: string;
//     name: string;
//     control: any;
//     disabled?: boolean;
//     onChange?: any;
// }

// const CBCheckbox: FC<CBCheckboxTypes> = ({
//     label,
//     name,
//     control,
//     disabled,
//     onChange,
// }) => {
//     const { field, fieldState } = useController({ name, control });
//     const id = `checkbox-${field.name}`;
//     const { Text } = Typography;

//     return (
//         <div className='CBCheckbox'>
//             <Checkbox
//                 id={id}
//                 disabled={disabled}
//                 ref={field.ref}
//                 name={field.name}
//                 value={field.value}
//                 checked={field.value}
//                 onChange={async(e: any) => {
//                     field.onChange(e);
//                     await onChange(e);
//                 }}
//                 aria-invalid={fieldState.error ? 'true' : 'false'} />
//                 {label && (
//                     <Text style={{ paddingLeft: '5px' }}>
//                             {label}
//                     </Text>
//                 )}
//             {!!fieldState.error && (
//                 <span role='alert'>
//                     {fieldState.error.message}
//                 </span>
//             )}
//         </div>
//     );
// }

// CBCheckbox.propTypes = {
//     label: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     control: PropTypes.object.isRequired,
//     disabled: PropTypes.bool,
//     onChange: PropTypes.func,
// }

// CBCheckbox.defaultProps = {
//     disabled: false,
//     onChange: () => {},
// }

// export default CBCheckbox;


import react from 'react';
