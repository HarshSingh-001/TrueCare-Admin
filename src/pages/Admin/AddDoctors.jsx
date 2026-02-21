import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctors = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General Physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { aToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }
      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 }),
      );

      formData.forEach((value,key)=>{
          console.log(`${key}: ${value}`);
      })

      const {data} =await axios.post( backendUrl + "/api/admin/add-doctor", formData, {headers: {aToken}})

      if(data.success){
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }

    } catch (error) {}
  };

  return (
    <form action="" onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctors</p>

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll border-white">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-30 h-30 object-contain bg-gray-100 rounded-full cursor-pointer "
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => {
              setDocImg(e.target.files[0]);
            }}
            type="file"
            id="doc-img"
            hidden
          />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-100"
                type="text"
                placeholder="Enter doctor name"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-100"
                type="email"
                placeholder="Enter doctor email"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-100"
                type="password"
                placeholder="Enter doctor password"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1 ">
              <p>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                name=""
                id=""
                className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 text-gray-700 focus:outline-none focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              >
                <option value="1 Year">1 year</option>
                <option value="2 Years">2 years</option>
                <option value="3 Years">3 years</option>
                <option value="4 Years">4 years</option>
                <option value="5 Years">5 years</option>
                <option value="6 Years">6 years</option>
                <option value="7 Years">7 years</option>
                <option value="8 Years">8 years</option>
                <option value="9 Years">9 years</option>
                <option value="10 Years">10 years</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Fee</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-100"
                type="number"
                placeholder="Enter doctor fee"
                required
              />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4 ">
            <div className="flex-1 flex flex-col gap-1">
              <p>Specialization</p>

              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 text-gray-700 focus:outline-none focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                name=""
                id=""
              >
                <option value="General Physician"> General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex-1  border-gray-200 flex flex-col gap-1 focus:outline-none focus:ring-1 focus:ring-blue-100">
              <p>Education</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-100"
                type="text"
                placeholder="Enter doctor education"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-100"
                type="text"
                placeholder="Enter doctor address 1"
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="border mt-2 border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-100"
                type="text"
                placeholder="Enter doctor address 2"
                required
              />
            </div>
          </div>
        </div>

        <div className="">
          <p className="mt-4 mb-2 ">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            name="about"
            id="about"
            rows={5}
            placeholder="Enter doctor about information"
            className="border w-full border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-100"
          />
        </div>

        <button
          className="bg-primary px-10 py-3 mt-4 text-white rounded-full"
          type="submit"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctors;
