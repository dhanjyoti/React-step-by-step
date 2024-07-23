"use client";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Form() {
    const [file, setFile] = useState<File | null>(null);

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0] || null);
    };

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!file) {
            console.log("No file selected");
            return;
        }
        const data = new FormData();
        data.append("file", file);

        try {
            const result = await fetch("api/upload", {
                method: "POST",
                body: data,
            });
            const json = await result.json();
            console.log(json);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <main>
            <h1>Upload</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="file"
                    name="file"
                    onChange={onFileChange}
                />
                <button className="border border-black" type="submit">Upload Image</button>
            </form>
        </main>
    );
}
