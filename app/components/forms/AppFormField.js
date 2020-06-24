import React from 'react';
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, ...rest }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...rest}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;