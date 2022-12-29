import React from "react";
import useFormData from "../hooks/useFormData";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { useFormik } from "formik";

const Field = (props) => {

    {/**
    email field data:
        {
            "name": "email",
            "label": "E-mail",
            "type": "string",
            "fieldType": "text",
            "description": "",
            "groupName": "",
            "displayOrder": -1,
            "required": true,
            "selectedOptions": [],
            "options": [],
            "validation": {
                "name": "",
                "message": "",
                "data": "",
                "useDefaultBlockList": true,
                "blockedEmailAddresses": []
            },
            "enabled": true,
            "hidden": false,
            "defaultValue": "",
            "isSmartField": false,
            "unselectedLabel": "",
            "placeholder": "",
            "dependentFieldFilters": [],
            "labelHidden": false,
            "propertyObjectType": "CONTACT",
            "metaData": [],
            "objectTypeId": "0-1"
        }
    phone number field data:
    {
        "name": "phone",
        "label": "Telefoonnummer",
        "type": "string",
        "fieldType": "phonenumber",
        "description": "",
        "groupName": "contactinformation",
        "displayOrder": -1,
        "required": false,
        "selectedOptions": [],
        "options": [],
        "validation": {
            "name": "",
            "message": "",
            "data": "7:20:true",
            "useDefaultBlockList": false,
            "blockedEmailAddresses": []
        },
        "enabled": true,
        "hidden": false,
        "defaultValue": "",
        "isSmartField": false,
        "unselectedLabel": "",
        "placeholder": "",
        "dependentFieldFilters": [],
        "labelHidden": false,
        "propertyObjectType": "CONTACT",
        "metaData": [],
        "objectTypeId": "0-1"
    }
    first name field data:
    {
        "name": "firstname",
        "label": "Voornaam",
        "type": "string",
        "fieldType": "text",
        "description": "",
        "groupName": "",
        "displayOrder": -1,
        "required": false,
        "selectedOptions": [],
        "options": [],
        "validation": {
            "name": "",
            "message": "",
            "data": "",
            "useDefaultBlockList": false,
            "blockedEmailAddresses": []
        },
        "enabled": true,
        "hidden": false,
        "defaultValue": "",
        "isSmartField": false,
        "unselectedLabel": "",
        "placeholder": "",
        "dependentFieldFilters": [],
        "labelHidden": false,
        "propertyObjectType": "CONTACT",
        "metaData": [],
        "objectTypeId": "0-1"
    }
    */}
    const { name, label, type, fieldType, description, groupName, displayOrder, required, selectedOptions, options, validation, enabled, hidden, defaultValue, isSmartField, unselectedLabel, placeholder, dependentFieldFilters, labelHidden, propertyObjectType, metaData, objectTypeId } = props;

    return (

        <Box className="field">
            <Text>{label}</Text>
        </Box>
    )
};

const FieldGroup = ({fields,richText}) => {
    if(fields.length === 0) return <div dangerouslySetInnerHTML={{__html: richText.content}} ></div>;
    return (
        <Stack direction={{ base: 'column', md: 'row' }}>
            {fields.map((fieldData, index) => (
                <Field key={index} {...fieldData} />
            ))}
        </Stack>
    )
};

const FormBlock = ({ formData }) => {
    // check if redirectUrl is set or thankYouMessageJson
    const redirectAfterSubmit = formData.form.redirectUrl ? true : false;
    const listoffields = formData.form.formFieldGroups.reduce((acc, group) => {
        return [...acc, ...group.fields];
    }, []);
    const initialValues = listoffields.reduce((acc, field) => {
        return { ...acc, [field.name]: field.defaultValue };
    }, {});

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            {formData?.form.formFieldGroups.map((itemData, index) => (

                <FieldGroup key={index} {...itemData} />

            ))}
            <Button type="submit">{formData.form.submitText}</Button>
        </form>

    )
};

const FormContainer = ({ formId, portalId }) => {
    const { formData, isLoading } = useFormData({ formId, portalId });

    return (
        <Box>
            <Stack className="container">
                {isLoading || !formData ? (
                    <p className="loading-text">Loading Data...</p>
                ) :
                    <FormBlock formData={formData} />
                }
            </Stack>
        </Box>
    );
};

export default FormContainer;
