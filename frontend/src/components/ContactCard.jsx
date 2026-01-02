import { toast } from "react-toastify"
import api from "../utils/axiosConfig"

const ContactCard = ({contact}) => {
    const deleteContact = async (_id)=>{
        try {
            const res = await api.delete(`/contact/${_id}`)
            console.log(res.data.msg)
            toast.success('Contact deleted successfully!')
        } catch (error) {
            console.log('error deleting contact' , error.response?.data)
            toast.error(error.response?.data)
        }
    }
  return (
    <div className="space-y-4">

        <div className="border rounded-xl p-4 hover:shadow-md transition mt-5">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                {contact.name}
              </h3>
              <p className="text-sm text-gray-600">
                +91 {contact.phone}
              </p>
              <p className="text-sm text-gray-600">
                {contact.email}
              </p>
            </div>

            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              Active
            </span>
          </div>

          <p className="text-sm text-gray-700 mt-3">
            {contact.message}
          </p>

          <div className="flex mt-4">
            <button onClick={()=>deleteContact(contact._id)} className="flex-1 text-sm bg-red-500 text-white py-1.5 rounded-lg hover:bg-red-600 transition cursor-pointer">
              Delete Contact
            </button>
          </div>
        </div>
        

      </div>
  )
}

export default ContactCard