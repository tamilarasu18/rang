import TextField from "@mui/material/TextField";



interface ContactContentSectionProps { }
const ContactContentSection: React.FC<ContactContentSectionProps> = (props) => {
  const setMatchSettingsName = (value: string) => {
    console.log("value", value);

  };
  return (
    <div className="">
      <div className="flex">
        <div className="bg-white w-2/5 hidden lg:block">
          <img src="assets/images/png/contact_img.png" alt="" className="w-[85%] object-fill" />
        </div>
        <div className="px-8 lg:px-0 py-4  lg:py-12 w-[100vh]">
          <div className="">
            <div className="monsterrat-bold text-4xl pb-2">Contact Us</div>
            <div className="monsterrat-regular text-base">One of our workspace experts will reach out to you based on your preferences.</div>
          </div>
          <div className="pt-4">
            <div className="monsterrat-bold text-sm">
              You are Looking for?
            </div>
          </div>
          <div className="">
            <div className="monsterrat-bold text-sm">Your details</div>
            <div className="md:flex gap-8  pt-4">
              <TextField
                label="Name*"
                variant="outlined"
                type="text"
                onChange={(evt) => {
                  setMatchSettingsName(evt.target.value);
                }}
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  marginBottom: "12px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#969696",
                    },
                    "&:hover fieldset": {
                      borderColor: "#969696",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #969696",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "black",
                  },
                }}
              />
              <TextField
                label="Last Name*"
                variant="outlined"
                type="text"
                onChange={(evt) => {
                  setMatchSettingsName(evt.target.value);
                }}
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  marginBottom: "12px",

                  "& .MuiOutlinedInput-root": {
                    color: "black",
                    "& fieldset": {
                      borderColor: "#969696",
                    },
                    "&:hover fieldset": {
                      borderColor: "#969696",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #969696",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "black",
                  },
                }}
              />
            </div>
            <div className="md:flex gap-8  pt-4">
              <TextField
                label="E-mail*"
                variant="outlined"
                type="text"
                onChange={(evt) => {
                  setMatchSettingsName(evt.target.value);
                }}
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  marginBottom: "12px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#969696",
                    },
                    "&:hover fieldset": {
                      borderColor: "#969696",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #969696",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "black",
                  },
                }}
              />
              <TextField
                label="Phone no*"
                variant="outlined"
                type="text"
                onChange={(evt) => {
                  setMatchSettingsName(evt.target.value);
                }}
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  marginBottom: "12px",

                  "& .MuiOutlinedInput-root": {
                    color: "black",
                    "& fieldset": {
                      borderColor: "#969696",
                    },
                    "&:hover fieldset": {
                      borderColor: "#969696",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #969696",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "black",
                  },
                }}
              />
            </div>
            <div className="md:flex gap-8  pt-4">
              <TextField
                label="City*"
                variant="outlined"
                type="text"
                onChange={(evt) => {
                  setMatchSettingsName(evt.target.value);
                }}
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  marginBottom: "12px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#969696",
                    },
                    "&:hover fieldset": {
                      borderColor: "#969696",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #969696",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "black",
                  },
                }}
              />
              <TextField
                label="Country*"
                variant="outlined"
                type="text"
                onChange={(evt) => {
                  setMatchSettingsName(evt.target.value);
                }}
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  marginBottom: "12px",

                  "& .MuiOutlinedInput-root": {
                    color: "black",
                    "& fieldset": {
                      borderColor: "#969696",
                    },
                    "&:hover fieldset": {
                      borderColor: "#969696",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #969696",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "black",
                  },
                }}
              />
            </div>
            <div className="pt-4">
              <TextField
                label="Message*"
                variant="outlined"
                type="text"
                multiline
                rows={4}
                onChange={(evt) => {
                  setMatchSettingsName(evt.target.value);
                }}
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  marginBottom: "12px",

                  "& .MuiOutlinedInput-root": {
                    color: "black",
                    "& fieldset": {
                      borderColor: "#969696",
                    },
                    "&:hover fieldset": {
                      borderColor: "#969696",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #969696",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "black",
                  },
                }}
              />
            </div>
            <div className="montserrat-semiBold px-6 py-4 rounded text-white bg-[#DE291B] text-base text-center w-1/2 md:w-3/12 mt-4">
              Send message
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContentSection;
