import { useEffect, useState } from "react";
import api from "../utils/axiosConfig";
import ContactCard from "./ContactCard";

const ContactDisplay = () => {
  const [contacts, setContacts] = useState([]);
  const [sortedContacts , setSortedContacts] = useState([])  
  useEffect(() => {
    async function fetchContacts() {
      try {
        const res = await api.get("/contact");
        setContacts(res.data.contacts);
        setSortedContacts([...contacts].sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
      } catch (error) {
        console.log(error);
      }
    }
    fetchContacts();
  }, [contacts]);


  return (
    <div className="w-full md:w-1/2 flex items-center ">
      <div className="w-full bg-white rounded-2xl shadow-lg p-6 flex flex-col h-[60%]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Saved Contacts
        </h2>

        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {sortedContacts.length > 0 ? (
            sortedContacts.map((contact) => (
              <ContactCard key={contact._id} contact={contact} />
            ))
          ) : (
            <div className="text-center  text-gray-500 text-3xl mt-6">
              No contacts available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactDisplay;
