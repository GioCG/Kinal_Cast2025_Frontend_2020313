import { useState } from "react";
import{
    validateUsername,
    validateUsernameMessage,
    validationAvatarUrl,
    avatarUrlValidationMessage,
    validationDescription,
    descriptionValidationMessage,
    validateTitle,
    validateTitleMessage,
    emailValidationMessage
} from '../../shared/validators'
import { Input } from "../Input";
import { Settings } from "lucide-react";

const inputs =[
    {
        field:'username',
        label: 'Username',
        validationMessage: validateUsernameMessage,
        type:'text'
    },
    {
        field:'title',
        label: 'Title',
        validationMessage: validateTitleMessage,
        type:'text'
    },
    {
        field:'avatarUrl',
        label: 'AvatarUrl',
        validationMessage: avatarUrlValidationMessage,
        type:'text'
    },
    {
        field:'description',
        label: 'Description',
        validationMessage: descriptionValidationMessage,
        type:'text'
    },
]

export const ChannelSettings =({settings,saveSettings}) =>{
    const [formState, setFormState] =useState({
        username:{
            isValid: validateUsername(settings.username),
            showError: false,
            value:settings.username
        },
        title:{
            isValid: validateTitle(settings.title),
            showError: false,
            value:settings.title
        },
        avatarUrl:{
            isValid: validationAvatarUrl(Settings.avatarUrl),
            showError: false,
            value:settings.avatarUrl
        },
        description:{
            isValid: validationDescription(Settings.description),
            showError: false,
            value:settings.description
        },
    })

    const handleInputValueChange = (value,field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]:{
                ...prevState[field],
                value
            }
        }))
    }
    
    const handleInputValidationOnBlur = (value, field) =>{
        let isValid = false
    
        switch(field){
            case'username':
                isValid = validateUsername(value)
                break;
            case'title':
                isValid = validateTitle(value)
                break;
            case'avatarUrl':
                isValid = validationAvatarUrl(value)
                break;
            case'description':
                isValid = validationDescription(value)
                break;
            default:
                break;
        }

        setFormState((prevState) => ({
            ...prevState,
            [field]:{
                ...prevState[field],
                isValid,
                showError:!isValid
            }
        }))
    }
    const handleFormSubmit =(event) =>{
        event.prevDefault();

        saveSettings({
            username:formState.username.value,
            title:formState.title.value,
            avatarUrl:formState.avatarUrl.value,
            description:formState.description.value
        })
    }
}

