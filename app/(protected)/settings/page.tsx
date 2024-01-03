import { auth, signOut } from "@/auth";

export default async function Settings() {
  const sessions = await auth();
  return (
    <div>
      {JSON.stringify(sessions)}

      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">sair</button>
      </form>
    </div>
  );
}
