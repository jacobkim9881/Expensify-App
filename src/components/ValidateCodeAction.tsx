import React, {forwardRef, useEffect, useRef} from 'react';
import type {ForwardedRef} from 'react';
import {View} from 'react-native';
import {useOnyx} from 'react-native-onyx';
import Text from './Text';
import useThemeStyles from '@hooks/useThemeStyles';
import ONYXKEYS from '@src/ONYXKEYS';
import type {ValidateCodeActionModalProps} from '@components/ValidateCodeActionModal/type';
import ValidateCodeForm from '@components/ValidateCodeActionModal/ValidateCodeForm';
import type {ValidateCodeFormHandle} from '@components/ValidateCodeActionModal/ValidateCodeForm/BaseValidateCodeForm';


type ValidateCodeActionWithoutModalProps = {
forwardedRef: ForwardedRef<ValidateCodeFormHandle>;
}


type ValidateCodeActionProps = ValidateCodeActionModalProps & ValidateCodeActionWithoutModalProps;

function ValidateCodeAction({
    isVisible,
    descriptionPrimary,
    descriptionSecondary,
    onClose,
    isClose,
    validatePendingAction,
    validateError,
    handleSubmitForm,
    clearError,
    footer,
    sendValidateCode,
    hasMagicCodeBeenSent,
    isLoading,
    forwardedRef
}: ValidateCodeActionProps,
) {
    const themeStyles = useThemeStyles();
    const firstRenderRef = useRef(true);

    const [validateCodeAction] = useOnyx(ONYXKEYS.VALIDATE_ACTION_CODE);

    useEffect(() => () => {
        clearError();
        onClose?.();
        firstRenderRef.current = true;
    }, []);

    useEffect(() => {
        if (!firstRenderRef.current || !isVisible || hasMagicCodeBeenSent) {
            return;
        }
        firstRenderRef.current = false;
	    console.log('sendValidateCode')

          //sendValidateCode();
    }, [isVisible, sendValidateCode, hasMagicCodeBeenSent]);

    return (
                <View style={[themeStyles.ph5, themeStyles.mt3, themeStyles.mb5, themeStyles.flex1]}>
                    <Text style={[themeStyles.mb3]}>{descriptionPrimary}</Text>
                    {!!descriptionSecondary && <Text style={[themeStyles.mb3]}>{descriptionSecondary}</Text>}
                    <ValidateCodeForm
                        isLoading={isLoading}
                        validateCodeAction={validateCodeAction}
                        validatePendingAction={validatePendingAction}
                        validateError={validateError}
                        handleSubmitForm={handleSubmitForm}
                        sendValidateCode={sendValidateCode}
                        clearError={clearError}
                        buttonStyles={[themeStyles.justifyContentEnd, themeStyles.flex1]}
                        ref={forwardedRef}
                        hasMagicCodeBeenSent={hasMagicCodeBeenSent}
                    />

                {footer?.()}
                </View>
    );
}

ValidateCodeAction.displayName = 'ValidateCodeAction';

export default forwardRef((props, ref) => (
    <ValidateCodeAction
        {...props}
        forwardedRef={ref}
/>
));
