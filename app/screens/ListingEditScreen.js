import React from 'react';
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton, AppFormPicker } from '../components/forms'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().email().label('Title').min(1),
    price: Yup.number().required().min(4).label("Price").min(1).max(10000),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
});

const categories = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Camera', value: 3 }
];

function ListingEditScreen(props) {

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />

                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                />
                <AppFormPicker items={categories} name="category" placeholder="Category" />

                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />

                <SubmitButton title="Post" />

            </AppForm>


        </Screen>
    );
}

const styles = StyleSheet.create({
    container: { padding: 10 },
    logo: { width: 80, height: 80, alignSelf: 'center', marginTop: 50, marginBottom: 20 }
})

export default ListingEditScreen;