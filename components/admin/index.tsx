import { useEffect, useState } from "react";
import Navbar from "../common/navbar";
import ContactLog from "./contact_log";
import { database } from '../../utils/firebase';
import firebase from 'firebase/app';
import { ContactLogModel } from "../../model/contact_log_model";


interface AdminPageProps {}
const AdminPage: React.FC<AdminPageProps> = (props) => {
  const [passwordData, setPasswordData] = useState<string>("");
  const [contactLog, setContactLog] = useState<Array<ContactLogModel>>([]);

  useEffect(() => {
    const passwordRef = database.ref('data');

    passwordRef.on('value', (snapshot: firebase.database.DataSnapshot) => {
      const data = snapshot.val();
      if (data) {
        const { password, contactLog } = data;
        setPasswordData(password);
        setContactLog(contactLog || []);
      }
    });

    return () => {
      passwordRef.off();
    };
  }, []);

  
  return (
    <div className="">
     <Navbar isAdmin={true}/>
     <ContactLog password={passwordData} contactData={contactLog}/>
    </div>
  );
};

export default AdminPage;
