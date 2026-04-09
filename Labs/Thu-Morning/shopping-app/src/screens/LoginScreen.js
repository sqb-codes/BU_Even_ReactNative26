import { useRef, useState } from "react";
import { Button, Text, View, TextInput } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { signInWithPhoneNumber } from "firebase/auth";
import { auth, firebaseConfig } from "../services/firebaseConfig";

export const LoginScreen = ({ navigation }) => {
    const recaptchaVerifier = useRef(null);
    const [phone, setPhone] = useState("");
    const [confirmation, setConfirmation] = useState(null);
    const [otp, setOtp] = useState("");

    const sendOTP = async () => {
        try {
            const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`;
            const confirmationResult = await signInWithPhoneNumber(
                auth,
                formattedPhone,
                recaptchaVerifier.current
            );
            setConfirmation(confirmationResult);
            alert("OTP Sent..!!");
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    };

    const verifyOTP = async () => {
        try {
            await confirmation.confirm(otp);
            alert("Login Success...");
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    };

    return (
        <>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
            <View>
                <Text>Login Screen</Text>

                <TextInput
                    placeholder="+91XXXXXXXX"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                    style={{ marginVertical: 8, padding: 8, borderWidth: 1, borderRadius: 6 }}
                />
                <Button title="Send OTP" onPress={sendOTP} />

                <TextInput
                    placeholder="Enter OTP"
                    keyboardType="number-pad"
                    value={otp}
                    onChangeText={setOtp}
                    style={{ marginVertical: 8, padding: 8, borderWidth: 1, borderRadius: 6 }}
                />
                <Button title="Verify OTP" onPress={verifyOTP} />
            </View>
        </>
    );
};