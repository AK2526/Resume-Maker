"use client"
import FormField from "@/components/FormField"
import { useState } from "react";

export default function Home() {
    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const f = new FormField({label: "Name", onChange: handleChange});

    return (
        <div className="text-white h-[100vh] flex justify-center">
            <div className="px-4 mt-20 min-w-[100vh]">
                <div>
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p className="text-2xl mb-10">Welcome to the dashboard</p>
                    <FormField label="Name" onChange={handleChange} />
                </div>
                <p className="text-xl">{formData.name}</p>
            </div>
        </div>
    );
}
