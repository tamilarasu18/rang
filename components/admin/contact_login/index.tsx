import TextField from "@mui/material/TextField";
import { useEffect, useRef, useState } from "react";

interface ContactLoginProps {
    password: string;
    onDoneClick: Function;
}
const ContactLogin: React.FC<ContactLoginProps> = (props) => {
    const { password, onDoneClick } = props;
    const [enable, setEnable] = useState<boolean>(false);
    const [smsTextFields, setSmsTextFields] = useState(['', '', '', '', '', '']);
    const textFieldsRefs = smsTextFields.map(() => useRef<null | HTMLInputElement>(null));

    const handleSmsChange = (e: any, index: any) => {
        const updatedFields = [...smsTextFields];
        updatedFields[index] = e;
        setSmsTextFields(updatedFields);
        if (e != null && e != "") {
            if (index < smsTextFields.length - 1 && textFieldsRefs[index + 1]?.current) {
                textFieldsRefs[index + 1]?.current?.focus();
            }
        }

        if (updatedFields.join('') == password) {
            setEnable(true)
        } else {
            setEnable(false)
        }
    };

    const loginFunctin = () => {
        if(enable){
            onDoneClick();
            
        }
    }


    return (
        <div className="text-center">
            <div className="pt-12 pb-24">
                <div className="monsterrat-bold text-2xl py-2">RANG Clothing company</div>
                <div className="monsterrat-regular text-sm">Admin Dashboard</div>
            </div>
            <div className="monsterrat-bold py-4">Enter Login PIN</div>
            <div className="flex gap-4 justify-center">
                {smsTextFields.map((smsText, index) => (
                    <TextField
                        variant="outlined"
                        type="text"
                        onChange={(evt: any) => {
                            handleSmsChange(evt.target.value, index);
                        }}
                        inputProps={{ className: "text-center" }}
                        inputRef={textFieldsRefs[index]}
                        sx={{
                            backgroundColor: "white",
                            width: "10%",
                            textAlign: "center",
                            textJustify: "center",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    border: "2px solid #DE291B",
                                },
                                "&:hover fieldset": {
                                    border: "2px solid #DE291B",
                                },
                                "&.Mui-focused fieldset": {
                                    border: "2px solid #DE291B",
                                },
                            },
                        }}
                    />
                ))}
            </div>

            <div className="fixed bottom-0 shadow bg-white h-24 w-full lg:w-[30%]" style={{ boxShadow: "0px 0px 10px rgb(156,163,175,0.4)" }}>
                <div onClick={() => { loginFunctin() }} className={`${enable ? "bg-[#DE291B]" : "bg-gray-500"} m-4 p-4 rounded-md  monsterrat-bold text-white`}>LOGIN</div>
            </div>

        </div>
    );
};

export default ContactLogin;
