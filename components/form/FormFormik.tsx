import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Formik, FormikErrors, FormikHelpers, FormikValues} from "formik";

interface FormikPartials extends FormikValues {

}

interface FormFormikProps {
    onSubmit: (values: FormikValues) => void,
    validationSchema: any,
    customChildren: (props: FormikPartials) => React.ReactNode
}

export {FormikPartials}

const FormFormik = (
    {
        onSubmit,
        validationSchema,
        customChildren
    }: FormFormikProps) => {

    // from validation schema create initial values with '' as default value
    const defaultValues: Record<string, string> = {}
    Object.keys(validationSchema.fields).forEach(key => {
        defaultValues[key] = ''
    })

    return (
        <View style={styles.container}>
            <Formik
                initialValues={defaultValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {(props) => <>
                    {
                        customChildren({
                            ...props
                        })
                    }
                </>
                }
            </Formik>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 24,
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
});

export default FormFormik;
