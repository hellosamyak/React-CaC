import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <section className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-6 text-slate-300 shadow-xl shadow-cyan-950/10">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
          Profile
        </p>
        <p className="mt-3 text-lg font-semibold text-white">Please login first!</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Once the form is submitted, your username will appear here.
        </p>
      </section>
    );
  return (
    <section className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6 shadow-xl shadow-emerald-950/20">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">
        Profile
      </p>
      <h2 className="mt-3 text-2xl font-bold text-white">
        Welcome {user.username}
      </h2>
      <p className="mt-2 text-sm leading-6 text-emerald-50/80">
        Your user object is now available through context.
      </p>
    </section>
  );
}

export default Profile;
