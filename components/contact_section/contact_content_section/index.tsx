import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { firebaseDatabase } from "../../../utils/firebase";
import { useRouter } from "next/router";



interface ContactContentSectionProps { }
const ContactContentSection: React.FC<ContactContentSectionProps> = (props) => {
  const router = useRouter();
  const [contactDetails, setContactDetails] = useState<any>();
  const [buttonVal, setbuttonVal] = useState<boolean>(false);
  const [firebaseCount, setfirebaseCount] = useState<number>(0);
  const setCategorie = [
    "Corporate T-Shirts",
    "School Uniforms",
    "Sportswear",
    "Security Uniforms",
    "Housekeeping Uniforms",
  ];

  useEffect(() => {
    firebaseDataLength()
  }, [])

  useEffect(() => {
    console.log("adsda", contactDetails);

  }, [
    contactDetails
  ])

  const firebaseDataLength = () => {
    const firebaseData = firebaseDatabase.ref('data/contactLog');
    firebaseData.once('value')
      .then((snapshot) => {
        const dataObject = snapshot.val();
        const dataLength = Object.keys(dataObject).length;
        setfirebaseCount(dataLength);
        console.log('Length of the data:', dataLength);
      })
      .catch((error) => {
        console.error('Error fetching data from Firebase:', error);
      });
  }


  const setMatchSettingsName = (value: string, types: string) => {
    if (types == "type") {
      setContactDetails({ ...contactDetails, type: value })
    } else if (types == "category") {
      setContactDetails({ ...contactDetails, catergorie: value })
    } else if (types == "name") {
      setContactDetails({ ...contactDetails, name: value })
    } else if (types == "lastName") {
      setContactDetails({ ...contactDetails, lastName: value })
    } else if (types == "email") {
      setContactDetails({ ...contactDetails, email: value })
    } else if (types == "phoneNo") {
      setContactDetails({ ...contactDetails, mobile: value })
    } else if (types == "city") {
      setContactDetails({ ...contactDetails, city: value })
    } else if (types == "country") {
      setContactDetails({ ...contactDetails, country: value })
    } else if (types == "message") {
      setContactDetails({ ...contactDetails, message: value })
    }
    enableButton();
  };

  const enableButton = () => {
    if (
      contactDetails != null && contactDetails.type &&
      contactDetails.catergorie &&
      contactDetails.name &&
      contactDetails.lastName &&
      contactDetails.email &&
      contactDetails.mobile &&
      contactDetails.city &&
      contactDetails.country &&
      contactDetails.message
    ) {
      setbuttonVal(true)
    } else {
      setbuttonVal(false)
    }
  }

  function generateUniqueId(len: number): string {
    let buf: any = [];
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charlen = chars.length;

    for (var i = 0; i < len; ++i) {
      buf.push(chars[getRandomInt(0, charlen - 1)]);
    }

    return buf.join("");
  }

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const addDataToFirebase = () => {
    contactDetails.id = generateUniqueId(5);
    const currentDate = new Date();
    contactDetails.dateTime = currentDate.toLocaleString();
    if (buttonVal == true) {
      const firebaseData = firebaseDatabase.ref('data/contactLog');
      const newNumericIndex = firebaseCount;
      const newObjectRef = firebaseData.child(newNumericIndex.toString());
      // const newObjectRef = firebaseData.push();
      const newObject = contactDetails;

      newObjectRef.set(newObject)
        .then(() => {
          firebaseDataLength()
          setContactDetails(null);
          router.push("/");
          console.log('Object added to the database successfully');
        })
        .catch((error) => {
          console.error('Error adding object to the database:', error);
        });
    }

  }

  return (
    <div className="relative">
      <div className="flex">
        <div className="bg-transparent w-[50%] hidden lg:block">
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
            <div className="flex flex-col lg:flex-row">
              <div className="py-3 md:py-6 md:w-1/2 md:pr-4">
                <FormControl fullWidth>
                  <InputLabel id="role-lablel"><span className="text-black">Type*</span></InputLabel>
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
                            onClick={() => {
                              setMatchSettingsName(prop, "type")
                            }}>
                            {prop}
                          </MenuItem>
                        );
                      }
                    )}
                  </Select>
                </FormControl>
              </div>
              <div className="py-3 md:py-6 md:w-1/2 md:pr-4">
                <FormControl fullWidth>
                  <InputLabel id="role-lablel1"><span className="text-black">Choose categorie*</span></InputLabel>
                  <Select
                    labelId="role-lablel1"
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
                            onClick={() => {
                              setMatchSettingsName(prop, "category")
                            }}>
                            {prop}
                          </MenuItem>
                        );
                      }
                    )}
                  </Select>
                </FormControl>
              </div>
            </div>

          </div>
          <div className="">
            <div className="monsterrat-bold text-sm">Your details</div>
            <div className="md:flex gap-8  pt-4">
              <TextField
                label={<span className="text-black">Name*</span>}
                variant="outlined"
                type="text"
                value={contactDetails?.name}
                onChange={(evt) => {
                  setMatchSettingsName(evt.target.value, "name");
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
                value={contactDetails?.lastName}
                onChange={(evt) => {
                  setMatchSettingsName(evt.target.value, "lastName");
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
                  setMatchSettingsName(evt.target.value, "email");
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
                  setMatchSettingsName(evt.target.value, "phoneNo");
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
                  setMatchSettingsName(evt.target.value, "city");
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
                  setMatchSettingsName(evt.target.value, "country");
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
            <div className="pt-4 mb-10 md:m-0">
              <TextField
                label={<span className="text-black">Message*</span>}
                variant="outlined"
                type="text"
                multiline
                rows={4}
                onChange={(evt) => {
                  setMatchSettingsName(evt.target.value, "message");
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
            <div onClick={() => { addDataToFirebase() }} className={`hidden md:block cursor-pointer monsterrat-semibold px-6 py-4 rounded text-white ${buttonVal == true ? "bg-[#DE291B]" : "bg-gray-500"} bg-[#DE291B] text-base text-center w-1/2 md:w-3/12 mt-4`}>
              Send message
            </div>

          </div>
        </div>
      </div>
      <div onClick={() => { addDataToFirebase() }} className={`md:hidden cursor-pointer monsterrat-semibold text-white text-base text-center py-4 fixed bottom-0 w-full z-50 ${buttonVal == true ? "bg-[#DE291B]" : "bg-gray-500"} bg-[#DE291B]`}>
        Send message
      </div>
    </div>
  );
};

export default ContactContentSection;
