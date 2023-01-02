import { useEffect, useState } from "react";
//https://forms-eu1.hsforms.com/embed/v3/form/25321820/4cfc5151-36dc-4f43-be48-75425a6da2aa/


{/* {
    "form": {
        "portalId": 25321820,
        "guid": "4cfc5151-36dc-4f43-be48-75425a6da2aa",
        "cssClass": "",
        "inlineMessage": "",
        "redirectUrl": "https://www.ctb.nl/bedankt-contact/",
        "submitText": "Verstuur bericht",
        "formFieldGroups": [
            {
                "fields": [
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
                    },
                    {
                        "name": "lastname",
                        "label": "Achternaam",
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
                ],
                "default": true,
                "isSmartGroup": false,
                "richText": {
                    "content": "",
                    "type": "TEXT"
                },
                "isPageBreak": false
            },
            {
                "fields": [
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
                    },
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
                ],
                "default": true,
                "isSmartGroup": false,
                "richText": {
                    "content": "",
                    "type": "TEXT"
                },
                "isPageBreak": false
            },
            {
                "fields": [
                    {
                        "name": "message",
                        "label": "Bericht",
                        "type": "string",
                        "fieldType": "textarea",
                        "description": "",
                        "groupName": "contact_activity",
                        "displayOrder": -1,
                        "required": true,
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
                ],
                "default": true,
                "isSmartGroup": false,
                "richText": {
                    "content": "",
                    "type": "TEXT"
                },
                "isPageBreak": false
            }
        ],
        "metaData": [
            {
                "name": "notifyHubSpotOwner",
                "value": "true"
            },
            {
                "name": "lang",
                "value": "nl"
            },
            {
                "name": "clonedFromForm",
                "value": "8cfea3c4-439b-41fa-a65e-7dbadf8ca261"
            },
            {
                "name": "legalConsentOptions",
                "value": "{\"legitimateInterestSubscriptionTypes\":[126370477,125837255],\"communicationConsentCheckboxes\":[{\"communicationTypeId\":125837255,\"label\":\"<p>Ik ga ermee akkoord om berichten te ontvangen van CTB.</p>\",\"required\":true}],\"legitimateInterestLegalBasis\":\"LEGITIMATE_INTEREST_PQL\",\"communicationConsentText\":\"<p>CTB is toegewijd aan het beschermen en respecteren van je privacy, en we zullen je persoonlijke informatie alleen gebruiken om je account te beheren en om de producten en diensten te leveren waar je ons om hebt gevraagd. Van tijd tot tijd willen wij contact met je opnemen over onze producten en diensten, en andere inhoud die je interessant zou kunnen vinden.  Als je ermee instemt dat wij contact met je opnemen, vink dan hieronder aan hoe je wilt dat wij contact met je opnemen:</p>\",\"processingConsentType\":\"IMPLICIT\",\"processingConsentText\":\"<p>Om je van de gevraagde inhoud te voorzien, moeten wij je persoonlijke gegevens opslaan en verwerken. Vink het onderstaande selectievakje aan als je ons toestemming geeft je persoonlijke gegevens voor dit doel op te slaan.</p>\",\"processingConsentCheckboxLabel\":\"<p>Ik geef toestemming aan CTB om mijn persoonlijke gegevens op te slaan en te verwerken.</p>\",\"privacyPolicyText\":\"<p>CTB heeft de door jou verstrekte contactgegevens nodig om contact met je op te nemen over onze producten en diensten. Je kunt je op elk moment afmelden voor deze berichten. Bekijk ons privacybeleid voor meer informatie over hoe je je af kan melden, onze privacypraktijken en hoe we ons inzetten om je privacy te beschermen en respecteren.</p>\",\"isLegitimateInterest\":true}"
            },
            {
                "name": "embedAtTimestamp",
                "value": "1672323297291"
            },
            {
                "name": "formDefinitionUpdatedAt",
                "value": "1646045760105"
            }
        ],
        "captchaEnabled": false,
        "formTypeNumber": 0,
        "thankYouMessageJson": "",
        "themeColor": "",
        "themeName": "canvas",
        "style": null,
        "variantId": null,
        "isPublished": true
    },
    "properties": {},
    "knownSmartFields": [],
    "gates": {
        "viralityVariation": false,
        "useRecaptchaEnterprise": true
    },
    "scopes": {
        "noBranding": true,
        "renderShell": true,
        "rawHtmlAccess": false,
        "customStyleAccess": true
    },
    "time": 1672323297297,
    "themeCss": "",
    "globalStyle": "{\"fontFamily\":\"Titillium Web\",\"labelTextColor\":\"#201c1d\",\"labelTextSize\":\"14px\",\"submitFontColor\":\"#ffffff\",\"submitColor\":\"#d71430\",\"submitAlignment\":\"left\"}",
    "countryCode": "NL",
    "portalSetting": {
        "enableLiveValidation": true
    },
    "errorCode": null
}*/}

const useFormData = ({formId,portalId}) => {
    const [formData, setFormData] = useState([]);
    const [isLoading, setLoading] = useState(true);
   
    useEffect(() => {
        setLoading(true);
        fetch(
        `https://forms-eu1.hsforms.com/embed/v3/form/${portalId}/${formId}/json`
        )
        .then((res) => res.json())
        .then((data) => {
            setFormData(data);
        })
        .finally(() => setLoading(false));
    }, []);
    return { formData, isLoading };
};

export default useFormData;