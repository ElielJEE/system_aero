"use client";
import {
  CancelButton,
  EditButton,
  DeleteButton,
  SaveButton,
  LoginButton,
} from "@/components/atoms";
import { EmailInput, PasswordInput, TextInput } from "@/components/molecules";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <main>
        No mas ando probando...
        <br />
        <CancelButton />
        <LoginButton />
        <SaveButton />
        <DeleteButton />
        <EditButton />
        <TextInput
          value={name}
          label={"Nombre"}
          onChange={(e) => setName(e.target.value)}
        />
        <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </main>
    </div>
  );
}
