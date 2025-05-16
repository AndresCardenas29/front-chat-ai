// ejemplo en un componente cliente
"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Hola, {session.user?.name}</p>
        <button onClick={() => signOut()}>Salir</button>
      </>
    );
  }

  return <button onClick={() => signIn()}>Iniciar sesión</button>;
}