import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";



interface ContactContentSectionProps { }
const ContactContentSection: React.FC<ContactContentSectionProps> = (props) => {
  const setCategorie = [
    "Corporate T-Shirts",
    "School Uniforms",
    "Sportswear",
    "Security Uniforms",
    "Housekeeping Uniforms",
  ];
  const setMatchSettingsName = (value: string) => {
  };
  return (
    <div className="">
      <div className="flex">
        <div className="bg-white w-2/5 hidden lg:block">
          <img src="assets/images/webp/contact_img.webp" alt="" className="w-[85%] h-full object-fill" />
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
            <div className="py-6 md:w-1/2 md:pr-4">
              <FormControl fullWidth>
                <InputLabel id="role-lablel"><span className="text-black">Choose categorie*</span></InputLabel>
                <Select
                  labelId="role-lablel"
                  label="Choose categorie*"
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#969696',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#969696',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: "1px solid #969696",
                    },
                  }}
                >
                  {setCategorie.map(
                    (prop, index) => {
                      return (
                        <MenuItem key={index} value={prop}
                          onClick={() => { }}>
                          {prop}
                        </MenuItem>
                      );
                    }
                  )}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="">
            <div className="monsterrat-bold text-sm">Your details</div>
            <div className="md:flex gap-8  pt-4">
              <TextField
                label={<span className="text-black">Name*</span>}
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
                label={<span className="text-black">Last Name*</span>}
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
                label={<span className="text-black">E-mail*</span>}
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
                label={<span className="text-black">Phone no*</span>}
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
                label={<span className="text-black">City*</span>}
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
                label={<span className="text-black">Country*</span>}
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
                label={<span className="text-black">Message*</span>}
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
