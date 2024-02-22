import React, {FC, ReactNode} from 'react';
import {useAppSelector} from "@/shared/store/hooks";
import {selectSignUpBody} from "@/features/SignUp/model/selectors";
import {EmailForm, EmailFormComponent} from "@/features/SignUp/steps/Email/EmailForm";
import {PasswordForm, PasswordFormComponent} from "@/features/SignUp/steps/Password/PasswordForm";
import {PersonalDataForm, PersonalDataFormComponent} from "@/features/SignUp/steps/PersonalData/PersonalDataForm";
import {ConfirmationForm, ConfirmationFormComponent} from "@/features/SignUp/steps/Confirmation/ConfirmationForm";

interface SignUpFormProps {
    children?: ReactNode
    className?: string | undefined;
}

type SignUpFormComponent = FC<SignUpFormProps> & {
    Email: EmailFormComponent,
    Password: PasswordFormComponent,
    Confirmation: ConfirmationFormComponent,
    PersonalData: PersonalDataFormComponent
}

export const SignUpForm: SignUpFormComponent = (
    {
        children,
        ...props
    }
) => {
    const {error, isLoading, isPasswordEqual, repeatPassword, ...signUpBody} = useAppSelector(selectSignUpBody);
    return (
        <div>

        </div>
    );
};

SignUpForm.Email = EmailForm;
SignUpForm.Confirmation = ConfirmationForm;
SignUpForm.PersonalData = PersonalDataForm;
SignUpForm.Password = PasswordForm;

