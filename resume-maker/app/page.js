"use client"
import FormField from "../components/FormField"
import Section from "../components/Section"
import Doc from "../components/Doc"
import { useState } from "react";


export default function Home() {

    return (
        <div className="text-white flex justify-center">
            <div>
                <div className="px-4 mt-20 min-w-[100vh]">
                    <div>
                        <h1 className="text-3xl font-bold">Resume Maker</h1>
                        <p className="text-2xl mb-10">Build your Identity!</p>
                        <Doc/>
                    </div>
                </div>
                {/* <PDFViewer showToolbar="true" className="w-full h-full mt-10">
                    <MyDocument />
                </PDFViewer> */}
            </div>
        </div>
    );
}
