import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, ViewStyle, TextInputStyle } from 'react-native';

interface KoolOtpInputProps {
    pinCount?: number;
    onCodeFilled?: (code: string) => void;
    onCodeChanged?: (code: string) => void;
    autoFocusOnLoad?: boolean;
    codeInputStyle?: TextInputStyle;
    codeInputHighlightStyle?: TextInputStyle;
    placeholder?: string;
}

const KoolOtpInput: React.FC<KoolOtpInputProps> = ({
    pinCount = 6,
    onCodeFilled,
    onCodeChanged,
    autoFocusOnLoad = true,
    codeInputStyle,
    codeInputHighlightStyle,
    placeholder = '•',
}: KoolOtpInputProps) => {
    const [code, setCode] = useState<string[]>(Array(pinCount).fill(''));

    const handleInputChange = (text: string, index: number): void => {
        if (text.length <= 1) {
            const newCode = [...code];
            newCode[index] = text;
            setCode(newCode);
            onCodeChanged && onCodeChanged(newCode.join(''));

            if (newCode.every(c => c.length > 0)) {
                onCodeFilled && onCodeFilled(newCode.join(''));
            }
        }
    };

    const handleFocus = (index: number): void => {
        if (index < pinCount - 1) {
            setTimeout(() => {
                const nextInput = (this as any)[`input${index + 1}`];
                if (nextInput) {
                    nextInput.focus();
                }
            }, 200);
        }
    };

    return (
        <View style={styles.container}>
            {Array(pinCount).fill('').map((_, index) => (
                <TextInput
                    key={index}
                    ref={(ref) => (this as any)[`input${index}`] = ref}
                    style={[
                        styles.codeInput,
                        codeInputStyle,
                        index < pinCount - 1 && { marginRight: 20 },
                        code[index].length > 0 && codeInputHighlightStyle,
                    ]}
                    maxLength={1}
                    keyboardType="numeric"
                    autoFocus={autoFocusOnLoad && index === 0}
                    value={code[index]}
                    onChangeText={(text) => {
                        handleInputChange(text, index);
                        handleFocus(index);
                    }}
                    textAlign="center"
                    placeholder={placeholder}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    codeInput: {
        width: 30,
        height: 50,
        fontSize: 24,
        borderBottomWidth: 2,
        textAlign: 'center',
    },
});

export default KoolOtpInput;
