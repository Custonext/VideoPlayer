import React from "react";
import useFormData from "../hooks/useFormData";
import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { Field, Form, Formik } from 'formik';

const FormField = (props) => {

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
<FormControl>
    <FormLabel>{label}</FormLabel>
    <Input type={type} />
    <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
)
};

const FieldGroup = ({fields,richText}) => {
if(fields.length === 0) return <div dangerouslySetInnerHTML={{__html: richText.content}} ></div>;
return (
<Stack direction={{ base: 'column', md: 'row' }}>
    {fields.map((fieldData, index) => (
        <FormField key={index} {...fieldData} />
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
console.log(listoffields);
function validateField(value) {
let error
if (!value) {
    error = 'Name is required'
} else if (value.toLowerCase() !== 'naruto') {
    error = "Jeez! You're not a fan 😱"
}
return error
}
{/**
    legitimate interest:
    {
        "legitimateInterestSubscriptionTypes": [
            120511401
        ],
        "communicationConsentCheckboxes": [
            {
                "communicationTypeId": 120511401,
                "label": "Ik ga ermee akkoord om andere berichten te ontvangen van Custonext.",
                "required": false
            }
        ],
        "legitimateInterestLegalBasis": "LEGITIMATE_INTEREST_PQL",
        "communicationConsentText": "Custonext is toegewijd aan het beschermen en respecteren van je privacy, en we zullen je persoonlijke informatie alleen gebruiken om je account te beheren en om de producten en diensten te leveren waar je ons om hebt gevraagd. Van tijd tot tijd willen wij contact met je opnemen over onze producten en diensten, en andere inhoud die je interessant zou kunnen vinden.  Als je ermee instemt dat wij contact met je opnemen, vink dan hieronder aan hoe je wilt dat wij contact met je opnemen:",
        "processingConsentType": "IMPLICIT",
        "processingConsentText": "Om je van de gevraagde inhoud te voorzien, moeten wij je persoonlijke gegevens opslaan en verwerken. Vink het onderstaande selectievakje aan als je ons toestemming geeft je persoonlijke gegevens voor dit doel op te slaan.",
        "processingConsentCheckboxLabel": "Ik geef toestemming aan Custonext om mijn persoonlijke gegevens op te slaan en te verwerken.",
        "privacyPolicyText": "<p>Custonext heeft de door jou verstrekte contactgegevens nodig om contact met je op te nemen over producten en diensten. Je kunt je op elk moment afmelden voor deze berichten. Bekijk ons <u><a href=\"https://www.custonext.nl/privacy\" target=\"_blank\">privacybeleid</a></u> voor meer informatie over hoe je je af kan melden, onze privacypraktijken en hoe we ons inzetten om je privacy te beschermen en respecteren.</p>",
        "isLegitimateInterest": true
    }

    Checkbox communication:
    {
        "legitimateInterestSubscriptionTypes": [
            120511401
        ],
        "communicationConsentCheckboxes": [
            {
                "communicationTypeId": 120511401,
                "label": "Ik ga ermee akkoord om andere berichten te ontvangen van Custonext.",
                "required": false
            }
        ],
        "legitimateInterestLegalBasis": "LEGITIMATE_INTEREST_PQL",
        "communicationConsentText": "Custonext is toegewijd aan het beschermen en respecteren van je privacy, en we zullen je persoonlijke informatie alleen gebruiken om je account te beheren en om de producten en diensten te leveren waar je ons om hebt gevraagd. Van tijd tot tijd willen wij contact met je opnemen over onze producten en diensten, en andere inhoud die je interessant zou kunnen vinden.  Als je ermee instemt dat wij contact met je opnemen, vink dan hieronder aan hoe je wilt dat wij contact met je opnemen:",
        "processingConsentType": "IMPLICIT",
        "processingConsentText": "Door hieronder op verzenden te klikken, geef je toestemming aan Custonext om de hierboven ingediende persoonlijke informatie op te slaan en te verwerken om je van de gevraagde inhoud te voorzien.",
        "processingConsentCheckboxLabel": "Ik geef toestemming aan Custonext om mijn persoonlijke gegevens op te slaan en te verwerken.",
        "privacyPolicyText": "Je kunt je op elk moment afmelden voor deze berichten. Bekijk ons privacybeleid voor meer informatie over hoe je af te melden, onze privacypraktijken en hoe we ons inzetten om je privacy te beschermen en respecteren.",
        "isLegitimateInterest": false
    }

    checkbox processing and communication:
    {
        "legitimateInterestSubscriptionTypes": [
            120511401
        ],
        "communicationConsentCheckboxes": [
            {
                "communicationTypeId": 120511401,
                "label": "Ik ga ermee akkoord om andere berichten te ontvangen van Custonext.",
                "required": false
            }
        ],
        "legitimateInterestLegalBasis": "LEGITIMATE_INTEREST_PQL",
        "communicationConsentText": "Custonext is toegewijd aan het beschermen en respecteren van je privacy, en we zullen je persoonlijke informatie alleen gebruiken om je account te beheren en om de producten en diensten te leveren waar je ons om hebt gevraagd. Van tijd tot tijd willen wij contact met je opnemen over onze producten en diensten, en andere inhoud die je interessant zou kunnen vinden.  Als je ermee instemt dat wij contact met je opnemen, vink dan hieronder aan hoe je wilt dat wij contact met je opnemen:",
        "processingConsentType": "REQUIRED_CHECKBOX",
        "processingConsentText": "Om je van de gevraagde inhoud te voorzien, moeten wij je persoonlijke gegevens opslaan en verwerken. Vink het onderstaande selectievakje aan als je ons toestemming geeft je persoonlijke gegevens voor dit doel op te slaan.",
        "processingConsentCheckboxLabel": "Ik geef toestemming aan Custonext om mijn persoonlijke gegevens op te slaan en te verwerken.",
        "privacyPolicyText": "Je kunt je op elk moment afmelden voor deze berichten. Bekijk ons privacybeleid voor meer informatie over hoe je af te melden, onze privacypraktijken en hoe we ons inzetten om je privacy te beschermen en respecteren.",
        "isLegitimateInterest": false
    }
*/}
const legalConsentOptions =  JSON.parse(formData.form.metaData.find(meta => meta.name === 'legalConsentOptions').value);
console.log( (legalConsentOptions));
const Legal = () => {
    console.log(legalConsentOptions.isLegitimateInterest)
    if(legalConsentOptions.isLegitimateInterest){
        return(
            <div className="muted-text" dangerouslySetInnerHTML={{__html: legalConsentOptions.privacyPolicyText}} ></div>
        )
    }
}
return (
<Formik
    initialValues={initialValues}
    onSubmit={(values, actions) => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
    }, 1000)
    }}
>
    {(props) => {
    
    return(
    <Form>
        <Stack spacing={4}>
            
        { formData.form.formFieldGroups.map((f, index) => (
            <Stack key={index} direction={{base:'column',md:'row'}} columnGap={4}> 
        {f.fields.map((fieldData,index)=>(
            
        <Field {...fieldData}>
        {({ field, form }) => {
            const {hidden,required,placeholder,fieldType} = fieldData;
            return (
            <FormControl hidden={hidden} isInvalid={form.errors.name && form.touched.name} isRequired={required} {...placeholder} {...field}>
            <FormLabel>{fieldData.label}</FormLabel>
            <Input {...field}  />
            <FormHelperText>{fieldData.description}</FormHelperText>
            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
            </FormControl>
            
        )}}
        </Field>))}
        
        </Stack>))}
        <Legal/>
        <Button
        mt={4}
        colorScheme='teal'
        isLoading={props.isSubmitting}
        type='submit'
        >
        {formData.form.submitText}
        </Button></Stack>
    </Form>
    )}}
</Formik>
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
